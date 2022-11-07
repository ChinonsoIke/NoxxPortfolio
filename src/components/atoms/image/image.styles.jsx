import styled from "styled-components";

export const CustomImage = styled.img`
    height: ${({height}) => height || '300px'};
    width: ${({width}) => width || '300px'};
    border-radius: ${({borderRadius}) => borderRadius || '0px'};
    object-fit: ${({fit}) => fit || 'cover'};
    object-position: center;
`