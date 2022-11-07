import * as S from './styles';

import Header from '../../components/header';
import Location from '../../components/location';
import Card from '../../components/card';
import RegisterPost from '../../components/RegisterPost';
import { useState } from 'react';

const Home = () => {
  const [isOpenModalRegister, setIsOpenModalRegister] = useState<boolean>(false);

  const handleCloseModalRegister = () => {
    setIsOpenModalRegister(false)
  }

  const handleOpenModalRegister = () => {
    setIsOpenModalRegister(true)
  }

  return (
    <S.Container>
      <RegisterPost isOpen={isOpenModalRegister} onClose={handleCloseModalRegister} />
      <Header openModalRegister={handleOpenModalRegister} />
      <Location />
      <main>
        <S.GridCards>
          <Card />
        </S.GridCards>
      </main>

    </S.Container>
  );
}

export default Home;