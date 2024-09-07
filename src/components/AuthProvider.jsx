import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const AuthProvider = ({ isLoggedIn, children }) => (
  <>
    <Navbar />
    <div className="flex flex-1">
      {isLoggedIn && <Sidebar />}
      <div className="flex-1">{children}</div>
    </div>
    <Footer />
  </>
);

export default AuthProvider;
