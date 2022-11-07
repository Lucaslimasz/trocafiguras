import { useEffect, useState } from 'react';

import * as S from './styles'

import { updateProfile } from 'firebase/auth'

import LocationIcon from '../../assets/icons/location.svg';
import { apiCEP } from '../../config/apiCep';
import { useAuth } from '../../hooks/useAuth';

interface ILocationProps {
  city: string;
  district: string;
  uf: string;
}

export default function Location() {
  const [location, setLocation] = useState<ILocationProps>({} as ILocationProps);
  const { user, auth } = useAuth();

  useEffect(() => {
    (async () => {
      const cep = sessionStorage.getItem('@auth/CEP')?.toString().replaceAll('"', '');
      const { data } = await apiCEP.get(`${cep}/json`)
      const { localidade, bairro, uf } = data
      setLocation({ city: localidade, district: bairro, uf })
    })()
  }, [])

  const updateCep = async (CEP: string | null) => {
    await updateProfile(
      auth.currentUser,
      {
        displayName: `${user?.name}/${CEP}`
      })
      .then(() => {
        sessionStorage.setItem('@auth/CEP', CEP || '23078030')
        console.log('updated user!')
      })
      .catch((err: any) => console.log(err))
  }

  const getNewCEP = async () => {
    const response = window.prompt('type here');
    await updateCep(response)
    window.location.reload();
  }

  return (
    <S.Container>
      <h1>Cartas para troca</h1>

      <div onClick={getNewCEP}>
        <div>
          <strong>{location.district}</strong>
          <p>{`${location.city} / ${location.uf}`}</p>
        </div>
        <img src={LocationIcon} alt="localização" />
      </div>
    </S.Container>
  );
}