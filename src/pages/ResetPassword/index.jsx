import React from "react";
import "./index.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Form, FormGroup, Input } from "reactstrap";
import AppButton from "../../components/AppButton";
import AppLogo from "../../components/AppLogo";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";

function ResetPassword() {
  return (
    <div className="reset-password-page">
      <AppLogo />
      <div className="go-back">
        <ArrowBackIcon />
        Login
      </div>
      <Form>
        <h4>Reset Password</h4>
        <FormGroup>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="New Password"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Confirm Password"
          />
        </FormGroup>
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
