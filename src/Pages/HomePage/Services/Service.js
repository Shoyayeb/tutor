import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Service = () => {
  return (
    <div style={{ margin: "50px 100px" }}>
      <Grid container>
        <Grid item md={6}>
          <div style={{backgroundColor:'#F4F4F4',padding:'35px 20px',margin:'0 25px 0 0',borderRadius:'20px'}}>
            <div>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "600",
                  margin: "64px 0 0 0",
                  textAlign:'center'
                }}
              >
                Private Class
              </Typography>
              <Typography sx={{textAlign:'center',
            margin:'36px 40px'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium cupiditate quos suscipit totam a nulla eveniet
                alias. Magnam repellendus, facere rerum mollitia laboriosam fuga
                officia, sed commodi aliquid perferendis dolorum.
              </Typography>
              <div style={{ display: "flex", justifyContent: "center",margin:'0 0 60px 0' }}>
                <Button style={{backgroundColor:"#1090CB",color:'#fff'}}>View More</Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={6}>
          <div style={{backgroundColor:"#1090CB",padding:'35px 20px',margin:'0 25px 0 0',borderRadius:'20px'}}>
            <div>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "600",
                  margin: "64px 0 26px 0",
                  textAlign:'center'
                }}
              >
                Private Class
              </Typography>
              <Typography sx={{textAlign:'center',
            margin:'36px 40px'}} >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium cupiditate quos suscipit totam a nulla eveniet
                alias. Magnam repellendus, facere rerum mollitia laboriosam fuga
                officia, sed commodi aliquid perferendis .
              </Typography>
              <div style={{ display: "flex", justifyContent: "center",margin:'0 0 60px 0' }}>
                <Button style={{backgroundColor:"#fff",color:'#1090CB'}}>View More</Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Service;
