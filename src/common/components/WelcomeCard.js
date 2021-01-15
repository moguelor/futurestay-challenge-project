import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import Button from "./Button";
import desktopCharacterImage from "../../common/resources/character/desktop-character.png";
import mobileCharacterImage from "../../common/resources/character/mobile-character.png";

const Image = styled.div`
  width: 162px;
  height: 91px;
  right: 0;
  bottom: 0;
  margin-bottom: -38px;
  margin-right: -2px;
  position: absolute;
  background-image: url(${mobileCharacterImage});
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-width: 576px) {
    width: 100%;
    margin-bottom: -23px;
    margin-right: 0px;
    height: 169px;
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

const Wrapper = styled.div`
  padding: 15px 15px 15px 30px;
  margin-top: 30px;
  margin-bottom: 15px;
  background: linear-gradient(
    111.23deg,
    #333377 13.91%,
    #4852aa 68%,
    #3e79d1 118.92%,
    #349dc5 166.65%
  );
  height: 165px;
  border-radius: 20px;

  @media (min-width: 576px) {
    height: 150px;
    margin-bottom: 0px;
  }
`;

const WelcomeCard = ({ title }) => {
  return (
    <Wrapper>
      <Row className="align-items-center" style={{ position: "relative" }}>
        <Col>
          <Title>{title}</Title>
          <Subtitle>
            You've reached your booking goal this <br /> month! Time to
            celebrate!
          </Subtitle>
          <Row>
            <Col xs={9} sm={7} md={5} lg={5}>
              <Button text={"Check business performance"} />
            </Col>
          </Row>
        </Col>
        <Image />
      </Row>
    </Wrapper>
  );
};

export default WelcomeCard;
