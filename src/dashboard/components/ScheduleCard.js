import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import ScheduleRow from "./ScheduleRow";

const StyledDiv = styled.div`
  background-color: ${({theme}) => theme.colors.card};
  width: 100%;
  box-shadow: 0px 0px 10px rgba(145, 151, 204, 0.3);
  border-radius: 20px;
  padding: 15px;
  margin: 7px 0px;

  border-radius: 20px;

  ${({ withoutBorderColor }) =>
    withoutBorderColor || "border-top: 5px solid #4852AA;"}
`;

const Stadistics = styled.div`
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  color:  ${({theme}) => theme.colors.textMenu };
`;

const Tag = styled.div`
  font-size: 10px;
  background-color: #4852aa;
  color:  #fff;
  border-radius: 13px;
  text-align: center;
  padding: 5px;
  margin-top: -5px;
`;

const Month = styled.span`
  color: ${({theme}) => theme.colors.textMenu };
  font-size: 14px;
  font-weight: 400;
`;

const Day = styled.span`
  color: ${({theme}) => theme.colors.text };
  font-weight: 600;
  font-size: 14px;
`;

const ContainerDate = styled.div`
  line-height: 18px;
  margin: 7px 0px 0px 7px;
`;

const ScheduleCard = ({ hideStadistics, withoutBorderColor, data }) => {
  return (
    <StyledDiv withoutBorderColor={withoutBorderColor}>
      {hideStadistics || (
        <Row className="justify-content-between">
          <Col xs="7">
            <Stadistics>
              1 check-in, 3 check-outs, 1 start-block, 1 end-block
            </Stadistics>{" "}
          </Col>
          <Col xs="3">
            <Tag> TODAY </Tag>
          </Col>
        </Row>
      )}

      <Row>
        <Col>
          <ContainerDate>
            <Month>Sep</Month> <br />
            <Day>Tue 4</Day>
          </ContainerDate>
        </Col>
      </Row>
      <Row>
        <Col>
          {
              data.map((item, index) => {
                return <ScheduleRow key={index} {...item} />
              })
          }
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default ScheduleCard;
