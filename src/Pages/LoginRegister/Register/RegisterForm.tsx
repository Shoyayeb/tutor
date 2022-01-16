import { MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const RegisterForm = (props: any) => {
  const [registerData, setRegisterData] = useState<any>({});
  const { setError, setIsLogin, createUserByEmail } = useAuth();
  const [gender, setGender] = useState<string>("");

  const handleChange = (event: any) => {
    setGender(event.target.value);
  };
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
      !registerData.firstName ||
      !registerData.lastName ||
      !registerData.phone
    ) {
      console.log("notEntered", registerData);
      setError("Please enter your information correctly");
    } else {
      console.log("creating");
      createUserByEmail(
        registerData.email,
        registerData.password,
        registerData.firstName,
        registerData.lastName,
        registerData.phone
      );
    }
  };

  return (
    <div>
      <Box sx={{ mt: 3 }}>
        <Grid
          component="form"
          noValidate
          onSubmit={handleSubmit}
          container
          spacing={2}
        >
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
              required
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
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type="tel"
              id="phone"
              name="phone"
              label="Phone Number"
              // placeholder="+8801234567890"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
          {/* <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <Select
              value={gender}
              onChange={handleChange}
              displayEmpty
              fullWidth
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="" disabled>
                <em>Select Gender</em>
              </MenuItem>
              <MenuItem value={0}>Male</MenuItem>
              <MenuItem value={1}>Female</MenuItem>
              <MenuItem value={2}>Others</MenuItem>
            </Select>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Grid>
      </Box>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link
            variant="body2"
            component="button"
            onClick={() => setIsLogin(true)}
          >
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterForm;
