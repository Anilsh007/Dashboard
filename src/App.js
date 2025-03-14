import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./elements/Home";
import Create from "./elements/Create";
import Edit from "./elements/Edit";
import Read from "./elements/Read";
import Navbar from "./common/navbar";
import Appointment from "./components/Apointment";
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="Home" element={<Appointment/>} />
          {/* <Route path="/" element={<Appointment/>}/> */}
          {/* <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/read/:id" element={<Read />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
