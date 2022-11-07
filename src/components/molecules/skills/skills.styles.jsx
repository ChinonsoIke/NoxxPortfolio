import styled from "styled-components";

export const SkillsStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    max-height: 40%;
    background: whitesmoke;
    border-radius: 5px;
    overflow-y: auto;
    padding: 1rem;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    > * {
        &:nth-child(1) {
            width: 100%;
        }
        &:nth-child(2) {
            width: 100%;
        }        
    }
`

export const SkillSet = styled.div`
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    background: #FDCA40;
    max-height: 2.5rem;
`