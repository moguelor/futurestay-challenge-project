import styled from "styled-components";

const TransparentButton = styled.button`
    border: none;
    background-color: transparent;
    color: none;
    padding:0px;

    &:focus, &:active{
        outline: 0;
    } 

    svg > path {
        fill: ${({theme}) => theme.colors.text};
    }
`;

export default TransparentButton;