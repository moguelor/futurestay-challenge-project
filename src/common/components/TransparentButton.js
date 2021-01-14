import styled from "styled-components";

const TransparentButton = styled.button`
    border: none;
    background-color: transparent;
    color: none;

    &:focus, &:active{
        outline: 0;
    } 
`;

export default TransparentButton;