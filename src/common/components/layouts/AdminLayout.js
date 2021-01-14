import React, { useState } from "react";
import { NavBar, MenuMobile } from "@components";

const AdminLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <NavBar handleClickOpen={() => setIsOpen(true)} />
      <section>
        <MenuMobile isOpen={isOpen}  handleClickClose={() => setIsOpen(false)} />
        <section>{children}</section>
      </section>
    </div>
  );
};

export default AdminLayout;
