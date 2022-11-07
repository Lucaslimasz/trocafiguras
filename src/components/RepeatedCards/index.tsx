import ReactModal from 'react-modal'

import * as S from './styles'

import Button from '../button';
import { usePost } from 'hooks/usePost';

interface IRegisterPostProps {
  isOpen: boolean;
  onClose: (e: any) => void;
}

export default function RepeatedCards({ isOpen, onClose }: IRegisterPostProps) {

  const { dataCards,
    handleRepeatedSelectedCards,
    cardsSelectedRepeated
  } = usePost();

  return (
    <ReactModal
      className='react-modal select-card'
      overlayClassName='react-modal-content'
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <S.Container>
        <h1>Defina suas cartas repetidas</h1>
        <div>
          {
            dataCards.map((itens) => (
              <div key={itens.id}>
                <h2>{`${itens.initials} - ${itens.nation}`}</h2>
                <ul>
                  {
                    itens.cards.map((singleCard) => {
                      return (
                        <S.Card
                          key={singleCard.card}
                          onClick={() => handleRepeatedSelectedCards(singleCard)}
                          selected={cardsSelectedRepeated.some((card) => card.id === singleCard.id)}
                        >
                          {singleCard.card}
                        </S.Card>
                      )
                    })}
                </ul>
              </div>

            ))
          }
        </div>
        <span>
          <Button bg="var(--light)" color="var(--green-dark)">cancelar</Button>
          <Button bg="var(--green-600)" color="var(--light)" onClick={onClose}>Cadastrar</Button>
        </span>
      </S.Container>
    </ReactModal>
  );
}