import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, HomeIcon, CubeIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0072ff] to-[#00c6ff] text-white">
      <div className="flex items-center justify-between p-4 md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>
      <div className={`md:flex flex-col md:w-64 w-full ${isOpen ? 'block' : 'hidden'} md:block`}>
        <Link to="/dashboard" className="flex items-center p-4 hover:bg-gray-100 hover:text-[#0072ff] border-b border-white">
          <HomeIcon className="w-5 h-5 mr-2" /> Dashboard
        </Link>
        <Link to="/products" className="flex items-center p-4 hover:bg-gray-100 hover:text-[#0072ff] border-b border-white">
          <CubeIcon className="w-5 h-5 mr-2" /> Products
        </Link>
        <Link to="/orders" className="flex items-center p-4 hover:bg-gray-100 hover:text-[#0072ff] border-b border-white">
          <ShoppingCartIcon className="w-5 h-5 mr-2" /> Orders
        </Link>
        <Link to="/users" className="flex items-center p-4 hover:bg-gray-100 hover:text-[#0072ff] border-b border-white">
          <UserIcon className="w-5 h-5 mr-2" /> Users
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
