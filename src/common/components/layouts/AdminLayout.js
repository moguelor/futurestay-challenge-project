import React from "react";
import { NavBar } from "@components";

const AdminLayout = ({ children }) => {
  return <div>
      <NavBar />
      {children}
    </div>;
};

export default AdminLayout;
