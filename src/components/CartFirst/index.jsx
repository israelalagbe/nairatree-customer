import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import Iphone from "../../img/iphone.png";
import formatMoney from "../../util/formatMoney";
import AppButton from "../AppButton";
import "./index.scss";

/**
 *
 * @param {object} props
 * @param {Cart[]} props.carts
 * @param {(cartIndex:number, cartUpdate: Cart)=>void} props.updateCart
 */
function CartFirst({ carts, updateCart }) {
  /**
   * @param {number} index 
   * @param {Cart} cart 
   * @param {ProductVariant} variant 
   */
  const incrementCart = (index, cart, variant) => {
    updateCart(index, {
      ...cart,
      quantity: cart.quantity <
        (variant?.quantity ?? cart.product.quantity_available)
        ? cart.quantity + 1
        : cart.quantity,
    });
  }

  /**
   * @param {number} index 
   * @param {Cart} cart
   */
  const decreaseCart = (index, cart) => {
    updateCart(index, {
      ...cart,
      quantity: cart.quantity > 1 ? cart.quantity - 1 : cart.quantity,
    });
  }



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

      {carts.map((cart, index) => {
        const product = cart.product;
        const variant = product.variants.find(
          (variant) => String(variant.variant_id) === String(cart.variant)
        );
        const productImage = variant?.images[0] ?? cart.product.images[0];
        return (
          <div className="wishlist">
            <div className="main">
              <div className="wish-check">
                <FormGroup>
                  <div>
                    <Input type="checkbox" />
                    <div className="content">
                      <div className="content-img">
                        <img src={productImage} alt={product.name} />
                      </div>
                      <div className="content-2">
                        <h5>{cart.product.name}</h5>

                        {variant ? (
                          <h6>
                            Color: <span className="capitalize">{variant.color}</span>
                          </h6>
                        ) : null}
                        <h4>
                          {formatMoney(product.price * cart.quantity)} &nbsp;&nbsp;{" "}
                          {product.deal ? (
                            <span>{formatMoney(product.deal.new_price)}</span>
                          ) : null}
                        </h4>
                        <div className="maintain">
                          <h6
                            className="pointer"
                            onClick={() => decreaseCart(index, cart)}
                          >
                            -
                          </h6>
                          <p>{cart.quantity}</p>
                          <h6
                            className="pointer"
                            onClick={() => incrementCart(index, cart, variant)}
                          >
                            +
                          </h6>
                        </div>
                        <h6>Free Shipping: Within Lagos</h6>
                      </div>
                    </div>
                  </div>
                </FormGroup>
              </div>
              <div className="del-add">
                {/* <h6>ADD TO WISHLIST </h6> */}
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
