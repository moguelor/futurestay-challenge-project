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
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  text-overflow: ellipsis;

  svg {
    margin-right: 6px;

    & > path {

    }

  }

  ${({ type }) =>
    type === "default" &&
    `
        background: #EDE294;
        min-height: 24px;
        border-radius: 100px;
        margin-top: 16px; 
        padding: 4px 8px;
        width: auto;
    `}

  ${({ type, theme }) =>
    type === "outline" &&
    `
        background: transparent;
        color: ${theme.colors.text};
        padding: 10px;
        border: 2px solid ${theme.colors.text};
        border-radius: 25px;
        font-weight: 500;
        svg {
          margin-right: 6px;
      
          & > path {
            fill: ${theme.colors.text};
          }
      
        }
    `}

    ${({ type, theme }) =>
    type === "tiny" &&
    `
        background: transparent;
        color: ${theme.colors.text};
        padding: 0px 5px;
        border: 2px solid ${theme.colors.text};
        border-radius: 15px;
        font-weight: 500;
        width: auto;
    `}

  ${({ withoutBorder }) => withoutBorder && "border: none;"}

  ${({ center }) => center && "margin: 0 auto;"}

  @media(min-width: 576px){
    overflow: auto;
    white-space: wrap;
    text-overflow: auto;
  }

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
      {Icon && <Icon color={"red"} fill={"red"} /> }{text}
    </StyledButton>
  );
};

export default Button;
