import styled, { css } from "styled-components";

interface IColors {
  color: string;
  background: string;
}

export const Container = styled.button<IColors>`
    width: 100%;
    height: 3.75rem;
    background-color: var(--green);
    color: var(--dark-green);
    font-size: 1.125rem;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    ${props => css`
      color: ${props.color};
      background: ${props.background};
    `
  }
`