import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import Button from "./Button";
import mobileCharacterImage from "@assets/character/mobile-character.png";
import desktopCharacterImage from "@assets/character/desktop-character.png";

const StyledDiv = styled.div`
  position: relative;
  padding: 25px 30px;
  margin-bottom: 30px;
  background: linear-gradient(
    111.23deg,
    #333377 13.91%,
    #4852aa 68%,
    #3e79d1 118.92%,
    #349dc5 166.65%
  );
  height: 168px;
  border-radius: 20px;

  @media (min-width: 576px) {
    height: 150px;
    margin-bottom: 0px;
  }
`;

const ImageBackground = styled.span`
  background-image: url(${mobileCharacterImage});
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
  width: 162px;
  height: 91px;
  right: 0;
  bottom: 0;
  position: absolute;

  @media (min-width: 576px) {
    width: 351px;
    height: 171px;
    background-image: url(${desktopCharacterImage});
  }
`;

const Title = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Subtitle = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const WelcomeCard = ({ title }) => {
  return (
    <StyledDiv>
      <Row>
        <Col sm={6}>
          <Title>{title}</Title>
          <Subtitle>
            You've reached your booking goal this <br /> month! Time to
            celebrate!
          </Subtitle>
          <Button text={"Check business performance"} />
        </Col>
      </Row>
      <ImageBackground />
    </StyledDiv>
  );
};

export default WelcomeCard;
