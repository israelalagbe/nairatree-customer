import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AppLogo from "../../components/AppLogo";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import AppButton from "../../components/AppButton";
import { useHistory } from "react-router-dom";
import "./index.scss";

function RegistrationDecision() {
  const history = useHistory();
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
              <AppButton
                buttonText="I want to shop and buy"
                className="buyButton"
                onClick={() => history.push("/")}
              />
            </div>
            <div className="second">
              <AppButton
                buttonText="I want to become a vendor"
                className="buyButton"
                onClick={() => history.push("/vendor")}
              />
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
