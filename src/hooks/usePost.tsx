import { useContext, createContext, useCallback, useState, useEffect } from 'react';

interface ICard {
  card: string;
  id: string;
}

interface ICards {
  id: string;
  nation: string;
  initials: string;
  cards: {
    id: string;
    card: string;
  }[];
}

interface IRegisterProst {
  dataCards: ICards[];
  handleRepeatedSelectedCards: (cardSelection: ICard) => void;
  handleCardsToExchange: (cardSelection: ICard) => void;
  cardsSelectedRepeated: ICard[];
  cardsToExchange: ICard[];
  isRegisterCardsSelected: boolean;
  handleStateRegisterCardsSelected: () => void;
}

const RegisterPostContext = createContext<IRegisterProst>({} as IRegisterProst)

export const PostProvider = ({ children }: any) => {

  const cards: ICards[] = [
    {
      id: String(Math.random()),
      nation: 'Especials',
      initials: 'FWC',
      cards: [
        { id: String(Math.random()), card: 'FWC 01' },
        { id: String(Math.random()), card: 'FWC 02' },
        { id: String(Math.random()), card: 'FWC 03' },
        { id: String(Math.random()), card: 'FWC 04' },
        { id: String(Math.random()), card: 'FWC 05' },
        { id: String(Math.random()), card: 'FWC 06' },
        { id: String(Math.random()), card: 'FWC 07' },
        { id: String(Math.random()), card: 'FWC 08' },
        { id: String(Math.random()), card: 'FWC 09' },
        { id: String(Math.random()), card: 'FWC 10' },
        { id: String(Math.random()), card: 'FWC 12' },
        { id: String(Math.random()), card: 'FWC 13' },
        { id: String(Math.random()), card: 'FWC 14' },
        { id: String(Math.random()), card: 'FWC 15' },
        { id: String(Math.random()), card: 'FWC 16' },
        { id: String(Math.random()), card: 'FWC 17' },
        { id: String(Math.random()), card: 'FWC 18' },
        { id: String(Math.random()), card: 'FWC 19' },
        { id: String(Math.random()), card: 'FWC 20' },
      ],
    },
    {
      id: String(Math.random()),
      nation: 'Stadiums',
      initials: 'FWC',
      cards: [
        { id: String(Math.random()), card: 'FWC 01' },
        { id: String(Math.random()), card: 'FWC 02' },
        { id: String(Math.random()), card: 'FWC 03' },
        { id: String(Math.random()), card: 'FWC 04' },
        { id: String(Math.random()), card: 'FWC 05' },
        { id: String(Math.random()), card: 'FWC 06' },
        { id: String(Math.random()), card: 'FWC 07' },
        { id: String(Math.random()), card: 'FWC 08' },
        { id: String(Math.random()), card: 'FWC 09' },
        { id: String(Math.random()), card: 'FWC 10' },
        { id: String(Math.random()), card: 'FWC 12' },
        { id: String(Math.random()), card: 'FWC 13' },
        { id: String(Math.random()), card: 'FWC 14' },
        { id: String(Math.random()), card: 'FWC 15' },
        { id: String(Math.random()), card: 'FWC 16' },
        { id: String(Math.random()), card: 'FWC 17' },
        { id: String(Math.random()), card: 'FWC 18' },
        { id: String(Math.random()), card: 'FWC 19' },
        { id: String(Math.random()), card: 'FWC 20' },
      ],
    },
    {
      id: String(Math.random()),
      nation: 'Ball',
      initials: 'FWC',
      cards: [
        { id: String(Math.random()), card: 'FWC 01' },
        { id: String(Math.random()), card: 'FWC 02' },
        { id: String(Math.random()), card: 'FWC 03' },
        { id: String(Math.random()), card: 'FWC 04' },
        { id: String(Math.random()), card: 'FWC 05' },
        { id: String(Math.random()), card: 'FWC 06' },
        { id: String(Math.random()), card: 'FWC 07' },
        { id: String(Math.random()), card: 'FWC 08' },
        { id: String(Math.random()), card: 'FWC 09' },
        { id: String(Math.random()), card: 'FWC 10' },
        { id: String(Math.random()), card: 'FWC 12' },
        { id: String(Math.random()), card: 'FWC 13' },
        { id: String(Math.random()), card: 'FWC 14' },
        { id: String(Math.random()), card: 'FWC 15' },
        { id: String(Math.random()), card: 'FWC 16' },
        { id: String(Math.random()), card: 'FWC 17' },
        { id: String(Math.random()), card: 'FWC 18' },
        { id: String(Math.random()), card: 'FWC 19' },
        { id: String(Math.random()), card: 'FWC 20' },
      ],
    },
    {
      id: String(Math.random()),
      nation: 'Qatar',
      initials: 'QAT',
      cards: [
        { id: String(Math.random()), card: 'QAT 01' },
        { id: String(Math.random()), card: 'QAT 02' },
        { id: String(Math.random()), card: 'QAT 03' },
        { id: String(Math.random()), card: 'QAT 04' },
        { id: String(Math.random()), card: 'QAT 05' },
        { id: String(Math.random()), card: 'QAT 06' },
        { id: String(Math.random()), card: 'QAT 07' },
        { id: String(Math.random()), card: 'QAT 08' },
        { id: String(Math.random()), card: 'QAT 09' },
        { id: String(Math.random()), card: 'QAT 10' },
        { id: String(Math.random()), card: 'QAT 12' },
        { id: String(Math.random()), card: 'QAT 13' },
        { id: String(Math.random()), card: 'QAT 14' },
        { id: String(Math.random()), card: 'QAT 15' },
        { id: String(Math.random()), card: 'QAT 16' },
        { id: String(Math.random()), card: 'QAT 17' },
        { id: String(Math.random()), card: 'QAT 18' },
        { id: String(Math.random()), card: 'QAT 19' },
        { id: String(Math.random()), card: 'QAT 20' },
      ],
    },
    {
      id: String(Math.random()),
      nation: 'Ecuador',
      initials: 'ECU',
      cards: [
        { id: String(Math.random()), card: 'ECU 01' },
        { id: String(Math.random()), card: 'ECU 02' },
        { id: String(Math.random()), card: 'ECU 03' },
        { id: String(Math.random()), card: 'ECU 04' },
        { id: String(Math.random()), card: 'ECU 05' },
        { id: String(Math.random()), card: 'ECU 06' },
        { id: String(Math.random()), card: 'ECU 07' },
        { id: String(Math.random()), card: 'ECU 08' },
        { id: String(Math.random()), card: 'ECU 09' },
        { id: String(Math.random()), card: 'ECU 10' },
        { id: String(Math.random()), card: 'ECU 12' },
        { id: String(Math.random()), card: 'ECU 13' },
        { id: String(Math.random()), card: 'ECU 14' },
        { id: String(Math.random()), card: 'ECU 15' },
        { id: String(Math.random()), card: 'ECU 16' },
        { id: String(Math.random()), card: 'ECU 17' },
        { id: String(Math.random()), card: 'ECU 18' },
        { id: String(Math.random()), card: 'ECU 19' },
        { id: String(Math.random()), card: 'ECU 20' },
      ],
    },
    {
      id: String(Math.random()),
      nation: 'Senegal',
      initials: 'SEN',
      cards: [
        { id: String(Math.random()), card: 'SEN 01' },
        { id: String(Math.random()), card: 'SEN 02' },
        { id: String(Math.random()), card: 'SEN 03' },
        { id: String(Math.random()), card: 'SEN 04' },
        { id: String(Math.random()), card: 'SEN 05' },
        { id: String(Math.random()), card: 'SEN 06' },
        { id: String(Math.random()), card: 'SEN 07' },
        { id: String(Math.random()), card: 'SEN 08' },
        { id: String(Math.random()), card: 'SEN 09' },
        { id: String(Math.random()), card: 'SEN 10' },
        { id: String(Math.random()), card: 'SEN 12' },
        { id: String(Math.random()), card: 'SEN 13' },
        { id: String(Math.random()), card: 'SEN 14' },
        { id: String(Math.random()), card: 'SEN 15' },
        { id: String(Math.random()), card: 'SEN 16' },
        { id: String(Math.random()), card: 'SEN 17' },
        { id: String(Math.random()), card: 'SEN 18' },
        { id: String(Math.random()), card: 'SEN 19' },
        { id: String(Math.random()), card: 'SEN 20' },
      ],
    },
    {
      id: String(Math.random()),
      nation: 'Netherlands',
      initials: 'NED',
      cards: [
        { id: String(Math.random()), card: 'NED 01' },
        { id: String(Math.random()), card: 'NED 02' },
        { id: String(Math.random()), card: 'NED 03' },
        { id: String(Math.random()), card: 'NED 04' },
        { id: String(Math.random()), card: 'NED 05' },
        { id: String(Math.random()), card: 'NED 06' },
        { id: String(Math.random()), card: 'NED 07' },
        { id: String(Math.random()), card: 'NED 08' },
        { id: String(Math.random()), card: 'NED 09' },
        { id: String(Math.random()), card: 'NED 10' },
        { id: String(Math.random()), card: 'NED 12' },
        { id: String(Math.random()), card: 'NED 13' },
        { id: String(Math.random()), card: 'NED 14' },
        { id: String(Math.random()), card: 'NED 15' },
        { id: String(Math.random()), card: 'NED 16' },
        { id: String(Math.random()), card: 'NED 17' },
        { id: String(Math.random()), card: 'NED 18' },
        { id: String(Math.random()), card: 'NED 19' },
        { id: String(Math.random()), card: 'NED 20' },
      ],
    },
    {
      id: String(Math.random()),
      nation: 'Netherlands',
      initials: 'NED',
      cards: [
        { id: String(Math.random()), card: 'NED 01' },
        { id: String(Math.random()), card: 'NED 02' },
        { id: String(Math.random()), card: 'NED 03' },
        { id: String(Math.random()), card: 'NED 04' },
        { id: String(Math.random()), card: 'NED 05' },
        { id: String(Math.random()), card: 'NED 06' },
        { id: String(Math.random()), card: 'NED 07' },
        { id: String(Math.random()), card: 'NED 08' },
        { id: String(Math.random()), card: 'NED 09' },
        { id: String(Math.random()), card: 'NED 10' },
        { id: String(Math.random()), card: 'NED 12' },
        { id: String(Math.random()), card: 'NED 13' },
        { id: String(Math.random()), card: 'NED 14' },
        { id: String(Math.random()), card: 'NED 15' },
        { id: String(Math.random()), card: 'NED 16' },
        { id: String(Math.random()), card: 'NED 17' },
        { id: String(Math.random()), card: 'NED 18' },
        { id: String(Math.random()), card: 'NED 19' },
        { id: String(Math.random()), card: 'NED 20' },
      ],
    },
    {
      id: String(Math.random()),
      nation: 'England',
      initials: 'ENG',
      cards: [
        { id: String(Math.random()), card: 'ENG 01' },
        { id: String(Math.random()), card: 'ENG 02' },
        { id: String(Math.random()), card: 'ENG 03' },
        { id: String(Math.random()), card: 'ENG 04' },
        { id: String(Math.random()), card: 'ENG 05' },
        { id: String(Math.random()), card: 'ENG 06' },
        { id: String(Math.random()), card: 'ENG 07' },
        { id: String(Math.random()), card: 'ENG 08' },
        { id: String(Math.random()), card: 'ENG 09' },
        { id: String(Math.random()), card: 'ENG 10' },
        { id: String(Math.random()), card: 'ENG 12' },
        { id: String(Math.random()), card: 'ENG 13' },
        { id: String(Math.random()), card: 'ENG 14' },
        { id: String(Math.random()), card: 'ENG 15' },
        { id: String(Math.random()), card: 'ENG 16' },
        { id: String(Math.random()), card: 'ENG 17' },
        { id: String(Math.random()), card: 'ENG 18' },
        { id: String(Math.random()), card: 'ENG 19' },
        { id: String(Math.random()), card: 'ENG 20' },
      ],
    },
    {
      id: String(Math.random()),
      nation: 'IRAN',
      initials: 'IRN',
      cards: [
        { id: String(Math.random()), card: 'IRN 01' },
        { id: String(Math.random()), card: 'IRN 02' },
        { id: String(Math.random()), card: 'IRN 03' },
        { id: String(Math.random()), card: 'IRN 04' },
        { id: String(Math.random()), card: 'IRN 05' },
        { id: String(Math.random()), card: 'IRN 06' },
        { id: String(Math.random()), card: 'IRN 07' },
        { id: String(Math.random()), card: 'IRN 08' },
        { id: String(Math.random()), card: 'IRN 09' },
        { id: String(Math.random()), card: 'IRN 10' },
        { id: String(Math.random()), card: 'IRN 12' },
        { id: String(Math.random()), card: 'IRN 13' },
        { id: String(Math.random()), card: 'IRN 14' },
        { id: String(Math.random()), card: 'IRN 15' },
        { id: String(Math.random()), card: 'IRN 16' },
        { id: String(Math.random()), card: 'IRN 17' },
        { id: String(Math.random()), card: 'IRN 18' },
        { id: String(Math.random()), card: 'IRN 19' },
        { id: String(Math.random()), card: 'IRN 20' },
      ],
    },
    {
      id: String(Math.random()),
      nation: 'United States',
      initials: 'EUA',
      cards: [
        { id: String(Math.random()), card: 'EUA 01' },
        { id: String(Math.random()), card: 'EUA 02' },
        { id: String(Math.random()), card: 'EUA 03' },
        { id: String(Math.random()), card: 'EUA 04' },
        { id: String(Math.random()), card: 'EUA 05' },
        { id: String(Math.random()), card: 'EUA 06' },
        { id: String(Math.random()), card: 'EUA 07' },
        { id: String(Math.random()), card: 'EUA 08' },
        { id: String(Math.random()), card: 'EUA 09' },
        { id: String(Math.random()), card: 'EUA 10' },
        { id: String(Math.random()), card: 'EUA 12' },
        { id: String(Math.random()), card: 'EUA 13' },
        { id: String(Math.random()), card: 'EUA 14' },
        { id: String(Math.random()), card: 'EUA 15' },
        { id: String(Math.random()), card: 'EUA 16' },
        { id: String(Math.random()), card: 'EUA 17' },
        { id: String(Math.random()), card: 'EUA 18' },
        { id: String(Math.random()), card: 'EUA 19' },
        { id: String(Math.random()), card: 'EUA 20' },
      ],
    },
    {
      id: String(Math.random()),
      nation: 'Wales',
      initials: 'WAL',
      cards: [
        { id: String(Math.random()), card: 'WAL 01' },
        { id: String(Math.random()), card: 'WAL 02' },
        { id: String(Math.random()), card: 'WAL 03' },
        { id: String(Math.random()), card: 'WAL 04' },
        { id: String(Math.random()), card: 'WAL 05' },
        { id: String(Math.random()), card: 'WAL 06' },
        { id: String(Math.random()), card: 'WAL 07' },
        { id: String(Math.random()), card: 'WAL 08' },
        { id: String(Math.random()), card: 'WAL 09' },
        { id: String(Math.random()), card: 'WAL 10' },
        { id: String(Math.random()), card: 'WAL 12' },
        { id: String(Math.random()), card: 'WAL 13' },
        { id: String(Math.random()), card: 'WAL 14' },
        { id: String(Math.random()), card: 'WAL 15' },
        { id: String(Math.random()), card: 'WAL 16' },
        { id: String(Math.random()), card: 'WAL 17' },
        { id: String(Math.random()), card: 'WAL 18' },
        { id: String(Math.random()), card: 'WAL 19' },
        { id: String(Math.random()), card: 'WAL 20' },
      ],
    },
  ]

  const [dataCards, setDataCards] = useState<ICards[]>([]);
  const [isRegisterCardsSelected, setIsRegisterCardsSelected] = useState<boolean>(false);
  const [cardsSelectedRepeated, setCardsSelected] = useState<ICard[]>([]);
  const [cardsToExchange, setCardsToExchange] = useState<ICard[]>([]);

  const handleRepeatedSelectedCards = useCallback((cardSelection: ICard) => {
    const verifySelected = cardsSelectedRepeated.some((items) => items.id === cardSelection.id)
    if (verifySelected) {
      const newArray = cardsSelectedRepeated.filter((items) => items.id !== cardSelection.id);
      setCardsSelected(newArray)
    } else {
      setCardsSelected((prevState) => ([...prevState, cardSelection]))
    }

  }, [cardsSelectedRepeated])

  const handleCardsToExchange = useCallback((cardSelection: ICard) => {
    const verifySelected = cardsToExchange.some((items) => items.id === cardSelection.id)
    if (verifySelected) {
      const newArray = cardsToExchange.filter((items) => items.id !== cardSelection.id);
      setCardsToExchange(newArray)
    } else {
      setCardsToExchange((prevState) => ([...prevState, cardSelection]))
    }

  }, [cardsToExchange])

  useEffect(() => {
    setDataCards(cards)
    // eslint-disable-next-line
  }, [])

  const handleStateRegisterCardsSelected = useCallback(() => {
    setIsRegisterCardsSelected(true);
  }, [])

  return (
    <RegisterPostContext.Provider value={{
      dataCards,
      handleRepeatedSelectedCards,
      cardsSelectedRepeated,
      cardsToExchange,
      isRegisterCardsSelected,
      handleStateRegisterCardsSelected,
      handleCardsToExchange
    }}>
      {children}
    </RegisterPostContext.Provider>
  )
}

export const usePost = () => {
  const ctx = useContext(RegisterPostContext)

  return ctx
}