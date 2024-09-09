import React from "react";
import Sidebar from "./Sidebar";
import { Navigate, useNavigate } from "react-router-dom";

const AuthProvider = ({ user, children }) => {
  const navigate = useNavigate();
  if (user === null) navigate("/login");

  return user ? (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  ) : (
    <Navigate path="/login" />
  );
};

export default AuthProvider;
