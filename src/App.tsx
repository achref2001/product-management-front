// import React from "react";
import "./App.css";
import AppRoutes from "@/routs";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/context/authProtection";
import { Routes, Route } from "react-router-dom";
import Login from "@/templates/Login";
import { Toaster } from "sonner";
import HomePage from "@/templates/pages/home";
import ContactPage from "@/templates/pages/Contact";
import AboutPage from "@/templates/pages/About";
import Dashboard from "@/templates/Dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/about" element={<AboutPage />} />  */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
