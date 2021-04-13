import React from "react";
import "./index.scss";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

function ShippingAddress() {
  return (
    <div className="shipping-address">
      <div className="main-shipping">
        <div className="ship-1">
          <h5>Shipping Address</h5>
          <div>
            <h6>ADEYEMO QUDUS</h6>
            <h6>Yetunde Brown, Gbagada</h6>
            <h6>Lagos, Nigeria</h6>
            <h6>+2348100571955</h6>
          </div>
        </div>
        <div className="ship-2">
          <h5>Shipping Address</h5>
          <AddCircleOutlineIcon />
        </div>
      </div>
      <div className="main-shipping">
        <div className="ship-1">
          <h5>Payment Details</h5>
          <div>
            <h6>Olanlekan Ayomide</h6>
            <h6>03234*****</h6>
            <h6>GT BANK</h6>
          </div>
        </div>
        <div className="ship-2">
          <h5>Add New Payment</h5>
          <AddCircleOutlineIcon />
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress;
