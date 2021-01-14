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
list-style: none;
padding: 0px;
height: 100%;


${({type}) => type === 'desktop' && `
  flex-direction: row;
  align-items: center;
  margin-top: -5px;
`}

${({type}) => type === 'mobile' && `
  flex-direction: column;
  margin: 15px;
  
  & > li {
    width: 100%;
  }

  & > li > a {
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    text-align: center;

    svg {
      width: 20px;
      height: 20px;
    }
  } 
`}


`;

const Menu = ({ location, type="desktop" }) => {

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
    <StyledUL type={type}>
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
