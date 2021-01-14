import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  font-size: 12px;
  color: #2a2c37;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  text-overflow: ellipsis;

  svg {
    margin-right: 6px;
  }

  ${({ type }) =>
    type === "default" &&
    `
        background: #EDE294;
        min-height: 24px;
        border-radius: 100px;
        margin-top: 20px; 
        padding: 4px 8px;
        width: auto;
    `}

  ${({ type }) =>
    type === "outline" &&
    `
        background: transparent;
        margin-top: 20px; 
        color: #2A2C37;
        padding: 10px;
        border: 2px solid #2A2C37;
        border-radius: 25px;
        font-weight: 500;
    `}

    ${({ type }) =>
    type === "tiny" &&
    `
        background: transparent;
        color: #2A2C37;
        padding: 0px 5px;
        border: 2px solid #55586F;
        border-radius: 15px;
        font-weight: 500;
        width: auto;
    `}

  ${({ withoutBorder }) => withoutBorder && "border: none;"}

  ${({ center }) => center && "margin: 0 auto;"}
`;

const Button = ({
  type = "default",
  handleClick,
  text,
  icon: Icon,
  withoutBorder,
  className,
  center,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={handleClick}
      withoutBorder={withoutBorder}
      className={className}
      center={center}
    >
      {Icon && <Icon />} {text}
    </StyledButton>
  );
};

export default Button;
