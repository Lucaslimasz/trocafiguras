import { useRef } from 'react'

import * as S from './styles'

import NeymarCard from '../../assets/neymar.png'
import RightAngle from '../../assets/icons/right-angle.svg'
import CardImage from '../../assets/vinijr.png'

export default function Card() {
  const carousel = useRef<HTMLDivElement>(null);
  const carouselMain = useRef<HTMLDivElement>(null);
  
  function handleLeftClick(){
    if(!carousel.current){
      return null
    } else {
      carousel.current.scrollLeft -= 50;
    }
  }

  function handleRightClick(){ 
    if(!carousel.current){
      return null
    } else {
      carousel.current.scrollLeft += 50;
    }
  }

  function handleLeftClickMain(){
    if(!carouselMain.current){
      return null
    } else {
      carouselMain.current.scrollLeft -= 220;
    }
  }

  function handleRightClickMain(){ 
    if(!carouselMain.current){
      return null
    } else {
      carouselMain.current.scrollLeft += 220;
    }
  }
  
  return (
    <S.Container>
      <span>
        Carta Para Troca
      </span>
      <S.DivContent>

        {/* Map Carta Desejada */}
        <S.DivImage>
          <S.ButtonNextLeftMain onClick={handleLeftClickMain}>
            <img src={RightAngle} alt="Angle Icon"/>
          </S.ButtonNextLeftMain>

          <S.CarrosselMainRow ref={carouselMain} >
            <img src={NeymarCard} alt="Imagem da Carta" />
            <img src={NeymarCard} alt="Imagem da Carta" />
            <img src={NeymarCard} alt="Imagem da Carta" />  
          </S.CarrosselMainRow>

          <S.ButtonNextRightMain onClick={handleRightClickMain}>
            <img src={RightAngle} alt="Angle Icon"/>
          </S.ButtonNextRightMain>
        </S.DivImage>

        <S.CarrosselContainer>
          <S.ButtonNextLeft onClick={handleLeftClick}>
            <img src={RightAngle} alt="Angle Icon"/>
          </S.ButtonNextLeft>

          <S.CarrosselRow ref={carousel}>
            <div className='WisheCard'>
              <p>De</p>
              <p>se</p>
              <p>ja</p>
              <p>das</p>
            </div>

            {/* MAP COM AS CARTAS */}
            <img src={CardImage} alt="card" />
            <img src={CardImage} alt="card" />
            <img src={CardImage} alt="card" />
            <img src={CardImage} alt="card" />
            <img src={CardImage} alt="card" />
          </S.CarrosselRow>

          <S.ButtonNextRight onClick={handleRightClick}>
            <img src={RightAngle} alt="Angle Icon"/>
          </S.ButtonNextRight>
        </S.CarrosselContainer>
      </S.DivContent>
      <S.SendDiv>
        <div>
          <h2>Leonardo</h2>
          <p>Tremembé | São Paulo - SP</p>
        </div>

        <button>
          <img src={RightAngle} alt="Icone de Enviar" />
        </button>
      </S.SendDiv>
    </S.Container>
  );
}