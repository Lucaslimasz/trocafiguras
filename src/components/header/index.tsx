import { useState } from 'react'
import * as S from './styles';
import Logo from '../../assets/logo.png';

export default function Header() {
    const [name, setName] = useState('Leonardo')
    return (
        <S.Container>
            <div>
                <img src={Logo} alt="Logo Troca Figuras" />
                <p>Bem Vindo {name} </p>
            </div>

            <div>
                <button>Cadastrar nova carta</button>
                <button>Cadastrar nova carta</button>
            </div>

        </S.Container>
);
}