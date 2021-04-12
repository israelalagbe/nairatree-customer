import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./index.scss";
import AppLogo from "../../components/AppLogo";
import AuthInput from "../../components/AuthInput";
import AppButton from "../../components/AppButton";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import girl from "../../img/girl.png";
import avatar from "../../img/avatar.png";
import mail from "../../img/mail.png";
import lock from "../../img/lock.png";
import { Link, useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();
  return (
    <div className="register-page">
      <div className="first">
        <AppLogo />
        <div className="inner">
          <div className="go-back">
            <ArrowBackIcon onClick={() => history.push("/")} />
            <Link to="/"> Market</Link>
          </div>
          <div className="inner-2">
            <Form>
              <h4>Create an account</h4>
              <AuthInput img={avatar} inputText="Name" />
              <AuthInput
                img={mail}
                inputText="Email"
                errorMessage="Enter correct email address"
              />

              <AuthInput img={lock} inputText="Password" />

              <AuthInput
                img={lock}
                inputText="Confirm Password"
                errorMessage="Enter the same password"
              />
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> I agree with the
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </Label>
              </FormGroup>
              <div className="app-button">
                <AppButton
                  buttonText="Create Account"
                  classname="register-button"
                />
              </div>
            </Form>
            <p>
              I have an account already,<Link to="/login"> Login Here</Link>
            </p>

            <div className="mt-5">
              <Copyright />
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <div className="second">
        <h4>
          Get your account setup in few
          <br /> <span>minutes, to enjoy unbeatable quality</span>
          <br />
          products from popular stores
        </h4>

        <img src={girl} alt="girl" />
      </div>
    </div>
  );
}

export default Register;
