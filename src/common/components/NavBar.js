import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu";
import DropdownUser from "./DropdownUser";

import { ReactComponent as BurgerIcon } from "@assets/menuIcons/burger.svg";
import { ReactComponent as DoneMarkLogo } from "@assets/logos/donemark-logo.svg";
import { ReactComponent as MenuHeaderLogo } from "@assets/logos/menu-header-logo.svg";
import { ReactComponent as NotificationIcon } from "@assets/icons/notification.svg";

const StyledContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  height: 50px;
  box-shadow: 0px 4px 4px rgba(42, 44, 55, 0.06);
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const StyledMenuHeaderLogo = styled(MenuHeaderLogo)`
  top: -25px;
  position: absolute;
`;

const NavBar = () => {
  return (
    <StyledContainer fluid>
      <Row className="align-items-center justify-content-between h-100">
        <Col xs={6} className="d-block d-xl-none">
          <BurgerIcon />
        </Col>
        <Col xs={1} className="d-none d-xl-flex no-padding-left">
          <StyledMenuHeaderLogo />
        </Col>
        <Col className="d-none d-xl-flex">
          <Menu />
        </Col>
        <Col className="d-none d-xl-flex align-items-center justify-content-end">
          <NotificationIcon />
        </Col>
        <Col xs={6} lg className="d-block d-xl-none text-right">
          <DoneMarkLogo />
        </Col>
        <Col xs={1}  className="d-none d-xl-flex align-items-center justify-content-end">
          <DropdownUser />
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default NavBar;
