import { useNavigate } from 'react-router-dom'

import ReactLoading from 'react-loading';

import { useForm } from 'react-hook-form';

import * as S from './styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthIllustration from '../../../assets/icons/auth.svg';
import BackArrow from '../../../assets/icons/back-arrow.svg';
import Logo from '../../../assets/logo-auth.png';

import Input from '../../../components/Input';
import Button from '../../../components/button';
import { useAuth } from 'hooks/useAuth';

export default function Auth() {
  const navigate = useNavigate();

  const { registerAuth, isLoading } = useAuth();

  const { register, handleSubmit } = useForm();


  return (
    <>
      <ToastContainer theme='light' />
      <S.Container>
        <div>
          <img src={Logo} alt="Logomarca" />
          <h1>Registre-se</h1>
          <form onSubmit={handleSubmit(itens => registerAuth(itens))}>
            <Input placeholder="Nome" {...register('name', { required: true })} required />
            <Input placeholder="CEP da sua Cidade" {...register('CEP', { required: true })} required />
            <Input placeholder="E-mail" {...register('email', { required: true })} required />
            <Input type="password" placeholder="Senha" {...register('password', { required: true })} required />
            <Input type="password" placeholder="Confirme sua senha" {...register('confirm_password', { required: true })} />
            <Button bg='var(--green-600)' color='var(--light)' disabled={isLoading}>
              {
                isLoading ? <ReactLoading type="spinningBubbles" color="#ffffff" height={25} width={25} /> : 'Entrar'
              }
            </Button>
          </form>
          <span onClick={() => navigate('/')}>
            <img src={BackArrow} alt="Entrar" />
            <strong>Já possuo uma conta</strong>
          </span>
        </div>
        <img src={AuthIllustration} alt="" />
      </S.Container>
    </>
  );
}