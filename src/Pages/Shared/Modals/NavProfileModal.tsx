import { CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import React from "react";
import useAuth from "./../../../Hooks/useAuth";

const NavProfileModal = () => {
  const { signOutUser } = useAuth();
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader
          avatar={<Avatar aria-label="recipe">S</Avatar>}
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardContent></CardContent>
        <CardActions>
          <Button size="small" onClick={signOutUser}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default NavProfileModal;
