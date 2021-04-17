import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import Iphone from "../../img/iphone.png";
import AppButton from "../AppButton";
import "./index.scss";

/**
 *
 * @param {object} props
 * @param {Cart[]} props.carts
 */
function CartFirst({ carts }) {
  console.log(carts)
  return (
    <div className="cart-first">
      <div className="main">
        <div className="shopping-cart">
          <h3>Shopping Cart({carts.length})</h3>
        </div>
        <div className="main-flex">
          <div className="d-flex mt-1">
            <p>Select All</p>
            <h6>Delete Selected</h6>
          </div>
          <AppButton buttonText="Update Cart" classname="update-button" />
        </div>
      </div>

      {carts.map((cart) => {
        const product = cart.product;
        const variant = product.variants.find((variant)=> String(variant.variant_id) === String(cart.variant))
        const productImage = variant?.images[0] ?? cart.product.images[0];
        return (
          <div className="wishlist">
            <div className="main">
              <div className="wish-check">
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />
                    <div className="content">
                      <div className="content-img">
                        <img src={productImage} alt={product.name} />
                      </div>
                      <div className="content-2">
                        <h5>{cart.product.name}</h5>

                        <h6>Color: Red</h6>
                        <h4>
                          ₦ 150,999.00 &nbsp;&nbsp; <span>₦ 150,999.00</span>
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
        );
      })}
    </div>
  );
}

export default CartFirst;
