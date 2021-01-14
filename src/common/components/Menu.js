import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { withRouter } from 'react-router-dom';

import { ReactComponent as HomeIcon } from "@assets/menuIcons/home.svg";
import { ReactComponent as PropertiesIcon } from "@assets/menuIcons/properties.svg";
import { ReactComponent as RateboardIcon } from "@assets/menuIcons/rateboard.svg";
import { ReactComponent as ConnectionsIcon } from "@assets/menuIcons/connections.svg";
import { ReactComponent as ReservationsIcon } from "@assets/menuIcons/reservations.svg";
import { ReactComponent as AnalythicsIcon } from "@assets/menuIcons/analythics.svg";
import { ReactComponent as FinancialsIcon } from "@assets/menuIcons/financials.svg";
import { ReactComponent as WebsiteIcon } from "@assets/menuIcons/website.svg";

const StyledUL = styled.ul`
  display: flex;
  list-style: none;
  margin: 0px;

  ${({variant}) => variant === 'mobile' && `
    flex-direction: column;
    padding-left: 10px;
    margin-top: 15px;
    & > li {
      font-size: 15px;
      margin: 5px 0px;
    }
  `}

`;

const Menu = ({ location, variant }) => {
  const items = [
    {
      icon: HomeIcon,
      text: "Home",
      path: "/dashboard",
    },
    {
      icon: PropertiesIcon,
      text: "Properties",
      path: "/properties",
    },
    {
      icon: RateboardIcon,
      text: "Rateboard",
      path: "/rateboard",
    },
    {
      icon: ConnectionsIcon,
      text: "Connections",
      path: "/connections",
    },
    {
      icon: ReservationsIcon,
      text: "Reservations",
      path: "/reservations",
    },
    {
      icon: AnalythicsIcon,
      text: "Analythics",
      path: "/analythics",
    },
    {
      icon: FinancialsIcon,
      text: "Financials",
      path: "/financials",
    },
    {
      icon: WebsiteIcon,
      text: "Website",
      path: "/website",
    },
  ];

  return (
    <StyledUL variant={variant}>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} isActive={location.pathname === item.path} />
      ))}
    </StyledUL>
  );
};

export default withRouter(Menu);
