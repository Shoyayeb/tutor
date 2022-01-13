import { MenuItem } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from "react";
import useAuth from '../../../Hooks/useAuth';

const NavProfileModal = () => {
  const { user,signOutUser,error, } = useAuth();
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={user.photoURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.displayName}
          </Typography>
        </CardContent>
        <CardActions>
          <MenuItem onClick={signOutUser}>
                    <Typography textAlign="center">Log Out</Typography>
                  </MenuItem>
        </CardActions>
      </Card>
    </div>
  );
};

export default NavProfileModal;
