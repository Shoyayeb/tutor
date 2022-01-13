import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { lightBlue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import React from "react";
import { SocialIcon } from 'react-social-icons';
import pay from '../../../assets/payment.png';

const Footer = () => {
  const defaultColor = lightBlue[400];
  return (
    <>
    <Box component="footer" style={{borderBottom:'1px solid gray'}} sx={{ bgcolor: "background.paper", py: 6,px: 4 }}>
      <Grid container >
        <Grid item={true} md={4}>
       <div style={{marginRight:'50px'}}>
       <Typography
            fontSize="h5.fontSize"
            color={defaultColor}
            fontFamily="Poppins"
            noWrap
            
            sx={{
              // fontSize:'20px',
              flexGrow: 1,
              fontWeight: "bold",
              textDecoration: "none",
              textShadow: "2px 2px 5px lightblue",
              mb:3,
              
            }}
          >
            tutor
          </Typography>
          <Typography sx={{fontSize:'14px',mb:5}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis maxime modi veritatis harum sint ipsam
          </Typography>
          <Typography  sx={{fontSize:'14px'}}>
            @tutor
          </Typography>
       </div>
        </Grid>
        <Grid item={true} md={2}>
            <Typography style={{fontWeight:'500'}} sx={{mb:3}}>Useful Links</Typography>
            <Typography sx={{fontSize:'14px',my:1}}>About Us</Typography>
            <Typography sx={{fontSize:'14px',my:1}}>Privacy Policy</Typography>
            <Typography sx={{fontSize:'14px',my:1}}>Terms & Conditions</Typography>
            <Typography sx={{fontSize:'14px',my:1}}>Contact Us</Typography>
        </Grid>
        <Grid item={true} md={3}>
              <Typography sx={{mb:3}}  style={{fontWeight:'500'}}>Contact Us</Typography>
              <Typography sx={{fontSize:'14px',mb:3,mr:2}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odit ipsam qui dolore nam fuga voluptatem sit sint non sed debitis</Typography>
              <Typography sx={{fontSize:'14px'}}>+088 01300-00000</Typography>
        </Grid>
          <Grid item={true} md={3}>
            <Typography sx={{mb:3}}  style={{fontWeight:'500'}}>Follow Us</Typography>
            <span >
            <SocialIcon style={{width:'35px', height:'35px',marginRight:'8px'}} network="facebook" />
            </span>
            <span>
            <SocialIcon style={{width:'35px', height:'35px',marginRight:'8px'}} network="instagram" />
            </span>
            <span>
            <SocialIcon style={{width:'35px', height:'35px',marginRight:'8px'}} network="discord" />
            </span>
            <span>
            <SocialIcon style={{width:'35px', height:'35px',marginRight:'8px'}} network="linkedin" />
            </span>
        </Grid>
      </Grid>
    </Box>
    <Box component="footer" style={{borderBottom:'1px solid gray'}} sx={{ bgcolor: "background.paper", py: 2,px: 4 }}>
    <Grid container>
      <Grid item={true} md={5} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Typography sx={{fontSize:'14px',textAlign:'center'}}>Copyright©2022 tutor.org|All Rights Reserved</Typography>
      </Grid>
      <Grid item={true} md={7} style={{display:'flex',justifyContent:'flex-end'}}>
            <img style={{width:'50%',}} src={pay} alt="" />
      </Grid>
    </Grid>
    </Box>
    </>
  );
};

export default Footer;
