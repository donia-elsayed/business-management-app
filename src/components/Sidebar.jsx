import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  CubeIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0072ff] to-[#00c6ff] text-white">
      <div className="flex items-center justify-between p-4">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>
      </div>
      <div
        className={`flex flex-col ${
          isOpen ? "w-64" : "w-16"
        } transition-width duration-300`}
      >
        <Link
          to="/dashboard"
          className={`flex items-center p-4 hover:bg-gray-100 hover:text-[#0072ff] border-b border-white ${
            !isOpen && "justify-center"
          }`}
        >
          <HomeIcon className="w-7 h-7" />
          {isOpen && <span className="ml-2">Dashboard</span>}
        </Link>
        <Link
          to="/products"
          className={`flex items-center p-4 hover:bg-gray-100 hover:text-[#0072ff] border-b border-white ${
            !isOpen && "justify-center"
          }`}
        >
          <CubeIcon className="w-7 h-7" />
          {isOpen && <span className="ml-2">Products</span>}
        </Link>
        <Link
          to="/orders"
          className={`flex items-center p-4 hover:bg-gray-100 hover:text-[#0072ff] border-b border-white ${
            !isOpen && "justify-center"
          }`}
        >
          <ShoppingCartIcon className="w-7 h-7" />
          {isOpen && <span className="ml-2">Orders</span>}
        </Link>
        <Link
          to="/users"
          className={`flex items-center p-4 hover:bg-gray-100 hover:text-[#0072ff] border-b border-white ${
            !isOpen && "justify-center"
          }`}
        >
          <UserIcon className="w-7 h-7" />
          {isOpen && <span className="ml-2">Users</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
