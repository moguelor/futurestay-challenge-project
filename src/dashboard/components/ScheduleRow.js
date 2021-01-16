import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as PadLockOpen } from "@assets/icons/padlock-open.svg";
import { ReactComponent as PadLockClose } from "@assets/icons/padlock-close.svg";
import { ReactComponent as BookingLogo } from "@assets/channelLogos/bookingcom.svg";
import { ReactComponent as Vrbo } from "@assets/channelLogos/vrbo.svg";

const BarColor = styled.div`
  border-radius: 10px;
  width: 4px;
  background-color: ${({ color }) => color};
  height: 100%;
`;

const StyledDiv = styled.div`
  margin: 17px 0px 0px 7px;
`;

const Label = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  svg > path {
    fill: ${({ theme }) => theme.colors.text};
  }

  @media (min-width: 576px) {
    white-space: initial;
    text-overflow: auto;
    overflow: auto;
  }
`;

const LabelGrey = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.colorTextCompany};
  font-weight: 400;
  white-space: nowrap;
`;

const TestBar = styled.div`
  width: 5px;
  height: 100%;
  background-color: red;
`;

const getIconByType = (type) => {
  const iconsByType = {
    checking: null,
    startblock: PadLockOpen,
    endblock: PadLockClose,
    checkout: null,
  };

  return iconsByType[type];
};

const getColorByType = (type) => {
  const colorsByType = {
    checkin: "#8EDEE5",
    checkout: "#EDE294",
    startblock: "#9A9BA9",
    endblock: "#9A9BA9",
  };

  return colorsByType[type];
};

const getLabelByType = (type) => {
  const labelsByType = {
    checkin: "Check-in",
    startblock: "Start block",
    endblock: "End block",
    checkout: "Check-out",
  };

  return labelsByType[type];
};

const getIconByChannel = (type) => {
  const iconsByChannel = {
    booking: BookingLogo,
    vrbo: Vrbo,
  };

  return iconsByChannel[type];
};

const ScheduleRow = ({ company, user, type, client, channel }) => {
  const Icon = getIconByType(type);
  const color = getColorByType(type);
  const label = getLabelByType(type);
  const ChannelLogo = getIconByChannel(channel);

  return (
    <StyledDiv>
      <Row>
        <Col xs="1">
          <BarColor color={color} />
        </Col>
        <Col className="align-self-center" xs="5">
          <Label>
            {Icon && <Icon />} {label}{" "}
          </Label>
          {company && (
            <LabelGrey>
              {" "}
              {ChannelLogo && <ChannelLogo />} {company}
            </LabelGrey>
          )}
        </Col>
        <Col className="align-self-center" xs="5">
          <Label> {client} </Label>
          {user && <LabelGrey>{user}</LabelGrey>}
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default ScheduleRow;
