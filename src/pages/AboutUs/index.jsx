import React from "react";
import AppLogo from "../../components/AppLogo";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./index.scss";

function AboutUs() {
  const history = useHistory();
  return (
    <div className="about-us">
      <AppLogo />
      <div className="about-first">
        <div className="go-back" onClick={history.goBack}>
          <ArrowBackIcon />
          <h6>Back</h6>
        </div>
        <div className="mt-5 main-about">
          <h3>About us</h3>

          <p>
            NairaTree is a newly starting eComemrce platform currently operating
            in Nigeria only. Our first branch is located at Lekki, Lagos State.
          </p>
          <p>
            We are focused on delivering quality goods to our esteemed customers
            in the fastest time possible.
          </p>
          <p>
            Our target is to create an excellent reputation among our customers,
            as well as deliver value on moneypaid to us.
          </p>
          <p>
            We look forward to being an indispensable go-to platorm in the
            Nigerian eCommerce space in the nearest future
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
