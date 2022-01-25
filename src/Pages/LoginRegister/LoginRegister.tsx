import { Twitter } from "@mui/icons-material";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import bg from "../../assets/bg.png";
import LoginBanner from "../../assets/loginRegister.png";
import useAuth from "./../../Hooks/useAuth";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";

const Login = () => {
  const { isLogin, socialSignIn } = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        pt: 5,
        pb: 10,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${bg})`,
      }}
    >
      <Container sx={{ width: "50%", position: "relative" }}>
        <img
          src={LoginBanner}
          style={{
            width: "100%",
            filter: "blur(35px) brightness(150%) contrast(150%)",
            position: "absolute",
            inset: 0,
          }}
          alt="LoginBanner"
          loading="lazy"
        />
        <img
          src={LoginBanner}
          style={{ width: "100%", position: "relative" }}
          alt="LoginBanner"
          loading="lazy"
        />
      </Container>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isLogin ? "Sign in" : "Sign up"}
          </Typography>
          {/* forms */}

          {isLogin ? <LoginForm /> : <RegisterForm />}

          {/* forms ends */}
          <Stack direction="row" spacing={5} sx={{ marginTop: 3 }}>
            <IconButton
              aria-label="google"
              color="error"
              sx={{ width: "75px", height: "75px", boxShadow: 2 }}
              onClick={() => socialSignIn("google")}
            >
              <GoogleIcon fontSize="large"></GoogleIcon>
            </IconButton>
            <IconButton
              aria-label="apple"
              color="default"
              sx={{ width: "75px", boxShadow: 2, height: "75px" }}
              onClick={() => socialSignIn("apple")}
            >
              <AppleIcon fontSize="large"></AppleIcon>
            </IconButton>
            <IconButton
              aria-label="twitter"
              color="info"
              sx={{
                width: "75px",
                height: "75px",
                fontSize: "15px",
                boxShadow: 2,
              }}
              onClick={() => socialSignIn("twitter")}
            >
              <Twitter fontSize="large"></Twitter>
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
