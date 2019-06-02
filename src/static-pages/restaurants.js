import React from 'react';
import Layout from '../components/layout';

import '../styles/restaurant-page.css';

var listOfRestaurants = [
  {
    name: "Marc's Pizzeria",
    rating: 5,
    foods: "Authentic Italian Pizza",
    priceRange: "$10 - $60",
    address: "326 Cloverfield Lane",
    openingHour: "10am",
    closingHour: "7pm"
  },
  {
    name: "Ian's Cafe",
    rating: 4,
    foods: "Coffee and Comfort Food",
    priceRange: "$5 - $30",
    address: "831 Marquee Ave",
    openingHour: "8am",
    closingHour: "4pm"
  },
  {
    name: "Chris's Bar",
    rating: 4,
    foods: "Drinks and Cocktails",
    priceRange: "$2 - $5",
    address: "131 Farron St",
    openingHour: "4pm",
    closingHour: "2am"
  }
]

const Restaurants = () => (
  <Layout>
    
  </Layout>
)

export default Restaurants;