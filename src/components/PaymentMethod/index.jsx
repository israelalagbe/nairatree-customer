import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import AppButton from "../AppButton";
import lock from "../../img/lock.png";
import "./index.scss";

function PaymentMethod() {
  const [formData, setFormData] = React.useState({
    card_number: "",
    exp_date: "",
    cvv: "",
  });

  const [paymentMode, setPaymentMode] = React.useState(null);

  const handleChange = async (e) => {
    if(e.target.name ==='card_number' && !Number(e.target.value) && e.target.value!== '') return;

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(paymentMode)
  };

  return (
    <div className="payment-method">
      <Form onSubmit={handleSubmit}>
        <div className="payment-form">
          <div className="input-container">
            <FormGroup>
              <Label for="fullName">Card Number</Label>
              <Input
                onChange={handleChange}
                minLength={15}
                maxLength={16}
                type="text"
                name="card_number"
                placeholder="5396 **** **** ****"
                required
                value={formData.card_number}
              />
            </FormGroup>
            <div className="details">
              <FormGroup className="mr-5">
                <Label for="fullName">Exp. Date</Label>
                <Input
                  onChange={handleChange}
                  pattern="\d\d/\d\d"
                  type="text"
                  name="exp_date"
                  placeholder="10/21"
                  required
                  value={formData.exp_date}
                />
              </FormGroup>
              <FormGroup>
                <Label for="fullName">CVV</Label>
                <Input
                  onChange={handleChange}
                  pattern="\d\d\d"
                  type="text"
                  name="cvv"
                  placeholder="123"
                  required
                  value={formData.cvv}
                />
              </FormGroup>
            </div>
          </div>
          <div className="buttons">
            <AppButton onClick={() => setPaymentMode('save_card')} type="submit" buttonText="SAVE CARD & PAY" classname="all" />
            <AppButton onClick={() => setPaymentMode('no_save_card')} type="submit" buttonText="PAY WITHOUT SAVING CARD" classname="all" />
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
