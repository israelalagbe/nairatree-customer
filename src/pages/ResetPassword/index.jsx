import React from "react";
import "./index.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Form } from "reactstrap";
import AuthInput from "../../components/AuthInput";
import AppButton from "../../components/AppButton";
import AppLogo from "../../components/AppLogo";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";

function ResetPassword() {
  return (
    <div className="reset-password-page">
      <AppLogo />
      <Form>
        <h4>Reset Password</h4>
        <AuthInput inputText="New Password" />
        <AuthInput inputText="Confirm Password" />

        <div className="app-button">
          <AppButton buttonText="Reset Password" classname="reset-button" />
        </div>
      </Form>
      <div className="bottom">
        <Copyright />
        <Footer />
      </div>
    </div>
  );
}

export default ResetPassword;
