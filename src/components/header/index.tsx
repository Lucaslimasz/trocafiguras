import * as S from './styles';

import Logo from '../../assets/logo.png';
import Power from '../../assets/icons/power.svg'
import Button from '../button';
import { useAuth } from '../../hooks/useAuth';
import { useEffect, useState } from 'react';

interface HeaderProps {
  openModalRegister: () => void;
}

export default function Header({ openModalRegister }: HeaderProps) {
  const [name, setName] = useState<string>('');
  const { signOut } = useAuth();

  useEffect(() => {
    const nameUser = String(sessionStorage.getItem('@auth/name')?.replaceAll('"', ''));
    setName(nameUser)
  }, [])

  return (
    <S.Container>
      <S.Header>
        <S.SectionContainer>
          <a href='/'>
            <img src={Logo} alt="Logo Troca Figuras" />
          </a>
          <p>Bem Vindo, {name} </p>
        </S.SectionContainer>

        <S.SectionContainer className='ContainerButtons'>
          <div>
            <Button bg='var(--green-600)' color='var(--light)' className='ButtonCardRegister' onClick={openModalRegister}>Cadastrar nova carta</Button>
          </div>

          <button className='ButtonLogout' onClick={signOut}>
            <img src={Power} alt="Logout Icon" />
          </button>
        </S.SectionContainer>
      </S.Header>
    </S.Container>
  );
} 