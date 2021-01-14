import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 22px;
    color: #2A2C37;
    margin: 0px;
    margin-top: 15px;

    svg { 
        width: 18px;
        height: 18px;
        margin-right: 9px;
    }

`;



const Title = ({ icon: Icon, label}) => {
    return (
        <StyledH1>
            <Icon />
            {label}
        </StyledH1>
    );
}

export default Title;