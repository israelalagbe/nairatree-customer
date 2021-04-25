import React from "react";
import AppRating from "../AppRating";
import "./index.scss";

function ProductRating() {
  const ratingValue = 4;
  return (
    <div className="productRating">
      <h5>{ratingValue}/5</h5>
      <AppRating value={ratingValue} />
      <p>{ratingValue} rating</p>
    </div>
  );
}

export default ProductRating;
