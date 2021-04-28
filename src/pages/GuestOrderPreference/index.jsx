import React, { useState } from "react";
import AppLogo from "../../components/AppLogo";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import { Form, Input, FormGroup } from "reactstrap";
import AppButton from "../../components/AppButton";
import "./index.scss";
import useOrderStore from "../../stores/useOrderStore";

function GuestOrderPreference() {
  const history = useHistory();
  const [reference, setOrderReference] = useState('');

  const {  fetchOrderByRef } = useOrderStore();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetchOrderByRef(reference, () => {
      history.push(`/guest/orders/order-details/${reference}`)
    });
  };

  return (
    <div className="guest-order-preference">
      <AppLogo />
      <div className="go-back" onClick={history.goBack}>
        <ArrowBackIcon />
        <h6>Back</h6>
      </div>
      <div className="guest-order-preference-form">
        <div className="main-guest-order-preference">
          <h3>Enter Order Reference</h3>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                value={reference}
                onChange={(e) => setOrderReference(e.target.value)}
                type="text"
                placeholder=""
                required
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
