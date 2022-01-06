import { Link, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button, { ButtonProps } from "@mui/material/Button";
import { lightBlue } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
const Navbar = () => {
  const defaultColor = lightBlue[500];
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(defaultColor),
    backgroundColor: defaultColor,
    "&:hover": {
      backgroundColor: lightBlue[600],
    },
  }));

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        style={{ background: "#fff" }}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            component={RouterLink}
            to="/home"
            fontSize="h4.fontSize"
            color={defaultColor}
            fontFamily="Poppins"
            noWrap
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              textDecoration: "none",
              textShadow: "2px 2px 5px lightblue",
            }}
          >
            TuTor
          </Typography>
          <nav>
            <Link
              style={{ textTransform: "none" }}
              component={RouterLink}
              to="/login"
              variant="button"
              color="text.primary"
              href="#"
              underline="none"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              style={{ textTransform: "none" }}
              component={RouterLink}
              to="/login"
              variant="button"
              color="text.primary"
              href="#"
              underline="none"
              sx={{ my: 1, mx: 1.5 }}
            >
              About Us
            </Link>
            <Link
              style={{ textTransform: "none" }}
              component={RouterLink}
              to="/login"
              variant="button"
              color="text.primary"
              href="#"
              underline="none"
              sx={{ my: 1, mx: 1.5 }}
            >
              Services
            </Link>
            <Link
              style={{ textTransform: "none" }}
              component={RouterLink}
              to="/login"
              variant="button"
              color="text.primary"
              href="#"
              underline="none"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
          </nav>
          <RouterLink to="/login">
            <ColorButton
              style={{ textTransform: "none", color: "white" }}
              variant="contained"
              sx={{ my: 1, mx: 1.5 }}
            >
              Login/Register
            </ColorButton>
          </RouterLink>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
