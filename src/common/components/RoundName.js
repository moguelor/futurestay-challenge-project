import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 22px;
    height: 22px;
    background-color: ${({color}) => color};
    font-size: 10px;
    font-weight: 400;
    color: #FFF;
    text-align: center;
    padding-top:4px;
    border-radius: 22px;
`;

const Label = styled.label`
    
`;

const RoundName = ({prefix, color}) => {
    return (
        <StyledDiv color={color}>
            {prefix}
        </StyledDiv>
    );
}

export default RoundName;