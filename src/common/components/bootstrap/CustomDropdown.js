import React from "react";
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

const StyledDropdown = styled(Dropdown)`
  button {
    background: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
    font-weight: 600;
    border: none;
    outline: none;

    &:hover,
    &:active,
    &:focus {
      background-color: none;
      color: ${({ theme }) => theme.colors.text};
    }

  }

  .dropdown-item {
    font-size: 12px;
    text-align: left;
  }
`;

const CustomDropdown = ({ text, variant = "default", items }) => {
  return (
    <div>
      <StyledDropdown>
        <Dropdown.Toggle variant={variant} id="dropdown-basic">
          {text}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {items.map(({ type, path, text }, index) => {
            switch (type) {
              case "item":
                return <Dropdown.Item key={index} href={path}>{text}</Dropdown.Item>;
              default:
                return <Dropdown.Divider key={index}/>;
            }
          })}
        </Dropdown.Menu>
      </StyledDropdown>
    </div>
  );
};

export default CustomDropdown;
