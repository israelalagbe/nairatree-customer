import React from "react";
import { Form } from "reactstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, useHistory } from "react-router-dom";
import "./index.scss";
import AppLogo from "../../components/AppLogo";
import AuthInput from "../../components/AuthInput";
import AppButton from "../../components/AppButton";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import boy from "../../img/boy.png";
import avatar from "../../img/avatar.png";
import lock from "../../img/lock.png";

function Login() {
  const history = useHistory();
  return (
    <div className="login-page">
      <div className="first">
        <AppLogo />
        <div className="inner">
          <div className="go-back">
            <ArrowBackIcon onClick={()=>history.push('/')}/>
            <Link to="/"> Market</Link>
          </div>
          <div className="inner-2">
            <Form>
              <h4>Login</h4>
              <AuthInput img={avatar} inputText="Name" />
              
              <AuthInput img={lock} inputText="Password" />
              <div className="app-button">
                <AppButton
                  buttonText="Login to naira tree"
                  classname="login-button"
                />
              </div>
            </Form>
            <div className="new-forgot">
              <p>
                I'm new to NairaTree,&nbsp;
                <Link to="/register">Create an account.</Link>
              </p>
              <p>
                I already forgot my password,
                <Link to="/reset-password"> Let me reset.</Link>
              </p>
            </div>
          </div>
        </div>

        <Copyright />
        <Footer />
      </div>
      <div className="second">
        <h4>
          New Arrivals, <br />
          <span> Shop and get the best Deals</span>
        </h4>
        <img src={boy} alt="boy" />
      </div>
    </div>
  );
}

export default Login;
