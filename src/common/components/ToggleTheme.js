import React from "react";
import styled from "styled-components";
import { ReactComponent as ThemeLightDark } from "@assets/icons/theme-light-dark.svg";

const StyledButton = styled.button`
  position: fixed;
  width: 50px;
  height: 50px;
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

  svg > path {
    fill: #34ABC5;
  }
`;

const ToggleTheme = ({ handleToggleTheme }) => {
  return (
    <StyledButton onClick={handleToggleTheme}>
      <ThemeLightDark />{" "}
    </StyledButton>
  );
};

export default ToggleTheme;
