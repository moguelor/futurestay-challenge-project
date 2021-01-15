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
  box-shadow: 0px 0px 10px rgba(145, 151, 204, 0.3);
  border-radius: 75px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundToggle};
`;

const ToggleTheme = ({ handleToggleTheme }) => {
  return (
    <StyledButton onClick={handleToggleTheme}> Toogle theme </StyledButton>
  );
};

export default ToggleTheme;
