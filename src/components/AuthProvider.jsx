import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AuthProvider = ({ isLoggedIn }) => (
  <>
    <Navbar />
    <div className="flex">
      {isLoggedIn && <Sidebar />}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
    <Footer />
  </>
);

export default AuthProvider;
