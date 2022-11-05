import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media(max-width:49.125rem){
      p{
          display: none;
      }

      Header{
          flex-direction: column;
      }

      .ContainerButtons{
          justify-content: center;
          margin-top: 1.4rem;


          .ButtonLogout{
              position: absolute;
              top: 2rem;
              right: 2rem;
          }
      }
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 0.75rem;
  max-width: 70rem;
  width: 100%;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img{
      width: 11rem;
      height: 3.75rem;
  }

  p{
      padding: 0 3.125rem;
      font-size: 16px;
      color: var(--light);
  }

  .ButtonLogout{
      width: 3.75rem;
      padding: 0px;
      height: 3.75rem;
      background-color: var(--yellow);
      color: var(--dark-green);
      font-size: 1.125rem;
      font-weight: bold;
      border-radius: 0.5rem;
      margin-left: 1.5rem;

      img{
          width: 1.5rem;
          height: 1.5rem;
      }
  }

  .ButtonCardRegister{
      width: 16.5rem;
  }
`;