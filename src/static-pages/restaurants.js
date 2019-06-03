import React from "react";
import Grid from "@material-ui/core/Grid";

import Layout from "../components/layout";
import Restaurant from "../components/restaurant";

var listOfRestaurants = [
  {
    name: "Marc's Pizzeria",
    rating: 5,
    foods: "Authentic Italian Pizza",
    priceRange: "$10 - $60",
    address: "326 Cloverfield Lane",
    openingHour: "10am",
    closingHour: "7pm",
    photoFileName: "pizzarestaurant.jpg"
  },
  {
    name: "Ian's Cafe",
    rating: 4,
    foods: "Coffee and Comfort Food",
    priceRange: "$5 - $30",
    address: "831 Marquee Ave",
    openingHour: "8am",
    closingHour: "4pm",
    photoFileName: "cafe.jpg"
  },
  {
    name: "Chris's Bar",
    rating: 4,
    foods: "Drinks and Cocktails",
    priceRange: "$2 - $5",
    address: "131 Farron St",
    openingHour: "4pm",
    closingHour: "2am",
    photoFileName: "bar.jpg"
  }
];

const generateRestaurantList = () =>
  listOfRestaurants.map(function(restaurant, index) {
    return (
      <Grid item key={index} style={{ border: "2px solid black", padding:"0 2rem 0 2rem" }}>
        <Restaurant
          name={restaurant.name}
          photoFileName={restaurant.photoFileName}
          rating={restaurant.rating}
          foods={restaurant.foods}
          priceRange={restaurant.priceRange}
          address={restaurant.address}
          openingHour={restaurant.openingHour}
          closingHour={restaurant.closingHour}
        />
      </Grid>
    );
  });

const Restaurants = () => (
  <Layout>
    <Grid container direction="column" align="center">
      <h1>Restaurants</h1>
      {generateRestaurantList()}
    </Grid>
  </Layout>
);

export default Restaurants;
