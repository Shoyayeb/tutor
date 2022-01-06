import { Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Link as RouterLink from ""
import React from "react";
import {
  Link as RouterLink
} from "react-router-dom";
const Navbar = () => {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none", } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="blue" noWrap sx={{ flexGrow: 1 }}>
            Tutor
          </Typography>
          <nav>
            <Link
            style={{textTransform: 'none'}}
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
          <Button style={{textTransform: 'none'}} component={RouterLink} to="/login" variant="contained" sx={{ my: 1, mx: 1.5 }}>
            Login/Register
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
