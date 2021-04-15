import React from "react";
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

function ResetPassword() {
  const history = useHistory();
  /**
   * @type {{id:string}}
   */
  const { id } = useParams();


  
  const { resetPassword, resetPasswordLoading } = useAuthentication();
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
          inputText="New Password"
          type="password"
          id="password"
          name="password"
          value={userReset.password}
          onChange={handleChange}
          required
        />
        <AuthInput
          inputText="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={userReset.confirmPassword}
          onChange={handleChange}
          required
        />
        <div className="app-button">
          <AppButton buttonText="Reset Password" classname="reset-button" disabled={resetPasswordLoading} />
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
