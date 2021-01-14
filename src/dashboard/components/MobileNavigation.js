import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { ReactComponent as LogoFull } from "../../common/resources/logos/logofull.svg";
import { ReactComponent as LeftCircle } from "../../common/resources/icons/left-circle.svg";
import { Row, Col } from "react-bootstrap";
const StyledSection = styled.section`
  transition: transform 0.4s ease-out;
  transform: translate(${({ isOpen }) => (isOpen ? "0px" : "-200px")}, 0);
  top: 0px;
  position: fixed;
  background-color: #fff;
  width: 190px;
  height: 100vh;
  z-index: 2;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.15);
  padding-top: 10px;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 12px;
  font-weight: 600;
  color: #6610f2;
  margin: 10px 15px;
`;

const MobileNavigation = ({ isOpen, handleClickClose }) => {
  return (
    <StyledSection isOpen={isOpen}>
      <Row className="align-items-center">
        <Col xs={{ span: 6, offset: 1 }} className="text-center">
          <LogoFull />
        </Col>
        <Col xs={2} className="text-right">
          <CloseButton onClick={handleClickClose}>
            <LeftCircle />
          </CloseButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <Menu type="mobile" />
        </Col>
      </Row>
    </StyledSection>
  );
};

export default MobileNavigation;
