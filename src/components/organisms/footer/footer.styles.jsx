import styled from "styled-components";

export const FooterStyles = styled.div`
    display: flex;
    margin-top: 3rem;
    padding: 1rem 2rem;

    @media only screen and (min-width: 601px){     

        > * {
            &:nth-child(2) {
                visibility: hidden;
            }
        }
    }

    @media only screen and (max-width: 600px){
        flex-direction: column-reverse;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
    }
`