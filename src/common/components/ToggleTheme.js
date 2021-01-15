import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: fixed;
  width: 75px;
  height: 75px;
  right: 0;
  bottom: 0;
  border-radius: 100px;
  font-size: 12px;
  margin: 15px;
  border: none;
  box-shadow: 2px 2px 3px #999;
  border-radius: 75px;
  color: #fff;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.backgroundToggle};
`;

const ToggleTheme = ({ handleToggleTheme }) => {
  return (
    <StyledButton onClick={handleToggleTheme}> Toggle Theme </StyledButton>
  );
};

export default ToggleTheme;
