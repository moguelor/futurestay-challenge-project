import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import coffeeImage from "@assets/character/coffee.png";

const StyledDiv = styled.div`
  padding: 25px;
  font-size: 15px;
  font-weight: 400;
  font-style: italic;
  border-radius: 20px;
  color: ${({theme}) => theme.colors.text};

  img {
    width: 250px;
    margin-bottom: 15px;
  }
`;

const CommingSoonPage = () => {
  return (
    <Row className="justify-content-center align-items-center">
      <Col xs={12}>
        <StyledDiv>
          <Row className="justify-content-center align-items-center h-100">
            <Col xs={12} className="text-center" ><img src={coffeeImage}/></Col>
            <Col xs={12} className="text-center">Take a break! This page is in construction...</Col>
          </Row>
        </StyledDiv>
      </Col>
    </Row>
  );
};

export default CommingSoonPage;
