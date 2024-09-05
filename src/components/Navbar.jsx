import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="text-white p-4 border-b-2 border-white bg-gradient-to-r from-[#0072ff] to-[#00c6ff]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Business Management</h1>
        <div className="flex space-x-4">
          <Link to="/login" className="px-4 font-bold hover:text-[#eafaff]" aria-label="Login">Login</Link>
          <Link to="/register" className="px-4 font-bold hover:text-[#eafaff]" aria-label="Register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


