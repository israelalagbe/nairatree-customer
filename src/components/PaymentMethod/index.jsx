import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import AppButton from "../AppButton";
import lock from "../../img/lock.png";
import "./index.scss";

function PaymentMethod() {
  return (
    <div className="payment-method">
      <Form>
        <div className="payment-form">
          <div className='input-container'>
            <FormGroup>
              <Label for="fullName">Card Number</Label>
              <Input
                type="text"
                name="cardNumber"
                id="cardNumber"
                placeholder="5396 **** **** ****"
              />
            </FormGroup>
            <div className="details">
              <FormGroup className="mr-5">
                <Label for="fullName">Exp. Date</Label>
                <Input type="text" name="fullName" id="fullName" placeholder="10  /  21" />
              </FormGroup>
              <FormGroup>
                <Label for="fullName">CVV</Label>
                <Input type="text" name="fullName" id="fullName" placeholder="123" />
              </FormGroup>
            </div>
          </div>
          <div className="buttons">
            <AppButton buttonText="SAVE CARD & PAY" classname="all" />
            <AppButton buttonText="PAY WITHOUT SAVING CARD" classname="all" />
          </div>
        </div>
      </Form>
      <div className="paystack">
        <img src={lock} alt="lock" />
        <p>Payment secured by Paystack</p>
      </div>
    </div>
  );
}

export default PaymentMethod;
