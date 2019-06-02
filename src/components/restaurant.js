import React from "react";


const Restaurant = (restaurant) => (
  <div className="Restaurants">
    <div>
      <h2>{ restaurant.name }</h2>
      <img src="../images/pizzarestaurant.jpg" height="400" width="600" />
      <br />
      <img src="../images/fivestars.png" height="45" width="300" />
      <p>Food: { restaurant.foods }</p>
      <p>Price Range: { restaurant.priceRange }</p>
      <p>Address: { restaurant.address }</p>
      <p>Open From { restaurant.openingHour } - { restaurant.closingHour }</p>
    </div>
  </div>
);

export default Restaurant;