import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const StyledDiv = styled.div`
  margin: 15px 0px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 8px;
`;

const InfoCompany = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  margin-bottom: 8px;
  ${({ type }) =>
    type === "payment" &&
    `
color: #9A9BA9;
`}
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  ${({ type }) =>
    type === "payment" &&
    `
    color: #9A9BA9;
  `}
`;

const Date = styled.div`
  font-size: 12px;
  color: #9a9ba9;
  text-align: right;
`;

const ActivityItem = ({
  title,
  company,
  code,
  date,
  description: DescriptionComponent,
  type,
  className
}) => {
  return (
    <StyledDiv className={className}>
      <Row>
        <Col xs="9">
          <Row>
            <Col sm="12">
              <Title>{title}</Title>
            </Col>
            <Col sm="12">
              <InfoCompany type={type}>
                {code} | {company}
              </InfoCompany>
            </Col>
            <Col sm="12">
              <Description type={type}>
                {DescriptionComponent && <DescriptionComponent />}
              </Description>
            </Col>
          </Row>
        </Col>
        <Col xs="3">
          <Date>{date}</Date>
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default ActivityItem;
