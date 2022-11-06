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
    display: flex;
    position: relative;
    margin-bottom: 0.375rem;

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
            height: 0.875rem;
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
    position: relative;

    img{
        margin: 0.25rem;
        width: 20%;
    }

    .WisheCard{
        background-color: var(--yellow);
        margin: 0.25rem 0.25rem 0.25rem 3.75rem;
        padding: 0.5rem;
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

export const CarrosselRow = styled.div`
    display: flex;
    scroll-behavior: smooth;
    overflow: hidden;
    padding-right: 3.375rem;
`

export const CarrosselMainRow = styled.div`
    display: flex;
    scroll-behavior: smooth;
    overflow: hidden;
    padding-right: 3.375rem;
    padding-left: 3.375rem;

    img{
        margin-right: 0.375rem;
    }
`

export const ButtonNextRight = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    background-color: var(--green-dark);
    opacity: 0.8;
    height: 5rem;
    width: 16%;
    margin-top: 0.25rem;
    img{
        width: 1.875rem;
        padding-top: 0.875rem;
    }
`
export const ButtonNextLeft = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    background-color: var(--green-dark);
    opacity: 0.8;
    height: 5rem;
    width: 16%;
    margin-top: 0.25rem;
    img{
        width: 1.875rem;
        padding-top: 0.875rem;
        transform: rotate(180deg);
    }
`
export const ButtonNextRightMain = styled.button`
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    background-color: var(--green-dark);
    opacity: 0.8;
    height: 100%;
    width: 15%;
    img{
        width: 30px;
        padding-top: 14px;
    }
`
export const ButtonNextLeftMain = styled.button`
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    background-color: var(--green-dark);
    opacity: 0.8;
    height: 100%;
    width: 15%;
    img{
        width: 1.875rem;
        padding-top: 0.875rem;
        transform: rotate(180deg);
    }
`