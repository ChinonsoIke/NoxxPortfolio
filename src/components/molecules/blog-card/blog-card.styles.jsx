import styled from "styled-components";

export const BlodCardStyles = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    flex-wrap: wrap;
    height: 25rem;
    background: var(--bg-primary);
    margin-bottom: 1rem;

    .content {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: space-between;
    }

    @media only screen and (max-width: 760px){
        flex-basis: 100%;
    }
`