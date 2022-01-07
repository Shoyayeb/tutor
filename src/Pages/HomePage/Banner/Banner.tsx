import LoginIcon from "@mui/icons-material/Login";
import { Container, Paper, Typography } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import { lightBlue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import bg from "../../../assets/bg.png";
import BannerImage from "../../../assets/kidsOnline.png";

const Banner = () => {
  // const defaultColor = lightBlue[400];

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(lightBlue[400]),
    backgroundColor: lightBlue[400],
    "&:hover": {
      backgroundColor: lightBlue[800],
    },
  }));
  return (
    <div>
      <Paper
        sx={{
          //   backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          mx: 0,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${bg})`,
          minHeight: "100%",
        }}
      >
        <Container
          sx={{
            // position: "relative",
            py: 5,
            display: {xs: "block",md:"flex"},
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          {/* slogan */}
          <Container sx={{ width: "50%", mt: { xs: 0, md: 5 }, display:"flex",flexDirection: "column",gap:5}}>
            <Typography
              sx={{ color: "black", fontSize: "40px", fontWeight: "500" }}
            >
              Start Learning Now From{" "}
              <span style={{ color: "#29b6f6" }}>Teachers</span> Around The
              World
            </Typography>
            <Box>
              <RouterLink to="/login">
                <ColorButton
                  style={{ textTransform: "none", color: "white" }}
                  variant="contained"
                  sx={{ my: 1, mx: 1.5 }}
                  startIcon={<LoginIcon />}
                >
                  Get Started
                </ColorButton>
              </RouterLink>
            </Box>
          </Container>
          {/* img */}
          <div style={{ width: "50%", position: "relative" }}>
            <img
              src={BannerImage}
              style={{
                width: "100%",
                filter:
                  "blur(35px) brightness(120%) contrast(130%)",
                position: "absolute",
                inset: 0,
              }}
              alt="banner"
              loading="lazy"
            />
            <img
              src={BannerImage}
              style={{ width: "100%", position: "relative" }}
              alt="banner"
              loading="lazy"
            />
          </div>
        </Container>
      </Paper>
    </div>
  );
};

export default Banner;
