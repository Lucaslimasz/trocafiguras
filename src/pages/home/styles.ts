import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 6rem;
  
  main{
    display: flex;
    flex-direction: column;
    max-width: 70rem;
    width: 100%;
    margin-top: 4.375rem;

    color: var(--light);
  }
`

export const HeaderPage = styled.section`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.625rem;
`;

export const LocationDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img{
    width: 22px;
    height: 22px;
    margin-left: 0.375rem;
  }
`;

export const GridCards = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
`