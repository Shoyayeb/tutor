import {
  AppBar, Avatar, Box, Button, ButtonProps, CssBaseline, GlobalStyles, IconButton,
  Link,
  Menu,
  MenuItem, styled, Toolbar, Tooltip,
  Typography
} from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import ErrorModal from "./ErrorModal";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { user,signOutUser,error, } = useAuth();
  const navLinks = ['Home', 'Features', 'Services', 'Dashboard'];
  const defaultColor = lightBlue[400];
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(defaultColor),
    backgroundColor: defaultColor,
    "&:hover": {
      backgroundColor: lightBlue[800],
    },
  }));
  console.log(user.email);

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
            tutor
          </Typography>
          <nav>
          
          {navLinks.map(link =>
            <Link
              style={{ textTransform: "none" }}
              component={RouterLink}
              to={`/${link.toLowerCase()}`}
              variant="button"
              color="text.primary"
              underline="none"
              sx={{ my: 1, mx: 1.5 }}
              key={link}
            >
              {link}
            </Link>
          )}
          </nav>
          {user.email ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={signOutUser}>
                    <Typography textAlign="center">Log Out</Typography>
                  </MenuItem>
              </Menu>
            </Box>
          ) : (
            <RouterLink style={{textDecoration:'none'}} to="/login">
              <ColorButton
                style={{ textTransform: "none", color: "white" }}
                variant="contained"
                sx={{ my: 1, mx: 1.5 }}
              >
                Login/Register
              </ColorButton>
            </RouterLink>
          )}
        </Toolbar>
      </AppBar>
      {error?<ErrorModal error={error}></ErrorModal>:''}
    </React.Fragment>
  );
};

export default Navbar;
