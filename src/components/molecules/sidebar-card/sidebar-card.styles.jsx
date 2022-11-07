import styled from "styled-components";

export const CardStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    height: 30%;
    width: 100%;
    background: whitesmoke;
    border-radius: 5px;

    > * {
        &:first-child {
            margin-bottom: 1rem;
        }
    }
`