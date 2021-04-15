import React, { useState } from "react";
import "./index.scss";
import { Form } from "reactstrap";
import AuthInput from "../../components/AuthInput";
import AppButton from "../../components/AppButton";
import AppLogo from "../../components/AppLogo";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import { useHistory, useParams } from "react-router-dom";
import useAuthentication from "../../stores/useAuthentication";
import Notify from "../../util/Notify";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";

function ResetPassword() {
  const history = useHistory();
  /**
   * @type {{id:string}}
   */
  const { id } = useParams();

  const { resetPassword, resetPasswordLoading } = useAuthentication();
  const [passwordVisible, setpasswordVisible] = useState(false);
  const [confirmpasswordVisible, setconfirmpasswordVisible] = useState(false);
  const [userReset, setNewPassword] = React.useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = async (e) => {
    setNewPassword({ ...userReset, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userReset.password !== userReset.confirmPassword) {
      Notify.error("Confirm password must be same as Password");
      return;
    }

    const payload = {
      id,
      password: userReset.password,
    };

    resetPassword(payload, () => history.push("/login"));
  };
  return (
    <div className="reset-password-page">
      <AppLogo />
      <Form onSubmit={handleSubmit}>
        <h4>Reset Password</h4>
        <AuthInput
          inputText="Password"
          type={`${passwordVisible === true ? "text" : "password"}`}
          id="password"
          name="password"
          value={userReset.password}
          onChange={handleChange}
          onIconClick={() => setpasswordVisible(!passwordVisible)}
          Icon={
            passwordVisible === true ? (
              <VisibilityIcon />
            ) : (
              <VisibilityOffIcon />
            )
          }
          required
        />
        <AuthInput
          inputText="Confirm Password"
          type={`${confirmpasswordVisible === true ? "text" : "password"}`}
          id="confirmPassword"
          name="confirmPassword"
          value={userReset.confirmPassword}
          onChange={handleChange}
          onIconClick={() => setconfirmpasswordVisible(!confirmpasswordVisible)}
          Icon={
            confirmpasswordVisible === true ? (
              <VisibilityIcon />
            ) : (
              <VisibilityOffIcon />
            )
          }
          required
        />
        <div className="app-button">
          <AppButton
            buttonText="Reset Password"
            classname="reset-button"
            disabled={resetPasswordLoading}
          />
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
