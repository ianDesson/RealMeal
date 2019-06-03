import React from "react";
import StarIcon from "@material-ui/icons/StarRateSharp";

function generateStarRating(rating) {
  if (rating === 0)
    return <p>0 stars</p>
  var stars = [];
  for (var i = 0; i < rating && i < 6; i++) {
    stars.push(<StarIcon />);
  }
  return stars;
}

const Restaurant = (props) => (
  <div className="Restaurants">
    <div>
      <h2>{ props.name }</h2>
      <img src={require("../images/" + props.photoFileName)} alt={props.name} height="400" width="600" />
      <br />
      { 
        generateStarRating(props.rating)
      }
      <p>Food: { props.foods }</p>
      <p>Price Range: { props.priceRange }</p>
      <p>Address: { props.address }</p>
      <p>Open From { props.openingHour } - { props.closingHour }</p>
    </div>
  </div>
);

export default Restaurant;