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
  color: ${({theme}) => theme.colors.text };
`;

const InfoCompany = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  margin-bottom: 8px;
  ${({ type, theme }) =>
    type === "payment" &&
    `
      color: ${ theme.colors.textMark };
`}
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: ${({theme}) => theme.colors.text };

  ${({ type, theme }) =>
    type === "payment" &&
    `
    color: ${theme.colors.textMark} ;
  `}

   @min(width: 573px){
    overflow: auto;
   }
`;

const Date = styled.div`
  font-size: 12px;
  color: ${({theme}) => theme.colors.textMark };
  text-align: right;
`;

const ActivityItem = ({
  title,
  company,
  code,
  date,
  description: DescriptionComponent,
  type,
  className,
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
