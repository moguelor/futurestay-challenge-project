import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Button from "./Button";
import { ReactComponent as UpGreenIcon } from "@assets/icons/up-green.svg";
const StyledDiv = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  min-height: 58px;
  border-radius: 20px;
  padding: 5px 15px;

  .average-wrapper {
    text-align: right;
    margin-top: -5px;
    padding: 0px 15px;
  }

  .info-wrapper {
    line-height: 16px;
  }

  @media (min-width: 576px) {
    min-height: 139px;
    margin-top: 15px;

    .info-wrapper {
      line-height: 46px;
      align-items: center;
    }

    .average-wrapper {
      margin-top: 10px;
      padding: 0px 15px;
    }
  }
`;

const Title = styled.div`
  font-size: 12px;
  color: #2a2c37;
  font-weight: 600;

  @media (min-width: 576px) {
    font-size: 16px;
  }
`;

const Amount = styled.div`
  font-size: 18px;
  color: #2a2c37;
  font-weight: 600;

  span {
    font-size: 16px;
    font-weight: 400;
    margin-top: -6px;
  }

  @media (min-width: 576px) {
    font-size: 36px;
    display: flex;
    margin-top: 10px;
    font-weight: 500;
  }
`;

const Currency = styled(Title)`
  font-weight: 400;
  @media (min-width: 576px) {
    font-size: 16px;
  }
`;

const Average = styled(Title)`
  font-size: 10px;
  font-style: Italic;
  color: #79798c;
  font-weight: 300;
  line-height: 9px;
`;

const InfoCard = ({
  text,
  amount,
  bgColor,
  average,
  currency,
  textButton,
  handleClick,
}) => {
  return (
    <StyledDiv bgColor={bgColor}>
      <Row>
        <Col className="info-wrapper" xs="8">
          <Title>{text}</Title>
          <Amount>
            {amount} <span className="d-none d-sm-block">{currency}</span>
          </Amount>
          <Currency className="d-block d-sm-none">{currency}</Currency>
        </Col>
        <Col className="average-wrapper" xs="4">
          <UpGreenIcon />
          <Average>
            <span className={"d-none d-sm-inline"}>Up</span> {average}
          </Average>
        </Col>
        <Col sm={{ span: 12 }} className="d-none d-sm-flex justify-content-end">
          <Button type="tiny" text={textButton} handleClick={handleClick} />
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default InfoCard;
