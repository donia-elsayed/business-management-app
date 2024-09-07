import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import OrdersPage from "./pages/OrdersPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import AuthProvider from "./components/AuthProvider";

function App() {
  const isLoggedIn = true;

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<AuthProvider isLoggedIn={false}><LoginPage /></AuthProvider>} />
        <Route path="/register" element={<AuthProvider isLoggedIn={false}><RegisterPage /></AuthProvider>} />
        <Route path="/" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
        {isLoggedIn && (
          <Route path="*" element={<AuthProvider isLoggedIn={true} />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
