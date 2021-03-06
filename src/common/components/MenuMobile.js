import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { TransparentButton, Menu } from "@components";

import { ReactComponent as LogoFull } from "@assets/logos/logofull.svg";
import { ReactComponent as LeftCircle } from "@assets/icons/left-circle.svg";

const StyledSection = styled.section`
  transition: transform 0.4s ease-out;
  transform: translate(${({ isOpen }) => (isOpen ? "0px" : "-250px")}, 0);
  top: 0px;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.surface};
  width: 250px;
  height: 100%;
  z-index: 3;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.15);
  padding: 10px 0px;
`;

const Overlay = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  backdrop-filter: blur(3px);
  transition: backdrop-filter 0.5s;

  ${({ isOpen }) =>
    isOpen || "backdrop-filter: blur(3px) opacity(0); display: none;"}
`;

const Button = styled.button`
  background: transparent;
  border: 0px;
  color: ${({ theme }) => theme.colors.text};
`;

const MenuMobile = ({ isOpen, handleClickClose }) => {

  return (
    <div>
      <StyledSection isOpen={isOpen}>
        <Container>
          <Row>
            <Col>
              <LogoFull />
            </Col>
            <Col className="text-right">
              <Button onClick={handleClickClose}>
                <LeftCircle />
              </Button>
            </Col>
          </Row>
          <Row>
              <Menu variant="mobile" />
          </Row>
        </Container>
      </StyledSection>
      <Overlay isOpen={isOpen} onClick={handleClickClose} />
    </div>
  );
};

export default MenuMobile;
