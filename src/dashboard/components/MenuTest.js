import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { ReactComponent as BurgerIcon } from "../../common/resources/menuIcons/burger.svg";
import { ReactComponent as DoneMarkLogo } from "../../common/resources/logos/donemark-logo.svg";
import Menu from "./Menu";
import { ReactComponent as MenuHeaderLogo } from "../../common/resources/logos/menu-header-logo.svg";
import { ReactComponent as NotificationIcon } from "../../common/resources/icons/notification.svg";
import { ReactComponent as ChevDown } from "../../common/resources/icons/chev-down.svg";

const StyledNav = styled.nav`
  background-color: rgb(255, 255, 255, 0.9);
  height: 50px;
  box-shadow: 0px 4px 4px rgba(42, 44, 55, 0.06);
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const Round = styled.div`
  width: 22px;
  height: 22px;
  font-size: 12px;
  background-color: #4852aa;
  color: #fff;
  text-align: center;
  border-radius: 22px;
  padding-top: 2px;
`;

const Label = styled.div`
  font-size: 12px;
`;

const StyledRow = styled(Row)`
.name-user{
    display: block;
}

@media (max-width: 1213px) { 

  .name-user{
      display: none;
      float: left;
  }
}

`;

const MenuTest = ({handleClickOpenMenu}) => {
  return (
    <StyledNav>
        <Container fluid className="h-100">
      <Row className="align-items-center h-100">
        <Col className="d-flex d-xl-none">
          <BurgerIcon onClick={handleClickOpenMenu} />
        </Col>
        <MenuHeaderLogo  className="d-none d-xl-flex"/>
        <Col className="d-none d-xl-flex">
          <Menu />
        </Col>
        <Col lg={2} className="d-none d-xl-flex" style={{marginTop: "-5px"}}>
          <Row>
            <Col lg={2}>
              <NotificationIcon />
            </Col>
            <Col>
              <StyledRow className="align-items-center">
                <Col lg={1}>
                  <Round>SA</Round>
                </Col>
                <Col className="name-user" lg={6}>
                  <Label>Hi, Santiago!</Label>
                </Col>
                <Col lg={1}>
                  <ChevDown />
                </Col>
              </StyledRow>
            </Col>
          
          </Row>
        </Col>
        <Col className="text-right d-block d-xl-none text-align-right" >
              <DoneMarkLogo />
        </Col>
      </Row>
      </Container>
    </StyledNav>

    // <StyledContainer fluid>
    //   <Row className="align-items-center h-100">
    //     <Col className="d-flex d-lg-none">
    //       <BurgerIcon />
    //     </Col>
    //     <StyledMenuHeaderLogo className="d-none d-lg-flex" />
    //     <Col lg={{ span: 8, offset: 1 }} className="d-none d-lg-flex">
    //       <Menu />
    //     </Col>
    //     <Col className="text-right d-block d-lg-none text-align-right">
    //       <DoneMarkLogo />
    //     </Col>
    //     <Col lg={3} className="d-none d-lg-flex">
    //       <Row  className="align-items-center">
    //         <Col className="text-right">
    //           <NotificationIcon />
    //         </Col>
    //         <Col>
    //             <Round> SJ </Round>
    //         </Col>
    //         <Col>
    //             <Label>Hi, [User Name]!</Label>
    //         </Col>
    //       </Row>
    //     </Col>
    //   </Row>
    // </StyledContainer>
  );
};

export default MenuTest;
