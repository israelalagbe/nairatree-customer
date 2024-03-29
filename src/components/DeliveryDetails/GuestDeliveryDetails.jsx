import React from "react";
import AppButton from "../AppButton";
import "./index.scss";
import useCartStore from "../../stores/useCartStore";
import formatMoney from "../../util/formatMoney";
import { useHistory, useLocation } from "react-router-dom";

/**
 * @param {object} props
 * @param {()=>void} props.onNext
 */
function GuestDeliveryDetails({ onNext }) {
  const location = useLocation();
  const history = useHistory();

  const { carts } = useCartStore();

  const numberOfItems = carts.reduce((count, cart) => cart.quantity + count, 0);

  const subTotal = carts.reduce(
    (price, cart) =>
      cart.product.price * cart.quantity +
      price +
      cart.product.shipment_fees[0].fee,
    0
  );

  const totalShippingFee = carts.reduce(
    (price, cart) => cart.product.shipment_fees[0].fee + price,
    0
  );

  const total = totalShippingFee + subTotal;

  // @ts-ignore
  const defaultAddress = location.state?.address ?? {};

  return (
    <>
      {/* <AddressBookModal
        show={addressModal.isOpen}
        onClose={addressModal.close}
      /> */}
      <div className="delivery-details">
        <div className="delivery-details-first">
          <div className="delivery-details-head">
            <h5>ADDRESS</h5>
            <h6 onClick={() => history.push("/guest-checkout-address")}>
              CHANGE ADDRESS
            </h6>
          </div>
          {defaultAddress ? (
            <div className="details">
              <h6>{defaultAddress.name}</h6>
              <h6>{defaultAddress.address}</h6>
              <h6>
                {defaultAddress.city} ,{defaultAddress.country}
              </h6>
              <h6>{defaultAddress.phone}</h6>
            </div>
          ) : null}

          <div className="shipping">
            <h4>SHIPMENT DETAILS</h4>
            <h5>TOTAL ITEM NO: {numberOfItems}</h5>
            {carts.map((cart) => {
              const variant = cart.product.variants.find(
                (variant) => String(variant.variant_id) === String(cart.variant)
              );

              return (
                <h6>
                  {cart.product.name} (
                  {variant ? (
                    <big className="capitalize">{variant.color}</big>
                  ) : null}
                  {cart.product.features.join(" ")})
                </h6>
              );
            })}

            {/* <h6>Sold by: Veral Stores</h6> */}
            <h6>
              Delivered between <span>Monday 12 Jan and Friday 17 Jan</span>
            </h6>
          </div>
          <div className="subtotal">
            <div className="first">
              <h5>Items Sub-total</h5>
              <h6>{formatMoney(subTotal)}</h6>
            </div>
            <div className="first">
              <h5>Shipping Fees</h5>
              <h6>{formatMoney(totalShippingFee)}</h6>
            </div>
          </div>
          <div className="total mt-4">
            <h5>Total</h5>
            <h6>{formatMoney(total)}</h6>
          </div>
        </div>

        <AppButton buttonText="Next" classname="next-button" onClick={onNext} />
      </div>
    </>
  );
}

export default GuestDeliveryDetails;
