import React from "react";
import { NavBar, WelcomeCard } from "./components";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as DoneMarkLogo } from "../common/resources/logos/donemark-logo.svg";

const Layout = styled.div``;

const Title = styled.h3`
  display: flex;
  align-items: center;
  svg {
    width: 18px;
    height: 18px;
  }

  span {
    font-size: 22px;
  }
`;

const ContainerNew = () => {
  return (
    <Layout>
      <NavBar />
      <Container fluid>
        <Row>
          <Col lg="10"> Menu </Col>
          <Col lg="2"> User </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="8">
            Left side
            <Row>Title</Row>
            <Row>
              <WelcomeCard  name="Susan"/>
            </Row>
            <Row>Connect</Row>
            <Row>
              <Col lg="12">
                <Row>Bookings</Row>
                <Row>Net reveneue</Row>
              </Col>
              <Col lg="12"> Activity </Col>
            </Row>
          </Col>
          <Col lg="4">
            Right side
            <Row>
              <Col lg="6">Import a property</Col>
              <Col lg="6">Add reservation</Col>
            </Row>
            <Row>
              <Col lg="12"> Schedule </Col>
              <Col lg="12">Card 1</Col>
              <Col lg="12">Card 2</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ContainerNew;
