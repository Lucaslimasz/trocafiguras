import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import ReactLoading from 'react-loading';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import * as S from './styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthIllustration from '../../../assets/icons/auth.svg';
import BackArrow from '../../../assets/icons/back-arrow.svg';
import Logo from '../../../assets/logo-auth.png';

import Input from '../../../components/Input';
import Button from '../../../components/button';
import { firebase } from '../../../config/firebase';

export default function Auth() {
  const auth = getAuth(firebase);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { register, handleSubmit } = useForm();


  const handleSubmitForm: SubmitHandler<FieldValues> = async (itens) => {
    const { email, password, confirm_password } = itens
    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (password === confirm_password) {
          console.log(res)
          window.location.reload();
        } else {
          return toast.error('As senhas devem ser iguais.')
        }
      }).catch((err) => {
        const message = err.toString().split('/')[1]?.split('-').toString().replaceAll(',', ' ').replaceAll(')', '');
        toast.error(message)
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
          <h1>Registre-se</h1>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Input placeholder="Digite seu E-mail" {...register('email', { required: true })} />
            <Input type="password" placeholder="Digite sua senha" {...register('password', { required: true })} required />
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