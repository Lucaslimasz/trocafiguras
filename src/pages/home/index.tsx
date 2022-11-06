import * as S from './styles';

import Header from '../../components/header';
import Location from '../../components/location';
import Card from '../../components/card';

const Home = () => {

  return (
    <S.Container>
      <Header />
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