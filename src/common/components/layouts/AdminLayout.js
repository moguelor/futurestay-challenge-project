import React, { useState } from "react";
import { NavBar, MenuMobile, ToggleTheme, ToggleButton } from "@components";
import styled from "styled-components";

const WrapperContent = styled.section`
  padding-top: 65px;
  padding-bottom: 0px;

  @media (min-width: 576px) {
    padding-top: 80px;
    padding-bottom: 25px;
  }
`;

const AdminLayout = ({ children, handleToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavBar handleClickOpen={() => setIsOpen(true)} />
      <MenuMobile isOpen={isOpen} handleClickClose={() => setIsOpen(false)} />
      <WrapperContent>{children}</WrapperContent>
      <ToggleTheme handleToggleTheme={handleToggleTheme} />
    </>
  );
};

export default AdminLayout;
