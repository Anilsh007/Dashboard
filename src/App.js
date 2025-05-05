import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./auth/ProtectedRoute";
import Login from "./auth/login";
import MainLayout from "./common/MainLayout";
import NewAppointment from "./components/NewAppointment";
import PatientList from "./components/PatientList";
import Home from "./components/Home";

import "./css/App.css";
import "./css/auth.css";
import "./css/media.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Login route */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* Protected Main Layout routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <MainLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="NewAppointment" element={<NewAppointment />} />
          <Route path="patientList" element={<PatientList />} />
        </Route>

        {/* Redirect unknown paths to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
