import React from "react";
import Header from "../../../components/Header";
import SingleProductDetails from "../../../components/SingleProductDetails";
import { useHistory } from "react-router-dom";
import AppButton from "../../../components/AppButton";

function CartSuccess() {
  const history = useHistory();
  return (
    <div>
      <Header />

      <div>
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
      <SingleProductDetails />
    </div>
  );
}

export default CartSuccess;
