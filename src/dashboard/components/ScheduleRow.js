import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as PadLockOpen } from "../../common/resources/icons/padlock-open.svg";
import { ReactComponent as PadLockClose } from "../../common/resources/icons/padlock-close.svg";
import { ReactComponent as BookingLogo } from "../../common/resources/channelLogos/bookingcom.svg";
import { ReactComponent as Vrbo } from "../../common/resources/channelLogos/vrbo.svg";

const BarColor = styled.div`
  border-radius: 10px;
  width: 4px;
  height: 35px;
  background-color: ${({ color }) => color};
`;

const StyledDiv = styled.div`
  margin: 17px 0px 0px 7px;
`;

const Label = styled.div`
  font-size: 12px;
  color: 2a2c37;
  font-weight: 600;
`;

const LabelGrey = styled.div`
  font-size: 12px;
  color: #79798c;
  font-weight: 400;
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
      <Row className="align-items-center">
        <Col xs="1">
          <BarColor color={color} />
        </Col>
        <Col xs="5">
          <Label>
            {Icon && <Icon />} {label}{" "}
          </Label>
          {company && <LabelGrey> {ChannelLogo && <ChannelLogo />} {company}</LabelGrey>}
        </Col>
        <Col xs="5">
          <Label> {client} </Label>
          {user && (
            <LabelGrey>
              {" "}
               {user}
            </LabelGrey>
          )}
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default ScheduleRow;
