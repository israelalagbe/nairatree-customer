import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Form } from "reactstrap";
import AuthInput from "../../components/AuthInput";
import { Link, useHistory } from "react-router-dom";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import AppLogo from "../../components/AppLogo";
import AppButton from "../../components/AppButton";
import error from "../../img/error.png";
import "./index.scss";
import useAuthentication from "../../stores/useAuthentication";

function ForgotPassword() {
  const history = useHistory();
  const { forgotPassword, forgotPasswordLoading } = useAuthentication();

  const [password, setNewPassword] = React.useState({
    email: "",
  });

  const handleChange = async (e) => {
    setNewPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: password.email,
    };

    forgotPassword(payload, () => history.push("/confirm-otp"));
  };

  return (
    <div className="forgot-password-page">
      <AppLogo />
      <div className="go-back">
        <ArrowBackIcon />
        <Link to="/login"> Login</Link>
      </div>
      <div className="forgot">
        <Form onSubmit={handleSubmit}>
          <h4>Please enter your email</h4>
          <AuthInput
            inputText="yourname@email.com"
            type="email"
            id="email"
            name="email"
            value={password.email}
            onChange={handleChange}
            required
          />

          {/* <div className="errorDiv">
            <img src={error} alt="error" />
            <p> Email does not exist, Give it another shot!</p>
          </div> */}
          <div className="app-button">
            <AppButton disabled={forgotPasswordLoading} buttonText="Reset Password" classname="forgot-button" />
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
