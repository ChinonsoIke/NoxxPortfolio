import styled from "styled-components";

export const CustomText = styled.p`
    color: ${({color}) => color || '#2A2A2A'};
    font-size: ${({size}) => size || '1rem'};
    font-weight: ${({weight}) => weight || '500'};
    padding: ${({padding}) => padding};
    border-radius: ${({borderRadius}) => borderRadius};
    background: ${({background}) => background};
`