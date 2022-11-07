import ReactModal from 'react-modal'

import { useState, ChangeEvent } from 'react';
import * as S from './styles'

import Logo from '../../assets/logo.png';
import Back from '../../assets/icons/back-arrow.svg';
import Input from '../../components/Input';
import Button from '../../components/button';
import CardsRepeated from '../RepeatedCards';
import { usePost } from 'hooks/usePost';
import CardsToExchange from '../../components/CardsToExchange';

interface IRegisterPostProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterPost({ isOpen, onClose }: IRegisterPostProps) {
  const [isModalSelectCards, setIsModalSelectCards] = useState(false);
  const [isModalCardsToExchange, setIsModalCardsToExchange] = useState(false);
  const [cepLocation, setCepLocation] = useState<string>('');

  const { cardsSelectedRepeated, cardsToExchange } = usePost();

  const openModalSelectCards = (e: any) => {
    e.preventDefault();
    setIsModalSelectCards(true)
  }

  const closedModalSelectCards = (e: any) => {
    e.preventDefault();
    setIsModalSelectCards(false)
  }

  const openModalCardsToExchange = (e: any) => {
    e.preventDefault();
    setIsModalCardsToExchange(true)
  }

  const closedModalCardsToExchange = (e: any) => {
    e.preventDefault();
    setIsModalCardsToExchange(false)
  }

  const onSubmitCardPost = (e: any) => {
    e.preventDefault();
    console.log(cardsSelectedRepeated, cardsToExchange, cepLocation)
    onClose();
  }

  return (
    <>
      <ReactModal className='react-modal' overlayClassName='react-modal-content' isOpen={isOpen} onRequestClose={onClose}>
        <S.Container>
          <div>
            <img src={Logo} alt="Logo" />
            <h1>Cadastrar troca</h1>
            <p>Preencha os campos corretamente paracompletar o seu albúm de figuras </p>
            <span onClick={onClose}>
              <img src={Back} alt="Voltar" />
              <p>Voltar para Home</p>
            </span>
          </div>
          <form>
            <Input placeholder="CEP:" required onChange={(e: ChangeEvent<HTMLInputElement>) => setCepLocation(e.target.value)} />
            <Button
              bg={cardsSelectedRepeated.length > 0 ? "var(--green-900)" : "var(--light)"}
              color={cardsSelectedRepeated.length > 0 ? "var(--green-dark)" : "var(--green-dark)"}
              style={{ textAlign: 'left' }}
              onClick={openModalSelectCards}
            >
              {cardsSelectedRepeated.length > 0 ? 'Editar Repetidas' : 'Cadastrar Repetidas'}
            </Button>
            <Button
              bg={cardsToExchange.length > 0 ? "var(--green-900)" : "var(--light)"}
              color={cardsToExchange.length > 0 ? "var(--green-dark)" : "var(--green-dark)"}
              onClick={openModalCardsToExchange}
            >
              {cardsToExchange.length > 0 ? 'Editar Repetidas' : 'Cadastrar Repetidas'}
            </Button>
            <div>
              <Button color="var(--green-dark)" bg="var(--light)" onClick={onClose}>Cancelar</Button>
              <Button bg="var(--yellow)" color="var(--gree-dark)" onClick={onSubmitCardPost}>Cadastrar</Button>
            </div>
          </form>
        </S.Container>
      </ReactModal>
      <CardsRepeated isOpen={isModalSelectCards} onClose={closedModalSelectCards} />
      <CardsToExchange isOpen={isModalCardsToExchange} onClose={closedModalCardsToExchange} />
    </>
  );
}