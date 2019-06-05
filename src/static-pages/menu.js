import React from "react";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import green from "@material-ui/core/colors/green";

import Layout from "../components/layout";
import "../styles/menu.css";
import { Typography } from "@material-ui/core";

const menuDetails = [
  {
    name: "Marc's Pizzeria",
    menu: [
      ["small pizza", 8],
      ["medium pizza", 10],
      ["large pizza", 12],
      ["small sub", 5],
      ["medium sub", 6],
      ["large sub", 7],
      ["soft drinks", 2]
    ]
  },
  {
    name: "Ian's Cafe",
    menu: [
      ["small coffee", 3],
      ["medium coffee", 4],
      ["large coffee", 5],
      ["small sandwich", 4],
      ["medium sandwich", 5],
      ["small sandwich", 6]
    ]
  },
  {
    name: "Chris's Bar",
    menu: [
      ["nachos", 6],
      ["burrito", 6],
      ["wings", 7],
      ["small sub", 5],
      ["medium sub", 6],
      ["large sub", 7]
    ]
  }
];

const variantIcon = {
  success: CheckCircleIcon,
  delete: DeleteIcon
};

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  delete: {
    backgroundColor: theme.palette.error.dark
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

const Menu = props => {
  const { id } = props.match.params;

  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  const MenuItem = restaurantName => {
    var menuIndex = 0;
    for (var i = 0; i < menuDetails.length; i++) {
      if (menuDetails[i].name === restaurantName) menuIndex = i;
    }

    return menuDetails[menuIndex].menu.map(function(menuItem, index) {
      return (
        <Grid
          container
          width="30%"
          direction="row"
          justify="space-between"
          className="menu-item"
        >
          <div>
            <h3 style={{ textTransform: "capitalize" }}>{menuItem[0]}</h3>
            <h3>{"$" + menuItem[1]}</h3>
          </div>
        </Grid>
      );
    });
  };

  return (
    <Layout>
      <Grid container direction="column" align="center">
        <div id="jumbotron">
          <Typography color="secondary" variant="h1">
            {id}
          </Typography>
        </div>
        <Grid container direction="column" style={{ width: "30%" }}>
          <h1>Menu</h1>
          <MenuItem restaurantName={id} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Menu;
