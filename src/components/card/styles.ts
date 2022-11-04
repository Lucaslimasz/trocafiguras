import styled from "styled-components";

export const Container = styled.article`
    width: 100%;
    background: var(--gradient) ;
    border-radius: 0.375rem;

    span{
        background-color: var(--green-dark);
        padding: 0.5rem;
        font-size: 0.75rem;
        font-weight: bold;
        z-index: 99;
        position: absolute;
    }
`;

export const DivImage = styled.div`
    width: 100%;
    height: 15.5rem;
    margin-bottom: 0.375rem;
    margin-bottom: 0.375rem;
    z-index: 1;
    

    img{
        z-index: 1;
        width: 100%;
        height: 15.5rem;
        border-radius: 0.375rem 0.375rem 0rem 0rem;
    }
`

export const SendDiv = styled.section`
    background-color: var(--green-600);
    padding: 0.875rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 0 0 0.375rem 0.375rem;
    

    button{
        height: 1.625rem;
        width: 1.625rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--green-dark);
        margin-left: 1rem;

        img{
            height: 14px;
            margin-top: 0.3rem;
        }
    }

    >div{
        text-align: end;

        h2{
            font-size: 0.875rem;
            font-weight: bold;
            margin-bottom: 0.2rem;
        }

        p{
            font-size: 0.625rem;
            font-weight: bold;
        }
    }


`;

export const DivContent = styled.div`
    padding: 0.625rem;
`

export const CarrosselContainer = styled.div`
    display: flex;
    overflow-x: scroll;

    img{
        margin: 4px;
        width: 20%;
    }

    .WisheCard{
        background-color: var(--yellow);
        margin: 4px 4px 4px 0px;
        padding: 8px;
        width: 20%;

        p{
            font-size: 1rem;
            line-height: 1rem;
            text-transform: uppercase;
            font-weight: 900;
            color: var(--green-dark);
        }
    }
`