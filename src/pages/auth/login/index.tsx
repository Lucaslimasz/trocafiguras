import { useNavigate } from 'react-router'

import * as S from './styles';

import ReactLoading from 'react-loading';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { firebase } from '../../../config/firebase';

import MobileIllustration from '../../../assets/icons/mobile.svg';
import LoginIcon from '../../../assets/icons/login.svg';
import Logo from '../../../assets/logo-auth.png';

import Input from '../../../components/Input';
import Button from '../../../components/button';
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';


export default function Login() {
  const navigate = useNavigate();
  const auth = getAuth(firebase);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { register, handleSubmit } = useForm();

  const handleSubmitForm: SubmitHandler<FieldValues> = async (itens) => {
    const { email, password } = itens;
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res)
      }).catch(() => {
        toast.error('Usuário ou Senha Invalido')
      }).finally(() => {

      }).finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <ToastContainer theme='light' />
      <S.Container>
        <div>
          <img src={Logo} alt="Logomarca" />
          <h1>Faça seu login</h1>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
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