import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import BannerImage from "../../../assets/banner.png";
import bg from "../../../assets/rect.png";

const Banner = () => {
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
          opacity: ".8",
        }}
      >
        <Container
          sx={{
            // position: "relative",
            py: 5,
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          {/* slogan */}
          <Container sx={{ width: "50%", mt: { xs: 0, md: 5 } }}>
            <Typography
              sx={{ color: "black", fontSize: "40px", fontWeight: "500" }}
            >
              Start Learning Now From{" "}
              <span style={{ color: "#29b6f6" }}>Teachers</span> Around The
              World
            </Typography>
            
          </Container>
          {/* img */}
          <div style={{ width: "50%", position: "relative" }}>
            <img
              src={BannerImage}
              style={{
                width: "100%",
                filter: "blur(30px)",
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
