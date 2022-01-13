import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Feedback from "./Pages/HomePage/Feedback/Feedback";
import HomePage from "./Pages/HomePage/HomePage/HomePage";
import Service from "./Pages/HomePage/Services/Service";
import Login from "./Pages/LoginRegister/Login/Login";
import Register from "./Pages/LoginRegister/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, Arial",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Poppins';
            font-weight: 400;
          }
        `,
      },
    },
  });
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Service></Service>
         <Feedback></Feedback>
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
