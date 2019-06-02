import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar } from "@material-ui/core";


const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  }
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar
    position="static">
      <Toolbar>
        <Avatar alt="RM" src={require('../images/logo-512x512.png')} className={classes.bigAvatar}/>
        <Typography>
          RealMeal
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
