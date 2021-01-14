import React from "react";
import styled from "styled-components";
import { ReactComponent as MenuHeaderLogo } from "../../common/resources/logos/menu-header-logo.svg";
import Menu from "./Menu";
import UserInfo from "./UserInfo";

const StyledNavBar = styled.nav`
  top: 0px;
  position: fixed;
  width: 100%;
  z-index: 1;
  height: 50px;
  background-color: rgb(255, 255, 255, .9);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CustomMenuHeaderLogo = styled(MenuHeaderLogo)`
  margin-top: 9px;
`;

const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <ContainerMenu>
        <CustomMenuHeaderLogo />
        <Menu />
      </ContainerMenu>
      <UserInfo />
    </StyledNavBar>
  );
};

export default NavBar;
