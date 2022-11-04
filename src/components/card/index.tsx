import * as S from './styles'
import NeymarCard from '../../assets/neymar.png'
import RightAngle from '../../assets/icons/right-angle.svg'
import CardImage from '../../assets/vinijr.png'

export default function Card(){

    
    return(
        <S.Container>
            <span>
                Carta Para Troca
            </span>
            <S.DivContent>


                <S.DivImage>
                    <img src={NeymarCard} alt="Imagem da Carta"/>
                </S.DivImage>

                <S.CarrosselContainer>
                    <div className='WisheCard'>
                        <p>De</p>
                        <p>se</p>
                        <p>ja</p>
                        <p>das</p>
                    </div>
                    <img src={CardImage} alt="card"/>
                    <img src={CardImage} alt="card"/>
                    <img src={CardImage} alt="card"/>
                    <img src={CardImage} alt="card"/>
                    <img src={CardImage} alt="card"/>
                    <img src={CardImage} alt="card"/>
                    <img src={CardImage} alt="card"/>
                    <img src={CardImage} alt="card"/>
                    <img src={CardImage} alt="card"/>
                </S.CarrosselContainer>
            </S.DivContent>
            <S.SendDiv>
                <div>
                    <h2>Lucas Lima</h2>
                    <p>João Pessoa - PB</p>
                </div>

                <button>
                    <img src={RightAngle} alt="Icone de Enviar"/>
                </button>
            </S.SendDiv>
        </S.Container>
    );
}