import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import ScheduleCard from "./ScheduleCard";
import { ReactComponent as ChevDown } from "../../common/resources/icons/chev-down.svg";

const StyledRow = styled(Row)`
  background-color: #edeef7;
  margin-top: 15px;
  padding: 30px 0px;

  @media (min-width: 576px) {
    border-radius: 20px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 11px;
`;

const Drowdown = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

const Schedule = () => {
  return (
    <StyledRow>
      <Col>
        <Row>
          <Col>
            <Title>Schedule</Title>
          </Col>
          <Col className="text-right">
            <Drowdown>
              Only busy days <ChevDown />
            </Drowdown>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <ScheduleCard
              data={[
                {
                  type: "checkin",
                  client: "The Jefferson",
                  company: "Booking.com",
                  user: "Amelia Asimov",
                  channel: "booking",
                },
              ]}
            />
          </Col>
          <Col lg="12">
            <ScheduleCard
              hideStadistics
              withoutBorderColor
              data={[
                {
                  type: "endblock",
                  client: "The Jefferson",
                },
                {
                  type: "startblock",
                  client: "Yellow Villa No. 623",
                },
                {
                  type: "checkout",
                  client: "Tropical Villas",
                  company: "Booking.com",
                  user: "Peter Parker",
                  channel: "booking",
                },
                {
                  type: "checkin",
                  client: "The Jefferson",
                  company: "Vrbo",
                  user: "Paolo Roberts",
                  channel: "vrbo",
                },
                {
                  type: "checkout",
                  client: "Cozy Stone Bedroom",
                  company: "Booking.com",
                  user: "Craig Peterson",
                  channel: "booking",
                },
                {
                  type: "checkin",
                  client: "The Washington 153",
                  company: "Vrbo",
                  user: "Bruce Wayne",
                  channel: "vrbo",
                },
                {
                  type: "checkin",
                  client: "The Humminbgird",
                  company: "Vrbo",
                  user: "Edward Nygma",
                  channel: "vrbo",
                },
                {
                  type: "checkin",
                  client: "Cabin in the woods",
                  company: "Vrbo",
                  user: "Bruce Wayne",
                  channel: "vrbo",
                },
                {
                  type: "checkin",
                  client: "Lakeshore Retreat",
                  company: "Vrbo",
                  user: "Edward Nyma",
                  channel: "vrbo",
                },
              ]}
            />
          </Col>
          <Col lg="12">
            <ScheduleCard
              hideStadistics
              withoutBorderColor
              data={[
                {
                  type: "startblock",
                  client: "The Jefferson",
                },
              ]}
            />
          </Col>
          <Col lg="12">
            <ScheduleCard
              hideStadistics
              withoutBorderColor
              data={[
                {
                  type: "checkout",
                  client: "Tropical Villas",
                  company: "Booking.com",
                  user: "Peter Parker",
                  channel: "booking",
                },
                {
                  type: "checkin",
                  client: "The Jefferson",
                  company: "Vrbo",
                  user: "Paolo Roberts",
                  channel: "vrbo",
                },
              ]}
            />
          </Col>
        </Row>
      </Col>
    </StyledRow>
  );
};

export default Schedule;
