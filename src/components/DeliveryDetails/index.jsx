import React from "react";
import AppButton from "../AppButton";
import "./index.scss";
import AddressBookModal from "../Modals/AddressBook";
import useModal from "../../hooks/useModal";

function DeliveryDetails() {
  const addressModal = useModal(false);
  return (
    <>
      <AddressBookModal
        show={addressModal.isOpen}
        onClose={addressModal.close}
      />
      <div className="delivery-details">
        <div className="delivery-details-first">
          <div className="delivery-details-head">
            <h5>ADDRESS</h5>
            <h6 onClick={addressModal.open}>CHANGE ADDRESS</h6>
          </div>
          <div className="details">
            <h6>Adekola Diekola</h6>
            <h6>No 3, Adekola Close</h6>
            <h6>Lekki Ajah - Lagos</h6>
            <h6>+2349080800080</h6>
          </div>
          <div className="shipping">
            <h4>SHIPMENT DETAILS</h4>
            <h5>TOTAL ITEM NO: 3</h5>
            <h6>1x Iphone 12 (Matte Red)</h6>
            <h6>2x Iphone 11 Pro Max (128GB, 4GB, White)</h6>
            <h6>Sold by: Veral Stores</h6>
            <h6>
              Delivered between <span>Monday 12 Jan and Friday 17 Jan</span>
            </h6>
          </div>
          <div className="subtotal">
            <div className="first">
              <h5>Items Sub-total</h5>
              <h6>₦ 150,999</h6>
            </div>
            <div className="first">
              <h5>Shipping Fees</h5>
              <h6>₦ 1,999</h6>
            </div>
          </div>
          <div className="total mt-4">
            <h5>Total</h5>
            <h6>₦ 151,999</h6>
          </div>
        </div>

        <AppButton buttonText="Next" classname="next-button" />
      </div>
    </>
  );
}

export default DeliveryDetails;
