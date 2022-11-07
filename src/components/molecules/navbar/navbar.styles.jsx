import styled from "styled-components";

export const NavBarStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;
    margin-bottom: 1rem;

    @media only screen and (max-width: 600px){
        padding: 0.5rem 0.5rem;
    }
`

export const NavStyles = styled.nav`
    display: flex;
    justify-content: center;
    gap: 4rem;
    width: 60%;

    @media only screen and (max-width: 600px){
        gap: 1rem;
        width: 75%;

        > * {
            &:first-child {
                visibility: hidden;
            }
        }
    }
`