import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import bg from "../../../assets/bg.png";
import LoginBanner from "../../../assets/loginRegister.png";
import useAuth from "../../../Hooks/useAuth";
// import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const [registerData, setRegisterData] = useState<any>({});
  const {
    user,
    error,
    setError,
    isLoading,
    createUserByEmail,
    signOutUser,
    loginUserByEmail,
  } = useAuth();
  // console.log(user);
  const handleOnChange = (e: any) => {
    const field = e.target.name;
    const value = e.target.value;
    const data = { ...registerData };
    data[field] = value;
    setRegisterData(data);
}
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(registerData);
    if (registerData==={}||registerData.email===''||registerData.password===''||registerData.firstName===''||registerData.lastName==='') {
      setError("Please enter your first name, email and password")
    } else {
      console.log("creating");
      
      createUserByEmail(registerData.email, registerData.password,registerData.firstName,registerData.lastName);
    }
    e.preventDefault();
  };


  return (
    <div>
      <Typography>{error ? error : ""}</Typography>
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
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Register;
