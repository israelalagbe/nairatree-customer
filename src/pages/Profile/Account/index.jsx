import React from "react";
import "./index.scss";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";
import useAuthentication from "../../../stores/useAuthentication";

function Account() {
  const { user } = useAuthentication();
  return (
    <div className="account">
      <div className="content">
        <div>
          <h3>Account Overview</h3>
          <h4>{user.email}</h4>
          <h4>{user.phone}</h4>
          <h5>
            {user.surname} {user.first_name}
          </h5>
        </div>
        <div>
          <CreateIcon />
        </div>
      </div>
      <div className="content">
        <div>
          <h3>Transaction Summary</h3>
          <h6>No Orders in progress</h6>
        </div>
        <div>
          <Link to="/">View details</Link>
        </div>
      </div>
      <div className="bt">
        <h3 className="mb-3">Address Book</h3>
        <div className="content-bt">
          <div>
            <h6>ADEYEMO QUDUS</h6>
            <h6>Yetunde Brown, Gbagada</h6>
            <h6>Lagos, Nigeria</h6>
            <h6>+2348100571955</h6>
          </div>
          <div>
            <h3 className="default">Default</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
