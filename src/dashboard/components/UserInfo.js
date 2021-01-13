import React from "react";
import { ReactComponent as BellIcon } from "../../common/resources/icons/bell-icon.svg";
import styled from "styled-components";

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
        <BellIcon />
      </span>
      Another things
    </Container>
  );
};

export default UserInfo;
