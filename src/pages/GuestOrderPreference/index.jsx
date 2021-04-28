import React from "react";
import AppLogo from "../../components/AppLogo";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import { Form, Input, FormGroup } from "reactstrap";
import AppButton from "../../components/AppButton";
import "./index.scss";

function GuestOrderPreference() {
  const history = useHistory();
  return (
    <div className="guest-order-preference">
      <AppLogo />
      <div className="go-back" onClick={history.goBack}>
        <ArrowBackIcon />
        <h6>Back</h6>
      </div>
      <div className="guest-order-preference-form">
        <div className="main-guest-order-preference">
          <h3>Enter Order Preference</h3>
          <Form>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <AppButton
              buttonText="Submit"
              classname="guest-order-preference-button"
            />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default GuestOrderPreference;
