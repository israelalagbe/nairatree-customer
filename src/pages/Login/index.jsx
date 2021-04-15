import React from "react";
import { Form } from "reactstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./index.scss";
import AppLogo from "../../components/AppLogo";
import AuthInput from "../../components/AuthInput";
import AppButton from "../../components/AppButton";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import boy from "../../img/boy.png";
import avatar from "../../img/avatar.png";
import lock from "../../img/lock.png";
import useAuthentication from "../../stores/useAuthentication";

import getQueryParams from "../../util/getQueryParams";

function Login() {
  const history = useHistory();
  const location = useLocation()

  const qParam = getQueryParams(location.search)


  const { login, loginLoading } = useAuthentication();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = async (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: user.email,
      password: user.password,
    };
    login(payload, () => history.push(qParam.redirect_to ? qParam.redirect_to: "/"));
  };

  return (
    <div className="login-page">
      <div className="first">
        <AppLogo />
        <div className="inner">
          <div className="go-back">
            <ArrowBackIcon onClick={() => history.push("/")} />
            <Link to="/"> Market</Link>
          </div>
          <div className="inner-2">
            <Form onSubmit={handleSubmit}>
              <h4>Login</h4>

              <AuthInput
                img={avatar}
                inputText="Email"
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />

              <AuthInput
                img={lock}
                inputText="Password"
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
              <div className="app-button">
                <AppButton
                  disabled={loginLoading}
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
                <Link to="/forgot-password"> Let me reset.</Link>
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
