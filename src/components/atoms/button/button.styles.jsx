import styled from "styled-components";

export const CustomButton = styled.button`
    background: ${({bg}) => bg || '#FDCA40'};
    color: ${({textColor}) => textColor || '#2A2A2A'};
    padding: 0.5rem 1rem;
    border: none;
    font-size: 1rem;
    align-self: flex-start;
    cursor: pointer;

    &:focus {
        border: solid;
        border-color: ${({focusBorder}) => focusBorder};
    }
`