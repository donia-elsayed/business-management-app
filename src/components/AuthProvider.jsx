import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AuthProvider = ({ isLoggedIn }) => (
  <>
    <div className="flex">
      {isLoggedIn && <Sidebar />}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  </>
);

export default AuthProvider;
