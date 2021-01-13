import React from "react";
import styled from "styled-components";
import ActivityItem from "./ActivityItem";
import Paginator from "./Paginator";
import { Row, Col } from "react-bootstrap";

const StyledDiv = styled.div`
  margin-top: 15px;
  padding: 15px;
  height: 293px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(145, 151, 204, 0.3);
  border-radius: 20px;
`;

const Title = styled.div`
  font-size: 16px;
  color: #2a2c37;
  font-weight: 600;
  margin-bottom: 15px;
`;

const StyledSpan = styled.span`
  color: #26cad3;
`;

const ContainerItems = styled(Row)`
  .target div + .hd-mobile {
    display: none;
  }

  @media (min-width: 576px) {
    overflow-y: scroll;
    height: 224px;
    .target div + .hd-mobile {
      display: flex;
    }
  }
`;

const StyledTransparent = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) -146.09%,
    #ffffff 100%
  );
  border-radius: 0px 0px 20px 20px;
  width: 100%;
  height: 78px;
  position: absolute;
  margin-top: -77px;
  left: 0px;
`;

const Description = () => {
  return (
    <div>
      <StyledSpan>Set a competitive base rate</StyledSpan> that will motivated
      travelers to book your property.
    </div>
  );
};

const Activity = () => {
  const items = [
    {
      type: "booking",
      title: "New Booking",
      company: "The Lincoln",
      code: "RSVP 5028",
      date: "11:32",
    },
    {
      type: "payment",
      title: "Deposit Payment",
      company: "The Lincoln",
      code: "RSVP 5028",
      date: "Jun 26",
      description: Description,
    },
    {
      type: "booking",
      title: "New Booking",
      company: "The Lincoln",
      code: "RSVP 5028",
      date: "11:32",
    },
    {
      type: "payment",
      title: "Deposit Payment",
      company: "The Lincoln",
      code: "RSVP 5028",
      date: "Jun 26",
      description: Description,
    },
    {
      type: "payment",
      title: "Deposit Payment",
      company: "The Lincoln",
      code: "RSVP 5028",
      date: "Jun 26",
      description: Description,
    },
  ];

  return (
    <StyledDiv>
      <Title>Activity</Title>
      <ContainerItems>
        <Col className="target">
          {items.map((item, index) => {
            return (
              <ActivityItem
                key={index}
                {...item}
                className={index > 1 ? "hd-mobile" : ""}
              />
            );
          })}
        </Col>
      </ContainerItems>
      <Row className="d-none d-sm-block">
        <Col>
          <StyledTransparent />
        </Col>
      </Row>
      <Paginator className="d-flex d-sm-none" />
    </StyledDiv>
  );
};

export default Activity;
