import React from "react";
import AppLogo from "../../components/AppLogo";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./index.scss";

function OurServices() {
  const history = useHistory();
  return (
    <div className="our-services">
      <AppLogo />
      <div className="services-first">
        <div className="go-back" onClick={history.goBack}>
          <ArrowBackIcon />
          <h6>Back</h6>
        </div>
        <div className="mt-5 main-services">
          <h3>Our Services</h3>

          <div>
            <h4>NairaTree Repairs</h4>
            <p>
              NairaTree offers a service in repair and fixing of gadgets and
              computers- from Android phones, to iPhones, to Windows PC and
              MacBook.
            </p>
            <p>
              You can learn more about this service by contacting us via email,
              the web chat, Whatsapp or Phone Call.
            </p>
          </div>

          <div>
            <h4>Procurement Services</h4>
            <p>
              NairaTree also offers a procurement service through our junior
              companies Yankee2Naija and YankeeShops.
            </p>
            <p>
              To know more about these services, please contact Yankee2Naija via
              Twitter (@Yankee2Naija) and Yankeeshops via Twitter
              (@YourYankeeShops).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
