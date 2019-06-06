import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";

import green from "@material-ui/core/colors/green";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  Typography,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";

import Layout from "../components/layout";
import "../styles/menu.css";

const menuDetails = [
  {
    name: "Marc's Pizzeria",
    menu: [
      { itemName: "small pizza", itemPrice: 8, count: 0 },
      { itemName: "medium pizza", itemPrice: 10, count: 0 },
      { itemName: "large pizza", itemPrice: 12, count: 0 },
      { itemName: "small sub", itemPrice: 5, count: 0 },
      { itemName: "medium sub", itemPrice: 6, count: 0 },
      { itemName: "large sub", itemPrice: 7, count: 0 },
      { itemName: "soft drinks", itemPrice: 2, count: 0 }
    ]
  },
  {
    name: "Ian's Cafe",
    menu: [
      { itemName: "small coffee", itemPrice: 3, count: 0 },
      { itemName: "medium coffee", itemPrice: 4, count: 0 },
      { itemName: "large coffee", itemPrice: 5, count: 0 },
      { itemName: "small sandwich", itemPrice: 4, count: 0 },
      { itemName: "medium sandwich", itemPrice: 5, count: 0 },
      { itemName: "small sandwich", itemPrice: 6, count: 0 }
    ]
  },
  {
    name: "Chris's Bar",
    menu: [
      { itemName: "nachos", itemPrice: 6, count: 0 },
      { itemName: "burrito", itemPrice: 6, count: 0 },
      { itemName: "wings", itemPrice: 7, count: 0 },
      { itemName: "small sub", itemPrice: 5, count: 0 },
      { itemName: "medium sub", itemPrice: 6, count: 0 },
      { itemName: "large sub", itemPrice: 7, count: 0 }
    ]
  }
];

const greenTheme = createMuiTheme({
  palette: {
    primary: { main: green[500] }
  }
});

var shoppingCart = [];
var total = 0;

const Menu = props => {
  const { id } = props.match.params;
  const [tabValue, setTabValue] = React.useState(0);

  function handleTabChange(event, newValue) {
    setTabValue(newValue);
  }

  const handleClickAdd = item => {
    var index = shoppingCart.indexOf(item);
    if (index > -1) {
      shoppingCart.splice(index, 1);
    }
    item.count++;
    shoppingCart.push(item);
    console.log(shoppingCart[0]);
  };

  const handleClickRemove = item => {
    shoppingCart[shoppingCart.indexOf(item)].count--;
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
          className="menu-item-border"
        >
          <h3 style={{ textTransform: "capitalize" }}>{menuItem.itemName}</h3>
          <h3 style={{ margin: "0 auto" }}>{"$" + menuItem.itemPrice}</h3>
          <div>
            <MuiThemeProvider theme={greenTheme}>
              <IconButton
                color="primary"
                onClick={() => handleClickAdd(menuItem)}
              >
                <AddCircleIcon />
              </IconButton>
            </MuiThemeProvider>
            <Typography />
            <IconButton
              color="primary"
              onClick={() => handleClickRemove(menuItem)}
            >
              <RemoveCircleIcon />
            </IconButton>
          </div>
        </Grid>
      );
    });
  };

  const Cart = () => {
    if (shoppingCart.length !== 0) {
      // Calculate total
      shoppingCart.forEach(item => {
        total += item.itemPrice * item.count;
      });

      // Generate html
      var elements = [];
      shoppingCart.forEach(cartItem => {
        elements.push(
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            className="cart-item-border"
            style={{
              paddingTop: "0.2vh",
              paddingBottom: "0.2vh"
            }}
          >
            <div className="item-price-text">
              <h3 style={{ textTransform: "capitalize" }}>
                {cartItem.itemName}
              </h3>
              <h3>{"$" + cartItem.itemPrice}</h3>
            </div>
            <h3>{"x" + cartItem.count}</h3>
          </Grid>
        );
      });
      elements.push(
        <Grid container direction="column" alignItems="center">
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            className="cart-item-border"
          >
            <h3>{"SubTotal: $" + total}</h3>
          </Grid>
          <MuiThemeProvider theme={greenTheme}>
            <Link to={{ pathname:"/checkout", state: {cost: total} }}>
              <Button variant="outlined" color="primary">
                Proceed To Checkout
              </Button>
            </Link>
          </MuiThemeProvider>
        </Grid>
      );

      return elements;
    }
    return <h3>Your Shopping Cart is Empty :(</h3>;
  };

  return (
    <Layout>
      <Grid container direction="column" align="center">
        <div id="jumbotron">
          <Typography color="secondary" variant="h1">
            {id}
          </Typography>
        </div>
        <AppBar position="static" color="default">
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="menu" icon={<RestaurantIcon />} />
            <Tab label="Cart" icon={<ShoppingCartIcon />} />
          </Tabs>
        </AppBar>
        {tabValue === 0 && (
          <Grid container direction="column" style={{ width: "30%" }}>
            <h1>Menu</h1>
            <MenuItem restaurantName={id} />
          </Grid>
        )}
        {tabValue === 1 && (
          <Grid container direction="column" style={{ width: "20%" }}>
            <h1>Cart</h1>
            <Cart />
          </Grid>
        )}
      </Grid>
    </Layout>
  );
};

export default Menu;
