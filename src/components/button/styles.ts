import styled, {css} from "styled-components";

interface IColors{
    color: string;
    background: string;
}

export const Container = styled.button<IColors>`
    width: 100%;
    height: 3.75rem;
    background-color: var(--green);
    color: var(--dark-green);
    font-size: 1.125rem;
    font-weight: bold;
    border-radius: 0.5rem;

    ${
        props => css`
            color: ${props.color};
            background: ${props.background};
        `
    }
`