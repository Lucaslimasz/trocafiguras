import * as S from './styles';

import MobileIllustration from '../../assets/icons/mobile.svg';
import LoginIcon from '../../assets/icons/login.svg';
import Logo from '../../assets/logo-auth.png';

import Input from '../../components/Input';

export default function Auth () {
  return (
    <S.Container>
      <div>
        <img src={Logo} alt="Logomarca" />
        <h1>Faça seu login</h1>
        <form>
          <Input placeholder="Digite seu login" />
          <Input placeholder="Digite sua senha" />
          <button>Entrar</button>
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