import React from "react";
import "./index.scss";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";
import useAuthentication from "../../../stores/useAuthentication";

function ShippingAddress() {
  const { user } = useAuthentication();
  const addresses = user?.address_book;
  return (
    <div className="shipping-address">
      <div className="main-shipping">
        <div className="mainShippingContent">
          <div className="ship-1">
            <h5>Address Book</h5>
          </div>
          <Link to="/address-information" className="ship-2">
            <h5>Add New Address Book</h5>
            <CreateIcon />
          </Link>
        </div>

        {addresses.map((item) => (
          <div className="allBelow">
            <div>
              <h3>{item.name}</h3>

              <h6>{item.address}</h6>
              <h6>
                {item.city},{item.country}
              </h6>
              <h6 className="mt-3">{item.phone}</h6>
            </div>
            <div>
              {item.is_default === true ? <h5>Default Address</h5> : ""}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="main-shipping">
        <div className="mainShippingContent">
          <div className="ship-1">
            <h5>Payment Details</h5>
          </div>
          <div className="ship-2">
            <h5>Add New Payment</h5>
            <AddCircleOutlineIcon />
          </div>
        </div>
        <div className="allBelow">
          <div>
            <h6>Olanlekan Ayomide</h6>
            <h6>03234*****</h6>
            <h6>GT BANK</h6>
          </div>
          <div>
            <h5>Default</h5>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ShippingAddress;
