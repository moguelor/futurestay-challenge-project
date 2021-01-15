import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLI = styled.li`
  cursor: pointer;
  height: 100%;
  color: ${({ theme }) => theme.colors.textMenu};
  font-size: 12px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: inherit;
  padding: 4px 10px;
  border-radius: 18px;
  text-decoration: none !important;

  ${({ isActive, theme }) =>
    isActive &&
    `
      color: ${theme.colors.textMenuActive};
      background-color: ${theme.colors.backgroundMenuActive};
      font-weight: 500;
    `}

  &:hover {
    color: ${({ theme }) => theme.colors.textMenuActive};
  }

  & > svg > path {
    fill: ${({ theme }) => theme.colors.textMenu}
  }
`;

const Label = styled.span`
  margin-left: 7px;
`;

const MenuItem = ({ icon: Icon, text, path, isActive }) => {
  return (
    <StyledLI>
      <StyledLink to={path} $isActive={isActive}>
        <Icon /> <Label>{text}</Label>
      </StyledLink>
    </StyledLI>
  );
};

export default MenuItem;
