import "./App.css";
import { Routes, Route } from "react-router-dom";
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
  const user = localStorage.getItem("loggedUser");

  return (
    <div className="App">
      <Navbar user={user} />
      <Routes>
        <Route path="/login" element={<LoginPage user={user} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <AuthProvider user={user}>
              <DashboardPage />
            </AuthProvider>
          }
        />
        <Route
          path="/products"
          element={
            <AuthProvider user={user}>
              <ProductsPage />
            </AuthProvider>
          }
        />
        <Route
          path="/orders"
          element={
            <AuthProvider user={user}>
              <OrdersPage />
            </AuthProvider>
          }
        />

        <Route
          path="/users"
          element={
            <AuthProvider user={user}>
              <UsersPage />
            </AuthProvider>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
