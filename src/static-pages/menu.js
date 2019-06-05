import React from "react";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import { SnackbarProvider, withSnackbar } from "notistack";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import green from "@material-ui/core/colors/green";

import Layout from "../components/layout";
import "../styles/menu.css";
import { Typography } from "@material-ui/core";

const menuDetails = [
  {
    name: "Marc's Pizzeria",
    menu: [
      {itemName:"small pizza",itemPrice: 8},
      {itemName:"medium pizza",itemPrice: 10},
      {itemName:"large pizza",itemPrice: 12},
      {itemName:"small sub",itemPrice: 5},
      {itemName:"medium sub",itemPrice: 6},
      {itemName:"large sub",itemPrice: 7},
      {itemName:"soft drinks",itemPrice: 2}
    ]
  },
  {
    name: "Ian's Cafe",
    menu: [
      {itemName:"small coffee",itemPrice: 3},
      {itemName:"medium coffee",itemPrice: 4},
      {itemName:"large coffee",itemPrice: 5},
      {itemName:"small sandwich",itemPrice: 4},
      {itemName:"medium sandwich",itemPrice: 5},
      {itemName:"small sandwich",itemPrice: 6}
    ]
  },
  {
    name: "Chris's Bar",
    menu: [
      {itemName:"nachos", itemPrice: 6},
      {itemName:"burrito",itemPrice: 6},
      {itemName:"wings",itemPrice: 7},
      {itemName:"small sub",itemPrice: 5},
      {itemName:"medium sub",itemPrice: 6},
      {itemName:"large sub",itemPrice: 7}
    ]
  }
];


const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: '#43a047'
  },
  remove: {
    backgroundColor: '#d32f2f'
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

const buttons = [
  { variant: 'add', message: 'Added to Cart' },
  { variant: 'remove', message: 'Removed from Cart' }
]

const Menu = props => {
  const { id } = props.match.params;
  console.log(id);

  var shoppingCart = props.shoppingCart;

  const handleClickAdd = () => {
    props.enqueueSnackBar("Added to Cart");
  };

  const handleClickVariant = variant => {
    props.enqueueSnackBar("Removed from Cart", { variant });
  };

  const MenuItem = () => {
    var menuIndex = 0;
    for (var i = 0; i < menuDetails.length; i++) {
      if (menuDetails[i].name === id) menuIndex = i;
    }

    return menuDetails[menuIndex].menu.map(function(menuItem, index) {
      return (
        <Grid
          container
          width="30%"
          alignItems="center"
          direction="row"
          justify="space-around"
          className="menu-item"
        >
          <h3 style={{ textTransform: "capitalize" }}>{menuItem.itemName}</h3>
          <h3 style={{ margin: "0 auto" }}>{"$" + menuItem.itemPrice}</h3>
          <div>
            <IconButton onClick={handleClickAdd}>
              <AddCircleIcon />
            </IconButton>
            <Typography />
            <IconButton onClick={handleClickVariant("warning")}>
              <RemoveCircleIcon />
            </IconButton>
          </div>
        </Grid>
      );
    });
  };

  return (
    <Layout>
      <SnackbarProvider maxSnack={3}>
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
      </SnackbarProvider>
    </Layout>
  );
};

export default withSnackbar(Menu);
