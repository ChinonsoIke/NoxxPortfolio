import styled from "styled-components";

export const ProjectsStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    overflow-y: auto;
    max-height: 70vh;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    margin-top: 2rem;

    @media only screen and (max-width: 760px){
        padding: 1rem 0;
        .buttons {
            display: flex;
        }
    }
`