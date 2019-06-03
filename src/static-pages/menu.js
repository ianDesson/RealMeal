import React from "react";
import Grid from "@material-ui/core/Grid";

import Layout from '../components/layout';

const MenuItem = () => (
  <Grid container direction="column">
    <img src="../images/small-sub.jpeg" alt="small-sub" />
    <h3>Small Sub</h3>
    <span>$6</span>
    <button type="submit" class="cart-button">
      Add to Cart
    </button>
  </Grid>
);

const Menu = () => (
  <Layout>
    <Grid container direction="column" align="center">
      <h1>Menu</h1>
      <Grid container direction="row">
        <MenuItem />
      </Grid>
    </Grid>
  </Layout>
);

export default Menu;
