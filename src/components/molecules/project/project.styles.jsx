import styled from "styled-components";

export const ProjectStyles = styled.div`
    display: flex;
    align-items: top;
    padding: 2rem;
    border-radius: 5px;
    background: whitesmoke;
    gap: 1rem;

    @media only screen and (max-width: 600px){
        flex-wrap: wrap;
        > * {
            &:first-child {
                width: 100%;
            }
        }
    }
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;

    @media only screen and (max-width: 600px){
        width: 100%;
    }
`

export const Skills = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`

export const Tech = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    .link {
        background: #FDCA40;
        padding: 0.2rem;
        border-radius: 5px;
        display: flex;
        justify-content: center;
    }
`