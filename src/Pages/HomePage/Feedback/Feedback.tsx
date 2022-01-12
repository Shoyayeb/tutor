import { Button, Typography} from '@mui/material';
import { useInput } from '@mui/base';
import { styled } from '@mui/system';
import React from 'react';
import './Feedback.css';
const blue = {
    200: '#80BFFF',
    400: '#3399FF',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };
  
  const StyledInputElement = styled('input')(
    ({ theme }) => `
    width: 500px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 8px;
    padding: 12px 12px;
    transition: all 200ms ease;
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? null : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:focus {
      outline: 2px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
      outline-offset: 2px;
    }
  `,
  );
  
  const CustomInput = React.forwardRef(function CustomInput(
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) {
    const { getRootProps, getInputProps } = useInput(props, ref);
    return (
        <div {...getRootProps()}>
          <StyledInputElement {...props} {...getInputProps()} />
        </div>
      );
    });
const Feedback = () => {
    return (
        <div className='feedbackContainer'>
            <div>
                <Typography style={{paddingTop:'118px',textAlign:'center',fontSize:'30px',fontWeight:'600'}}>STAY CONNECTED WITH US. <br/> We will inform you what you want!</Typography>
            </div>
            <div style={{display:'flex',justifyContent:"center",marginTop:'60px'}}>
            <CustomInput aria-label="Demo input" placeholder="Your Email" />
            <Button style={{color:'white',backgroundColor:'black',marginLeft:'10px'}}>Subscribe</Button>
            </div>
        </div>
    );
};

export default Feedback;