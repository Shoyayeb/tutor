import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React from "react";

const LoginButton = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& > *": {
            // m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="outlined"
          fullWidth={true}
          size="large"
          sx={{
              fontSize:"5rem"
          }}
        >
          <Button
            key="one"
            startIcon={<GoogleIcon />}
            color="error"
          >
            {" "}
            Login with Google
          </Button>
          <Button
            key="one"
            startIcon={<FacebookIcon />}
            color="info"
          >
            {" "}
            Login with Google
          </Button>
          <Button
            key="one"
            startIcon={<AppleIcon />}
            color="inherit"
          >
            {" "}
            Login with Google
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default LoginButton;
