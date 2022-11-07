import styled from "styled-components";
import { Link } from "react-router-dom";

export const CustomLink = styled(Link)`
    color: ${({color}) => color || '#2A2A2A'};
    font-size: ${({size}) => size || '1rem'};
    font-weight: ${({weight}) => weight || '500'};
    padding: ${({padding}) => padding};
    background: ${({background}) => background};
    text-decoration: none;
`

export const CustomAnchor = styled.a`
    color: ${({color}) => color || '#2A2A2A'};
    font-size: ${({size}) => size || '1rem'};
    font-weight: ${({weight}) => weight || '500'};
    padding: ${({padding}) => padding};
    background: ${({background}) => background};
    text-decoration: none;
`