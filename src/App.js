import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./auth/ProtectedRoute";
import Login from "./auth/login";
import MainLayout from "./common/MainLayout"; // new layout
import NewAppointment from "./components/NewAppointment";
import PatientList from "./components/PatientList";
import "./css/App.css";
import "./css/auth.css";
import "./css/media.css";
import Home from "./components/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        <Route path="/" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <MainLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </ProtectedRoute>
          }
        >
          <Route path="NewAppointment" element={<NewAppointment />} />
          <Route path="patientList" element={<PatientList />} />
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
