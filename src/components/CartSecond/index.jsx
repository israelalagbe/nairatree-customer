import React from "react";
import Error from "../../img/error.png";
import AppButton from "../AppButton";
import "./index.scss";
import { Link, useHistory } from "react-router-dom";
import formatMoney from "../../util/formatMoney";

/**
 *
 * @param {object} props
 * @param {Cart[]} props.carts
 */
function CartSecond({carts}) {
  const history = useHistory();
  
  const numberOfItems = carts.reduce((count, cart)=> cart.quantity + count , 0);

  const subTotal = carts.reduce((price, cart)=> cart.product.price + price , 0);

  const totalShippingFee = carts.reduce((price, cart)=> cart.product.shipment_fees[0].fee + price , 0);
  
  const total = totalShippingFee + subTotal;

  const checkoutPage = () => {
    history.push("/checkout-details");
  };
  return (
    <div className="cart-second">
      {/* <div className="error">
        <img src={Error} alt="#" />
        <span> Your Cart is Up-to-date</span>
      </div> */}
      <div className="sub-total">
        <div className="main">
          <div className="sub">
            <h6>Subtotal</h6>
            <h5>{formatMoney(subTotal)}</h5>
          </div>
          <div className="sub">
            <h6>Number of Items</h6>
            <h5>{numberOfItems}</h5>
          </div>
          <div className="sub">
            <h6>Shipping fee</h6>
            <h5>{formatMoney(totalShippingFee)}</h5>
          </div>
        </div>

        <div className="attach">
          <h6>Order Total</h6>
          <h5>{formatMoney(total)}</h5>
        </div>
        <div className="all-button">
          <AppButton
            buttonText="PROCEED TO CHECKOUT"
            classname="check"
            onClick={checkoutPage}
          />
          <AppButton buttonText="CHECKOUT AS GUEST" classname="check" />
        </div>
      </div>
    </div>
  );
}

export default CartSecond;
