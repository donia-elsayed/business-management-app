import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ user, children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return user ? (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  ) : null;
};

export default AuthProvider;
