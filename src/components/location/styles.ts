import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 70rem;
  padding: 0 0.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--light);
    font-weight: 500;
  }
  
  > div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    margin-top: 2.75rem;

    cursor: pointer;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      p {
        font-style: normal;
        font-weight: 400;
        color: var(--light);
        font-size: 0.9rem;
      }
      
      strong {
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--light);
      }
    }
  }
`