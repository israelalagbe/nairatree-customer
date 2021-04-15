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
import useAuthentication from "../../stores/useAuthentication";
import Notify from "../../util/Notify";

function Register() {
  const history = useHistory();
  const { register, registerLoading } = useAuthentication();
  const [registeration, setRegisteration] = React.useState({
    first_name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [acceptPrivacyPolicy, setAcceptedPrivacyPolicy] = React.useState(false);

  const toggle = () => {
    setAcceptedPrivacyPolicy(!acceptPrivacyPolicy);
  };

  const handleChange = async (e) => {
    setRegisteration({ ...registeration, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (registeration.password !== registeration.confirmPassword) {
      Notify.error("Confirm password must be same as Password");
      return;
    }
    const payload = {
      first_name: registeration.first_name,
      surname: registeration.surname,
      email: registeration.email,
      phone: registeration.phone,
      password: registeration.password,
    };

    register(payload, () => history.push("/login"));
  };

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
            <Form onSubmit={handleSubmit}>
              <h4>Create an account</h4>
              <AuthInput
                img={avatar}
                inputText="First Name"
                type="first_name"
                id="first_name"
                name="first_name"
                value={registeration.first_name}
                onChange={handleChange}
                required
              />
              <AuthInput
                img={avatar}
                inputText="Last Name"
                type="surname"
                id="surname"
                name="surname"
                value={registeration.surname}
                onChange={handleChange}
                required
              />
              <AuthInput
                img={mail}
                inputText="Email"
                errorMessage="Enter correct email address"
                type="email"
                id="email"
                name="email"
                value={registeration.email}
                onChange={handleChange}
                required
              />
              <AuthInput
                img={mail}
                inputText="Phone Number"
                type="number"
                id="phone"
                name="phone"
                value={registeration.phone}
                onChange={handleChange}
                required
              />

              <AuthInput
                img={lock}
                inputText="Password"
                type="password"
                id="password"
                name="password"
                value={registeration.password}
                onChange={handleChange}
                required
              />

              <AuthInput
                img={lock}
                inputText="Confirm Password"
                errorMessage="Enter the same password"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={registeration.confirmPassword}
                onChange={handleChange}
                required
              />
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />I agree with the
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
