import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Form } from "reactstrap";
import AppInput from "../../components/AppInput";
import { Link } from "react-router-dom";
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
      <div className="go-back">
        <ArrowBackIcon />
        <Link to="/login"> Login</Link>
      </div>
      <div className="forgot">
        <Form>
          <h4>Please enter your email</h4>
          <AppInput inputText="yourname@email.com" />

          <div className="errorDiv">
            <img src={error} alt="error" />
            <p> Email does not exist, Give it another shot!</p>
          </div>
          <div className="app-button">
            <AppButton buttonText="Reset Password" classname="forgot-button" />
          </div>
        </Form>
        <p>
          I can't remember my email,
          <Link to="/register"> Create a new account</Link>
        </p>
      </div>
      <div className="bottom">
        <Copyright />
        <Footer />
      </div>
    </div>
  );
}

export default ForgotPassword;
