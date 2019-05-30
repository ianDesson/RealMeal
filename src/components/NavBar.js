import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from "@material-ui/core";

const NavBar = () => {
  return (
    <AppBar
    position="static">
      <Toolbar>
        <Typography>
          Welcome
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;