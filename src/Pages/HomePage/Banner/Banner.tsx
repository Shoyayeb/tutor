import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import bg from "../../../assets/rect.png";
import BannerImage from "../../../assets/transbg.png";


const Banner = () => {
  return (
    <div>
      <Paper
        sx={{
          position: "relative",
          //   backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          mx: 0,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${bg})`,
          minHeight: "100vh",
          //   filter: 'blur(10px)',
        }}
      >
        <Container sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
          <div style={{width:"50%"}}>
            <Typography sx={{ color: "black", fontSize: "50px" }}>
              Experienced mobile and web applications and website builders
              measuring.
            </Typography>
          </div>
          <div style={{width:"50%"}}>
              <img src={BannerImage} style={{width: "100%",}} alt="banner" loading="lazy" />
          </div>
        </Container>
      </Paper>
    </div>
  );
};

export default Banner;
