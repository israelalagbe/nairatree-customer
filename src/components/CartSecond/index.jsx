import React from "react";
import Error from "../../img/error.png";
import AppButton from "../AppButton";
import "./index.scss";

function CartSecond() {
  return (
    <div className="cart-second">
      <div className="error">
        <div className="error-img">
          <img src={Error} alt="#" />
        </div>
        <p> Your Cart is Up-to-date</p>
      </div>
      <div className="sub-total">
        <div className="main">
          <div className="sub">
            <h6>Subtotal</h6>
            <h5>₦ 150,999.00</h5>
          </div>
          <div className="sub">
            <h6>Number of Items</h6>
            <h5>2</h5>
          </div>
          <div className="sub">
            <h6>Shipping fee</h6>
            <h5>₦ 0.0</h5>
          </div>
        </div>

        <div className="attach">
          <h6>Order Total</h6>
          <h5>₦ 150,999.00</h5>
        </div>
        <div className="all-button">
          <AppButton buttonText="PROCEED TO CHECKOUT" classname="check" />
          <AppButton buttonText="CHECKOUT AS GUEST" classname="check" />
        </div>
      </div>
    </div>
  );
}

export default CartSecond;
