import { useState } from 'react'
import * as S from './styles';
import Logo from '../../assets/logo.png';
import Power from '../../assets/icons/power.svg'
import Button from '../button';

export default function Header() {
  const [name, setName] = useState('Leonardo')

  function handleLogout(){
    alert('Deslogando')
  }

  function handleRegisterCard(){
    alert('Cadastrando Cartas')
  }

  return (
    <S.Container>
        <S.Header>
        <S.SectionContainer>
          <a href='/'>
            <img src={Logo} alt="Logo Troca Figuras" /> 
          </a>
          <p>Bem Vindo {name} </p>
        </S.SectionContainer>

        <S.SectionContainer>
          <Button bg='var(--green-600)' color='var(--light)' className='ButtonCardRegister' onClick={() => handleRegisterCard()}>Cadastrar nova carta</Button>
          <button className='ButtonLogout' onClick={() => handleLogout()}>
            <img src={Power} alt="Logout Icon" />
          </button>
        </S.SectionContainer>
      </S.Header>

    </S.Container>
);
} 