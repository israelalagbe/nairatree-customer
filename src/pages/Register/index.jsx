import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./index.scss";
import AppLogo from "../../components/AppLogo";
import AppInput from "../../components/AppInput";
import AppButton from "../../components/AppButton";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import girl from "../../img/girl.png";
import avatar from "../../img/avatar.png";
import mail from "../../img/mail.png";
import lock from "../../img/lock.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-page">
      <div className="first">
        <AppLogo />
        <div className="inner">
          <div className="go-back">
            <ArrowBackIcon />
            Market
          </div>
          <div className="inner-2">
            <Form>
              <h4>Create an account</h4>
              <AppInput img={avatar} inputText="Name" />
              <AppInput img={mail} inputText="Email" />
              <AppInput img={lock} inputText="Password" />
              <AppInput img={lock} inputText="Confirm Password" />
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> I agree with the
                  <Link to="/">Privacy Policy</Link>
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
              I have an account already,<Link to="/"> Login Here</Link>
            </p>
            <Copyright />
            <Footer />
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
        <div className="girl-img">
          <img src={girl} alt="girl" />
        </div>
      </div>
    </div>
  );
}

export default Register;
