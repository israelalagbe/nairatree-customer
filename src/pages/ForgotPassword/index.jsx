import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Form, FormGroup, Input } from "reactstrap";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import AppLogo from "../../components/AppLogo";
import AppButton from "../../components/AppButton";
import error from "../../img/error.png";
import "./index.scss";

function ForgotPassword() {
  return (
    <div className="forgot-password-page">
      <AppLogo />
      <div>
        <ArrowBackIcon />
        Login
      </div>
      <Form>
        <h4>Please enter your email</h4>
        <FormGroup>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="yourname@email.com"
          />
        </FormGroup>
        <div>
          <img src={error} alt="error" />
          Email does not exist, Give it another shot!
        </div>
        <AppButton buttonText="Reset Password" classname="forgot-button" />
      </Form>
      <p>I can't remember my email, Create a new account</p>
      <div className="bottom">
        <Copyright />
        <Footer />
      </div>
    </div>
  );
}

export default ForgotPassword;
