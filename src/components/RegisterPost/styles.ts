import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    >img {
      width: 13.375rem;
    }

    h1 {
      font-weight: 500;
      font-size: 2.25rem;
      color: var(--green-600);
      margin-top: 2.625rem;
    }

    > p {
      font-weight: 400;
      font-size: 1.125rem;
      margin: 2rem 0 5rem;
      max-width: 25rem;
      color: var(--light);
    }

    span {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;

      p{
        font-weight: 700;
        font-size: 18px;
        color: var(--light);
      }

      img {
        width: 1.5rem;
      }
    }
  }

  form {
    max-width: 28rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    div {
      flex: 1;
      display: flex;
      gap: 0.75rem;
      
      button {
        flex: 1;
      }
    }
  }
`