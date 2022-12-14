import styled from "styled-components";

export const HeroStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #2A2A2A;
    padding: 2rem 0;

    @media only screen and (max-width: 760px){
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

    animation-name: slide;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: 1;

    @keyframes slide {
        0% {
            transform: scale(25%);
        }

        33% {
            transform: scale(50%);
        }

        66% {
            transform: scale(75%);
        }

        90% {
            transform: scale(120%) translateX(10rem);
        }

        100% {
            transform: scale(100%) translateX(0);
        }
    }
`