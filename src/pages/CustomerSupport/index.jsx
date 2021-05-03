import React from "react";
import AppLogo from "../../components/AppLogo";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./index.scss";

function CustomerSupport() {
  const history = useHistory();
  return (
    <div className="customer-support">
      <AppLogo />
      <div className="customer-first">
        <div className="go-back" onClick={history.goBack}>
          <ArrowBackIcon />
          <h6>Back</h6>
        </div>
        <div className="mt-5 main-customer">
          <h3>Customer Support</h3>

          <p>
            Our customer care support is available to attend to your enquiries
            between hours of 9am and 5pm daily via any of the following channels
          </p>
          <p> – Twitter, Facebook, Instagram, WebChat, Whatsapp and Phone.</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerSupport;
