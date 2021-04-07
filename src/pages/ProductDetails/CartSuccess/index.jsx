import React from "react";
import Header from "../../../components/Header";
import SingleProductDetails from "../../../components/SingleProductDetails";

function CartSuccess() {
  return (
    <div>
      <Header />

      <div>
        <h5>Item added to Cart</h5>
      </div>
      <SingleProductDetails />
    </div>
  );
}

export default CartSuccess;
