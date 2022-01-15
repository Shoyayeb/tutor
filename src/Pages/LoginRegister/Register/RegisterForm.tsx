import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const RegisterForm = (props: any) => {
  const [registerData, setRegisterData] = useState<any>({});
  const { setError, setIsLogin, createUserByEmail } = useAuth();
  // console.log(user);
  const handleOnChange = (e: any) => {
    const field = e.target.name;
    const value = e.target.value;
    const data = { ...registerData };
    data[field] = value;
    setRegisterData(data);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registerData);
    if (
      registerData === {} ||
      !registerData.email ||
      !registerData.password ||
      !registerData.firstName
    ) {
      setError("Please enter your name, email and password");
    } else {
      console.log("creating");
      createUserByEmail(
        registerData.email,
        registerData.password,
        registerData.firstName,
        registerData.lastName
      );
    }
  };

  return (
    <div>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
              control={<Checkbox value="allowExtraEmails" color="primary" />}
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
            <Link variant="body2" component="button" onClick={() => setIsLogin(true)}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RegisterForm;
