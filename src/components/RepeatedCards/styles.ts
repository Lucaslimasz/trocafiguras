import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;

  h1 {
    margin-bottom: 1.25rem;
    color: var(--light);
    font-weight: 800;
  }
  
  > div {
    margin-bottom: 5rem;
    max-height: 60vh;
    overflow-y: scroll;
    > div {
      margin-bottom: 3.5rem;
      h2 {
        margin-bottom: 1.5rem;
        font-weight: 700;
        font-size: 20px;
        color: var(--light);
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 0.875rem;
      }
    }
  }

  span {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 400px;
    display: flex;
    gap: 1rem;
    bottom: -5.5rem;
    div {
      flex: 1;
    }
  }
`

export const Card = styled.li<{selected: boolean}>`
  background-color: var(--light);
  color: var(--green-600);
  padding: 0.375rem 0.75rem;
  font-weight: 800;
  font-size: 24px;
  border-radius: 0.375rem;
  cursor: pointer;
  
  ${({selected}) => selected && css`
    background-color: var(--green-600);
    color: var(--light);
  `}
`