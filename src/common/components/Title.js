import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 22px;
  color: ${({theme}) => theme.colors.text};
  margin: 15px 0px;

  svg {
    width: 18px;
    height: 18px;
    margin-right: 9px;
  }
  
`;

const Title = ({ icon: Icon, text }) => {
  return (
    <StyledH1>
      <Icon />
      {text}
    </StyledH1>
  );
};

export default Title;
