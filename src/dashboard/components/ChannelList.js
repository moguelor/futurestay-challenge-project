import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import Button from "./Button";
import { TransparentButton } from "@components";
import { ReactComponent as BookingLogo } from "@assets/channelLogos/bookingcom.svg";
import { ReactComponent as AirbnbLogo } from "@assets/channelLogos/airbnb.svg";
import { ReactComponent as GoogleLogo } from "@assets/channelLogos/google.svg";
import { ReactComponent as VrboLogo } from "@assets/channelLogos/vrbo.svg";
import { ReactComponent as WebsiteLogo } from "@assets/channelLogos/website.svg";
import { ReactComponent as CheckmarkIcon } from "@assets/icons/checkmark.svg";
import { ReactComponent as PlusCircleIcon } from "@assets/icons/plus-circle.svg";

const Wrapper = styled.div`
  margin: 30px 0px 15px 0px;
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: 0px 0px 10px rgba(145, 151, 204, 0.3);
  border-radius: 20px;
  padding: 15px;
  border-top: 5px solid #c8cbe6;

  .icon-check,
  .icon-plus {
    width: 16px;
    height: 16px;
  }
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const ContainerLogo = styled.div`
  text-align: left;

  ${({ checked }) => !checked && "opacity: .3; font-weight: 500;"}

  @media (min-width: 992px) {
    text-align: center;
    margin-bottom: 15px;
  }
`;

const ChannelList = () => {
  const channels = [
    {
      logo: BookingLogo,
      name: "Booking.com",
      checked: true,
    },
    {
      logo: AirbnbLogo,
      name: "Airbnb",
      checked: true,
    },
    {
      logo: VrboLogo,
      name: "Vrbo",
      checked: true,
    },
    {
      logo: WebsiteLogo,
      name: "Website",
      checked: true,
    },
    {
      logo: GoogleLogo,
      name: "Google VR",
      checked: false,
    },
  ];

  return (
    <Wrapper>
      <Row>
        {channels.map(({ logo: Logo, name, checked }, index) => (
          <Col key={index} xs={6} lg>
            <Row className="justify-content-center">
              <Col xs={9} lg={12}>
                <ContainerLogo checked={checked}>
                  <Logo /> <Label>{name}</Label>
                </ContainerLogo>
              </Col>
              <Col xs={3} lg={checked ? 3 : 12}>
                {checked ? (
                  <CheckmarkIcon className="icon-check" />
                ) : (
                  [
                    <TransparentButton
                      key={Math.random()}
                      className="icon-plus d-lg-none"
                    >
                      <PlusCircleIcon />
                    </TransparentButton>,
                    <Button
                      key={Math.random()}
                      className="d-none d-lg-flex"
                      type="tiny"
                      text="Connect"
                      center
                    />,
                  ]
                )}
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};

export default ChannelList;
