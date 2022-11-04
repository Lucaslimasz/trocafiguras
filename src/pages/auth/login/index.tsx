import { useNavigate, Navigate } from 'react-router'

import * as S from './styles';

import ReactLoading from 'react-loading';

import MobileIllustration from '../../../assets/icons/mobile.svg';
import LoginIcon from '../../../assets/icons/login.svg';
import Logo from '../../../assets/logo-auth.png';

import Input from '../../../components/Input';
import Button from '../../../components/button';
import { ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../../hooks/useAuth'


export default function Login() {
  const navigate = useNavigate();
  const { isLoading, signIn, isLogged } = useAuth();

  const { register, handleSubmit } = useForm();

  if (isLogged) {
    return (
      <Navigate to='/home' />
    )
  } else {
    return (
      <>
        <ToastContainer theme='light' />
        <S.Container>
          <div>
            <img src={Logo} alt="Logomarca" />
            <h1>Faça seu login</h1>
            <form onSubmit={handleSubmit(itens => signIn(itens))}>
              <Input placeholder="Digite seu E-mail" {...register('email', { required: true })} />
              <Input type="password" placeholder="Digite sua senha" {...register('password', { required: true })} required />
              <Button bg='var(--green-600)' color='var(--light)' disabled={isLoading}>
                {
                  isLoading ? <ReactLoading type="spinningBubbles" color="#ffffff" height={25} width={25} /> : 'Entrar'
                }
              </Button>
            </form>
            <span onClick={() => navigate('/register')}>
              <img src={LoginIcon} alt="Entrar" />
              <strong>Não tenho cadastro</strong>
            </span>
          </div>
          <img src={MobileIllustration} alt="" />
        </S.Container>
      </>
    );
  }
}