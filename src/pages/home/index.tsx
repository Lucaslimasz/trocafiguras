import * as S from './styles'
import Header from '../../components/header';
import LocationIcon from '../../assets/icons/location.svg'
import Card from '../../components/card';

export default function Home(){
    return(
        <>
            <Header />

            <S.Container>
                <main>
                    <S.HeaderPage>
                        <h1>Cartas para troca</h1>
                        <S.LocationDiv>
                            <p>João Pessoa-PB</p>
                            <img 
                                src={LocationIcon}
                                alt="Icon de locação"
                            />
                        </S.LocationDiv>
                    </S.HeaderPage>

                    <S.GridCards>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </S.GridCards>
                </main>
            </S.Container>
        </>
    );
}