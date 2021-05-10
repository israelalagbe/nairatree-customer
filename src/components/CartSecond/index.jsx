import React from "react";
import AppButton from "../AppButton";
import "./index.scss";
import { useHistory } from "react-router-dom";
import formatMoney from "../../util/formatMoney";
import useCartStore from "../../stores/useCartStore";
import useAuthentication from "../../stores/useAuthentication";

/**
 *
 * @param {object} props
 * @param {Cart[]} props.carts
 */
function CartSecond({ carts }) {
  const history = useHistory();

  const saveCarts = useCartStore((store) => store.saveCarts);

  const numberOfItems = carts.reduce((count, cart) => cart.quantity + count, 0);

  const subTotal = carts.reduce((price, cart) => cart.product.price * cart.quantity + price, 0);

  const totalShippingFee = carts.reduce(
    (price, cart) => cart.product.shipment_fees[0].fee * cart.quantity + price,
    0
  );

  const { user } = useAuthentication();

  const total = totalShippingFee + subTotal;

  const checkoutPage = () => {
    const payload = carts.map((cart) => ({
      product: cart.product.id,
      quantity: cart.quantity,
      ...(cart.variant ? { variant: String(cart.variant) } : null),
    }));

    saveCarts(payload, () => history.push("/checkout-details"));
  };

  const guestCheckout = (e) => {
    history.push("/guest-checkout");
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
            disabled={!carts.length}
            buttonText="PROCEED TO CHECKOUT"
            classname="check"
            onClick={checkoutPage}
          />
          {!user ? (
            <AppButton
              disabled={!carts.length}
              onClick={guestCheckout}
              buttonText="CHECKOUT AS GUEST"
              classname="check"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CartSecond;
