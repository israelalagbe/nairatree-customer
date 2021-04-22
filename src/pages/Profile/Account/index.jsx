import React from "react";
import "./index.scss";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";
import useAuthentication from "../../../stores/useAuthentication";

function Account() {
  const { user } = useAuthentication();
  const defaultAddress = user.address_book.find(
    (item) => item.is_default === true
  );

  return (
    <div className="account">
      <h3>Account Overview</h3>
      <div className="content">
        <div>
          <h3>Account Details</h3>

          <h5>
            {user.surname} {user.first_name}
          </h5>
          <h4>{user.email}</h4>
          <h4>{user.phone}</h4>

          <Link to="/profile/change-password">CHANGE PASSWORD</Link>
        </div>
        <Link to="/profile/update-profile">
          <CreateIcon />
        </Link>
      </div>
      <div className="content">
        <div>
          <h3>Address Book</h3>
          <h5>Your default shipping address:</h5>
          <h4>{defaultAddress.name}</h4>
          <h4>{defaultAddress.address}</h4>
          <h4>
            {defaultAddress.city} ,{defaultAddress.country}
          </h4>
          <h4>{defaultAddress.phone}</h4>
        </div>
        <Link to="/profile/addressbook/new-address">
          <CreateIcon />
        </Link>
      </div>
      {/* <div className="content">
        <div>
          <h3>Transaction Summary</h3>
          <h6>No Orders in progress</h6>
        </div>
        <div>
          <Link to="/">View details</Link>
        </div>
      </div> */}
    </div>
  );
}

export default Account;
