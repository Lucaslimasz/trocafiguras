import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './styles'

interface IPropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  bg: string;
  children: ReactNode;
}

export default function Button({color, bg, children, ...rest}: IPropsButton){
    return(
        <div>
            <S.Container color={color} background={bg} {...rest}>
                {children}
            </S.Container>
        </div>
    );
}