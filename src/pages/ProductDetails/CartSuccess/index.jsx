import React from "react";
import Header from "../../../components/Header";
import SingleProductDetails from "../../../components/SingleProductDetails";
import { useHistory } from "react-router-dom";
import AppButton from "../../../components/AppButton";
import "./index.scss";

function CartSuccess() {
  const history = useHistory();
  return (
    <div className="cart-success">
      <Header />

      <div className="main-cart">
        <div className="cart">
          <h5>Item added to Cart</h5>
          <AppButton
            buttonText="VIEW CART AND CHECKOUT"
            classname="checkout-button"
            onClick={() => history.push("/")}
          />
          <AppButton
            buttonText="CONTINUE SHOPPING"
            classname="continue-button"
            onClick={() => history.push("/")}
          />
        </div>
      </div>
      <SingleProductDetails />
    </div>
  );
}

export default CartSuccess;
