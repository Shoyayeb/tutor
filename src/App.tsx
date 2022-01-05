import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage/HomePage";
import Register from './Pages/LoginRegister/Register/Register';
import NotFound from "./Pages/NotFound/NotFound";
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/new" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
