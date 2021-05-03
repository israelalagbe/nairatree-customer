import React from "react";
import AppLogo from "../../components/AppLogo";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./index.scss";

function VendorGuide() {
  const history = useHistory();
  return (
    <div className="vendor-guide">
      <AppLogo />
      <div className="vendor-first">
        <div className="go-back" onClick={history.goBack}>
          <ArrowBackIcon />
          <h6>Back</h6>
        </div>
        <div className="mt-5 main-vendor">
          <h3>Vendor Guide</h3>

          <p>
            You can become a vendor on NairaTree. To know more, contact our
            customer care service through any of the above listed channels.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VendorGuide;
