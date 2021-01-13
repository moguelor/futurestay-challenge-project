import React from "react";
import MenuItem from "./MenuItem";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import { ReactComponent as HomeIcon } from "../../common/resources/menuIcons/home.svg";
import { ReactComponent as PropertiesIcon } from "../../common/resources/menuIcons/properties.svg";
import { ReactComponent as RateboardIcon } from "../../common/resources/menuIcons/rateboard.svg";
import { ReactComponent as ConnectionsIcon } from "../../common/resources/menuIcons/connections.svg";
import { ReactComponent as ReservationsIcon } from "../../common/resources/menuIcons/reservations.svg";
import { ReactComponent as AnalythicsIcon } from "../../common/resources/menuIcons/analythics.svg";
import { ReactComponent as FinancialsIcon } from "../../common/resources/menuIcons/financials.svg";
import { ReactComponent as WebsiteIcon } from "../../common/resources/menuIcons/website.svg";

const StyledUL = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0px;
  margin: 0px;
  height: 100%;
  align-items: center;
`;

const Menu = ({ location }) => {

    const menuItems = [
    {
      icon: HomeIcon,
      label: "Home",
      path: "/dashboard",
    },
    {
      icon: PropertiesIcon,
      label: "Properties",
      path: "/properties",
    },
    {
      icon: RateboardIcon,
      label: "Rateboard",
      path: "/rateboard",
    },
    {
      icon: ConnectionsIcon,
      label: "Connections",
      path: "/connections",
    },
    {
      icon: ReservationsIcon,
      label: "Reservations",
      path: "/reservations",
    },
    {
      icon: AnalythicsIcon,
      label: "Analythics",
      path: "/analythics",
    },
    {
      icon: FinancialsIcon,
      label: "Financials",
      path: "/financials",
    },
    {
      icon: WebsiteIcon,
      label: "Website",
      path: "/website",
    },
  ];

  return (
    <StyledUL>
      {menuItems.map(({ icon, label, path }, index) => (
        <MenuItem
          key={index}
          icon={icon}
          label={label}
          path={path}
          isActive={location.pathname === path}
        />
      ))}
    </StyledUL>
  );
};

export default withRouter(Menu);
