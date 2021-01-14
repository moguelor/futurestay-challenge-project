import React from "react";
import styled from "styled-components";
import DropdownUser from "./DropdownUser"

const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    span {
      margin-right: 34px;
    }

    span::after {
            background-color: #FD4559;
            position absolute;
            width: 6px;
            height: 6px;
            content: " ";
            border-radius: 6px;
            margin-top: -2px;
    }
`;

const UserInfo = () => {
  return (
    <Container>
      <span>
      </span>
      <DropdownUser />
    </Container>
  );
};

export default UserInfo;
