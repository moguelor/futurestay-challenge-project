import React from "react";
import styled from "styled-components";
import RoundName from "./RoundName";
import { CustomDropdown } from "@components/bootstrap";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownUser = () => {
  const dropDownItems = [
    {
      type: "item",
      path: "/dashboard",
      text: "Account",
    },
    {
      type: "item",
      path: "/dashboard",
      text: "Currency and Language",
    },
    {
      type: "item",
      path: "/dashboard",
      text: "Bank and payments",
    },
    {
      type: "separator",
    },
    {
      type: "item",
      path: "/dashboard",
      text: "Schedule a meeting ",
    },
    {
      type: "item",
      path: "/dashboard",
      text: "Getting started guide",
    },
    {
      type: "item",
      path: "/dashboard",
      text: "Help center",
    },
  ];

  return (
    <StyledDiv>
      <RoundName prefix="MD" color={"#4852AA"} />
      <CustomDropdown text="Hi, Jose!" items={dropDownItems} />
    </StyledDiv>
  );
};

export default DropdownUser;
