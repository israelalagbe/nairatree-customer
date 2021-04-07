import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AppLogo from "../../components/AppLogo";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import "./index.scss";

function RegistrationDecision() {
  return (
    <div className="registration-decision-page">
      <AppLogo />
      <div className="first">
        <div className="go-back">
          <ArrowBackIcon />
          <Link to="/"> Market</Link>
        </div>
        <div className="how-do">
          <h4>How do you want to register?</h4>
          <div className="tap">
            <div className="first">
              <Link to="/login">I want to shop and buy</Link>
            </div>
            <div className="second">
              <Link to="/login">I want to become a vendor</Link>
            </div>
          </div>
          <p>
            I have an account already,<Link to="/login"> Login Here</Link>
          </p>
        </div>
        <div className="bottom">
          <Copyright />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default RegistrationDecision;
