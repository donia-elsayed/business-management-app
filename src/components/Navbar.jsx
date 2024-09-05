import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="text-white p-4 border-b-2 border-white bg-gradient-to-r from-[#0072ff] to-[#00c6ff]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg sm:text-xl font-bold">Business Management</h1>
        <div className="flex space-x-4">
          <Link to="/login" className="px-2 sm:px-4 text-sm sm:text-base font-bold hover:text-gray-50" aria-label="Login">Login</Link>
          <Link to="/register" className="px-2 sm:px-4 text-sm sm:text-base font-bold hover:text-gray-50" aria-label="Register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


