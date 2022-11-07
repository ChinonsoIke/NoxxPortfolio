import styled from "styled-components";

export const HomeStyles = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
    background: whitesmoke;
    position: relative;

    @media only screen and (max-width: 760px){
        padding: 0.5rem;
        gap: 0;
    }
`

export const Right = styled.div`
    width: 75%;
    max-height: 80vh;
    overflow-y: auto;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media only screen and (max-width: 760px){
        width: 100%;
    }
`

export const Left = styled.div`
    width: 25%;
    position: relative;

    @media only screen and (max-width: 760px){
        width: 0%;
    }
`