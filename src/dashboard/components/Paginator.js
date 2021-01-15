import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { ReactComponent as LeftCircle } from "@assets/icons/left-circle.svg";
import { ReactComponent as RightCircle } from "@assets/icons/right-circle.svg";

const ItemPage = styled.div`
  font-size: 14px;
  color: #9a9ba9;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
    background-color: #B1E9ED;
    border-radius: 80px;
    width: 23px;
    height: 23px;
    text-align: center;
    color: #1FA7AF;
`}
`;

const Paginator = ({ className }) => {
  const itemPages = [
    { active: true, label: "1" },
    { active: false, label: "2" },
    { active: false, label: "3" },
    { active: false, label: "..." },
    { active: false, label: "5" },
  ];

  return (
    <Row className={`${className} justify-content-between align-items-center`}>
      <Col className="d-flex align-items-center">
        <LeftCircle />
      </Col>
      <Col className="no-padding" xs={6}>
        <Row className="justify-content-center">
          {itemPages.map(({ active, label }, index) => (
            <ItemPage key={index} active={active}>
              {label}
            </ItemPage>
          ))}
        </Row>
      </Col>
      <Col className="d-flex align-items-center justify-content-end">
        <RightCircle />
      </Col>
    </Row>
  );
};

export default Paginator;
