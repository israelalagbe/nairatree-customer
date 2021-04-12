import React from "react";
import "./index.scss";
import iphone from "../../../img/iphone.png";
import { Link } from "react-router-dom";

function WishList() {
  return (
    <div className="wish">
      <div className="main-wish">
        <div className="wish-img">
          <img src={iphone} alt="#" />
        </div>

        <div className="wish-details">
          <h3>Iphone 11 Pro Max</h3>
          <h6>Color: Red</h6>
          <h4>₦ 150,999.00</h4>
          <Link to="/">See details</Link>
        </div>
      </div>
      <div className="list-details">
        <div className="maintain">
          <h6>-</h6>
          <p>2</p>
          <h6>+</h6>
        </div>
        <h5>Add To Cart</h5>
      </div>
    </div>
  );
}

export default WishList;
