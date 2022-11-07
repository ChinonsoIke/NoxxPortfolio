import styled from "styled-components";

export const SidebarFooterStyles = styled.div`
    height: 2.5rem;
    background: whitesmoke;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    width: calc(25% - 2rem);
    border-radius: 5px 5px 0 0;

    @media only screen and (max-width: 760px){
        position: relative;
        heigth: inherit;
        width: 70%;
        border-radius: 5px;
        padding: 0 1rem;
    }
`