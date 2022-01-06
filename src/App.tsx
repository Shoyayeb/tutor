
import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage/HomePage";
import Register from './Pages/LoginRegister/Register/Register';
import NotFound from "./Pages/NotFound/NotFound";
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

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
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/new" element={<Register />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
