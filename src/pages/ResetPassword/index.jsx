import React from "react";
import "./index.scss";
import { Form, FormGroup, Input } from "reactstrap";
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
        <AppButton buttonText="Reset Password" classname="reset-button" />
      </Form>
      <div className="bottom">
        <Copyright />
        <Footer />
      </div>
    </div>
  );
}

export default ResetPassword;
