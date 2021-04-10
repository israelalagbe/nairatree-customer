import React from "react";
import "./index.scss";
import iphone from "../../../img/iphone.png";
import { Link } from "react-router-dom";

function Orders() {
  return (
    <div className="orders">
      <div className="main-order">
        <div className="order-img">
          <img src={iphone} alt="#" />
        </div>

        <div className="order-details">
          <h3>Iphone 11 Pro Max</h3>
          <h6>Color: Red</h6>
          <h4>₦ 150,999.00</h4>
          <h5>Delivered</h5>
        </div>
      </div>
      <div className="details">
        <Link to="/">See details</Link>
      </div>
    </div>
  );
}

export default Orders;
