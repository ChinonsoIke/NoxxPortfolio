import styled from "styled-components";

export const NavBarStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;
    margin-bottom: 1rem;

    @media only screen and (max-width: 760px){
        width: 100%;
        padding: 1rem 2rem;

        > * {
            &:first-child {
                width: 60%;
            }
            &:nth-child(2) {
                visibility: hidden;
            }
            &:last-child {
                width: 40%;
            }
        }
    }

    @media only screen and (min-width: 761px){
        > * {
            &:last-child {
                visibility: hidden;
            }
        }
    }
`

export const NavStyles = styled.nav`
    display: flex;
    justify-content: center;
    gap: 4rem;
    width: 60%;

    @media only screen and (max-width: 760px){
        gap: 0.5rem;
        width: 65%;

        > * {
            &:first-child {
                visibility: hidden;
            }
        }
    }
`

export const MobileNavStyles = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 70vw;
    height: 100vh;
    top: 0;
    right: 0;
    padding: 2rem;
    z-index: 5;
    background: #2a2a2aef;
`