import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import * as S from './styles';

import MobileIllustration from '../../assets/icons/mobile.svg';
import LoginIcon from '../../assets/icons/login.svg';
import Logo from '../../assets/logo-auth.png';

import Input from '../../components/Input';
import Button from '../../components/button';

export default function Auth() {
  const { register, handleSubmit } = useForm();

  const handleSubmitForm: SubmitHandler<FieldValues> = (itens) => {
    console.log(itens)
  }

  return (
    <S.Container>
      <div>
        <img src={Logo} alt="Logomarca" />
        <h1>Faça seu login</h1>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Input placeholder="Digite seu login" {...register('login', { required: true })} />
          <Input type="password" placeholder="Digite sua senha" {...register('password', { required: true })} required />
          <Button bg='var(--green-600)' color='var(--light)'>Entrar</Button>
        </form>
        <span>
          <img src={LoginIcon} alt="Entrar" />
          <strong>Não tenho cadastro</strong>
        </span>
      </div>
      <img src={MobileIllustration} alt="" />
    </S.Container>
  );
}