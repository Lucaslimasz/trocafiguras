import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  max-width: 70rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  div {
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2.25rem;
    font-weight: 500;
    color: var(--light);
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 22.5rem;
    width: 100%;

    gap: 0.75rem;

    button {
      margin-top: 0.375rem;
    }
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    margin-top: 2.5rem;
    cursor: pointer;

    strong {
      color: var(--light-900);
    }
  }

  @media (max-width: 1000px){
    max-width: 100%;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;

    }

    > img {
      display: none;
    }
  }
`;