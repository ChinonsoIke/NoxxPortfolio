import styled from "styled-components";

export const HeroStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #2A2A2A;
    padding: 2rem 0;

    @media only screen and (max-width: 600px){
        padding: 2rem 2rem;
        > * {
            &:first-child {
                width: 100%;
            }
            &:nth-child(2) {
                visibility: hidden;
                width: 0;
            }
        }
    }
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    word-break: break-word;
    gap: 2rem;
    z-index: 2;
`