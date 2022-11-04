import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem;
    max-width: 70rem;
    width: 100%;
`; 

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img{
        width: 175px;
        height: 60px;
    }

    p{
        padding: 0 50px;
        font-size: 20px;
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
            width: 24px;
            height: 24px;
        }
    }

    .ButtonCardRegister{
        width: 264px;
    }
`;
