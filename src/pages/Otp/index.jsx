import React from "react";
import "./index.scss";
import { Form } from "reactstrap";
import AuthInput from "../../components/AuthInput";
import AppButton from "../../components/AppButton";
import AppLogo from "../../components/AppLogo";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import "./index.scss";
import { useHistory } from "react-router-dom";
import useAuthentication from "../../stores/useAuthentication";

function Otp() {
  const history = useHistory();
  const { verifyOtp, verifyOtpLoading } = useAuthentication();
  const [otp, setNewOtp] = React.useState({
    code: "",
  });

  const handleChange = async (e) => {
    setNewOtp({ ...otp, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      code: otp.code,
    };

    verifyOtp(payload, () => history.push("/reset-password"));

    console.log(payload);
  };

  return (
    <div className="otp-page">
      <AppLogo />

      <Form onSubmit={handleSubmit}>
        <h4>OTP</h4>
        <AuthInput
          inputText="OTP"
          type="text"
          id="code"
          name="code"
          value={otp.code}
          onChange={handleChange}
          required
        />
        <div className="app-button">
          <AppButton buttonText="Confirm Otp" classname="otp-button" />
        </div>
      </Form>
      <div className="bottom">
        <Copyright />
        <Footer />
      </div>
    </div>
  );
}

export default Otp;