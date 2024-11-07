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
import { useEffect, useState } from "react";
import HomeImg from "./assets/home-img.jpg";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <div className="w-full sm:w-3/4 mx-auto py-12">
        <img src={HomeImg} alt="Business" className=" w-full object-contain" />
      </div>
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
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
