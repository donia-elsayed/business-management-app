import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import OrdersPage from "./pages/OrdersPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import AuthProvider from "./components/AuthProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const isLoggedIn = () => {
    return localStorage.getItem("isLoggedIn") === "true";
  };
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={isLoggedIn() ? <Navigate to="/dashboard" /> : <LoginPage />} />
        <Route path="/register" element={isLoggedIn() ? <Navigate to="/dashboard" /> : <RegisterPage />} />
        <Route
          path="/"
          element={isLoggedIn() ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />
        {isLoggedIn() && (
          <Route element={<AuthProvider isLoggedIn={true} />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
