import React from "react";
import { Form } from "reactstrap";
import AppButton from "../AppButton";
import lock from "../../img/lock.png";
import "./index.scss";

/**
 * @param {object} props
 * @param {(payload)=>void} props.onCheckout
 */
function PaymentMethod({ onCheckout }) {
  const [formData, setFormData] = React.useState({
    card_number: "",
    exp_date: "",
    cvv: "",
  });

  const [paymentMode, setPaymentMode] = React.useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckout({
      ...formData,
      paymentMode,
    });
  };

  return (
    <div className="payment-method">
      <Form onSubmit={handleSubmit}>
        <div className="payment-form">
          <div className="buttons">
            <AppButton
              type="submit"
              buttonText="PAY WITH CARD"
              classname="all"
            />
            {/* <AppButton onClick={() => setPaymentMode('no_save_card')} type="submit" buttonText="PAY WITHOUT SAVING CARD" classname="all" /> */}
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
