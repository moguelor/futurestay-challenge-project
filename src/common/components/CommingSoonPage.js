import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import coffeeImage from "@assets/character/coffee.png";

const StyledRow = styled(Row)`
  font-size: 15px;
  font-weight: 600;
  font-style: italic;
  border-radius: 20px;
  color: ${({theme}) => theme.colors.text};

  img {
    width: 250px;
    margin-bottom: 15px;
  }

  @media (min-width: 576px){
    img {
      width: 300px;
      margin-bottom: 15px;
    }
    font-size: 25px;
  }
`;

const CommingSoonPage = () => {
  return (
    <Container className="justify-content-center align-items-center">
      <Col xs={12}>
          <StyledRow className="justify-content-center align-items-center h-100">
            <Col xs={12} className="text-center" ><img src={coffeeImage}/></Col>
            <Col xs={12} className="text-center">Take a break!<br /> This page is in construction...</Col>
          </StyledRow>
      </Col>
    </Container>
  );
};

export default CommingSoonPage;
