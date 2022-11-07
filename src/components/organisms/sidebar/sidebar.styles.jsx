import styled from "styled-components";

export const SidebarStyles = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: inherit;
    position: fixed;
    background: #2A2A2A;
    padding: 1rem;

    @media only screen and (max-width: 760px){
        visibility: hidden;
    }
`