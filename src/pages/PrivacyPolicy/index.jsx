import React from "react";
import AppLogo from "../../components/AppLogo";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./index.scss";

function PrivacyPolicy() {
  const history = useHistory();
  return (
    <div className="privacy-policy">
      <AppLogo />
      <div className="privacy-first">
        <div className="go-back" onClick={history.goBack}>
          <ArrowBackIcon />
          <h6>Back</h6>
        </div>
        <div className="mt-5">
          <h3>Privacy Policy</h3>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
