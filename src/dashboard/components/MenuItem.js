import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Li = styled.li`
  position: relative;
  display: block;
  padding: 8px 0px;
  margin: 0px;
`;

const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  text-decoration: none !important;
  color: inherit;
  height: 100%;
  padding: 3px 12px;
  line-height: 25px;
  background: inherit;

  &.menu-active {
    background-color: #edeef7;
    border-radius: 18px;

    span {
      color: #4852aa;
    }
  }

  &:hover {
    color: #4852aa;
  }

  span {
    margin-left: 7px;
    color: #55586F;
  }
`;

const MenuItem = ({ icon: Icon, label, path, isActive }) => {
  return (
    <Li isActive={isActive}>
      <CustomLink to={path} className={isActive ? "menu-active" : ""}>
        <Icon />
        <span>{label}</span>
      </CustomLink>
    </Li>
  );
};

export default MenuItem;
