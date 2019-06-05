import React from "react";
import StarIcon from "@material-ui/icons/StarRateSharp";

function generateStarRating(rating) {
  if (rating === 0)
    return <p>0 stars</p>
  var stars = [];
  for (var i = 0; i < rating && i < 6; i++) {
    stars.push(<StarIcon style={{width:"2rem", height:"2rem"}}/>);
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
      <p><b>Food</b>: { props.foods }
      <br />
      <b>Price Range</b>: { props.priceRange }
      <br />
      <b>Address</b>: { props.address }
      <br />
      <b>Open From</b>: { props.openingHour } - { props.closingHour }</p>
    </div>
  </div>
);

export default Restaurant;