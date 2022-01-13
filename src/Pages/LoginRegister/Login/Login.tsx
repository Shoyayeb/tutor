import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import bg from "../../../assets/bg.png";
import LoginBanner from "../../../assets/loginRegister1.png";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState<any>({});
  const { setError, loginUserByEmail } = useAuth();

  const handleOnChange = (e: any) => {
    const field = e.target.name;
    const value = e.target.value;
    const data = { ...loginData };
    data[field] = value;
    setLoginData(data);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData);
    if (loginData === {} || !loginData.email || !loginData.password) {
      setError("Please Enter Your Email And Password");
    } else {
      console.log("creating");
      loginUserByEmail(loginData.email, loginData.password);
    }
  };

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
      <Container component="main" maxWidth="xs">
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleOnChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleOnChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Stack direction="row" spacing={5}>
            <IconButton
              aria-label="google"
              color="error"
              sx={{ width: "75px", height: "75px" }}
            >
              <GoogleIcon fontSize="large"></GoogleIcon>
            </IconButton>
            <IconButton
              aria-label="fingerprint"
              color="default"
              sx={{ width: "75px", height: "75px" }}
            >
              <AppleIcon fontSize="large"></AppleIcon>
            </IconButton>
            <IconButton
              aria-label="facebook"
              color="info"
              sx={{ width: "75px", height: "75px", fontSize: "15px" }}
            >
              <FacebookIcon fontSize="large"></FacebookIcon>
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
