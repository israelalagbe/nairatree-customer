import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import Iphone from "../../img/iphone.png";
import AppButton from "../AppButton";
import "./index.scss";

function CartFirst() {
  return (
    <div className="cart-first">
      <div className="main">
        <div className="shopping-cart">
          <h3>Shopping Cart(1)</h3>
        </div>
        <div className="main-flex">
          <div className="d-flex mt-1">
            <p>Select All</p>
            <h6>Delete Selected</h6>
          </div>
          <AppButton buttonText="Update Cart" classname="update-button" />
        </div>
      </div>

      <div className="wishlist">
        <div className="main">
          <div className="wish-check">
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />
                <div className="content">
                  <div className="content-img">
                    <img src={Iphone} alt="#" />
                  </div>
                  <div className="content-2">
                    <h5>Iphone 11 Pro Max</h5>

                    <h6>Color: Red</h6>
                    <h4>
                      ₦ 150,999.00<span>₦ 150,999.00</span>
                    </h4>
                    <div className="maintain">
                      <h6>-</h6>
                      <p>2</p>
                      <h6>+</h6>
                    </div>
                    <h6>Free Shipping: Within Lagos</h6>
                  </div>
                </div>
              </Label>
            </FormGroup>
          </div>
          <div className="del-add">
            <h6>ADD TO WISHLIST </h6>
            <h5>DELETE </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartFirst;
