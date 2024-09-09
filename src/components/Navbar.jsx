import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";
  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };
  return (
    <nav className="text-white p-4 border-b-[0.5px] border-gray-100 bg-gradient-to-r from-[#0072ff] to-[#00c6ff]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg sm:text-xl font-bold">Business Management</h1>
        {user && !isAuthPage ? (
          <button
            onClick={handleLogout}
            className="px-2 sm:px-4 text-sm sm:text-base font-bold hover:text-gray-50"
            aria-label="Logout"
          >
            Logout
          </button>
        ) : (
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="px-2 sm:px-4 text-sm sm:text-base font-bold hover:text-gray-50"
              aria-label="Login"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-2 sm:px-4 text-sm sm:text-base font-bold hover:text-gray-50"
              aria-label="Register"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
