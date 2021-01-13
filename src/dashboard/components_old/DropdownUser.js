import React from "react";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

const CustomDropdown = styled(Dropdown)`
    button {

        background-color: transparent;
        border: none;
        color: #2A2C37;
        font-weight: 600;
        font-size: 12px;

        &:hover, &:active, &:focus {
            background-color: transparent;
            color: #2A2C37;
        }

    }

    dropdown-men


`;

const DropdownUser = ({name}) => {
  return (
    <CustomDropdown>
      <Dropdown.Toggle>
        Hi, {name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </CustomDropdown>
  );
};

export default DropdownUser;
