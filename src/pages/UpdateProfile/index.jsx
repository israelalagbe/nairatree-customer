import React from "react";
import AppLogo from "../../components/AppLogo";
import "./index.scss";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  Form,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import AppButton from "../../components/AppButton";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import useAuthentication from "../../stores/useAuthentication";

function UpdateProfile() {
  const history = useHistory();
  const { updateUser, updateUserLoading } = useAuthentication();

  const [user, updateUserDetails] = React.useState({
    phone: "",
    first_name: "",
    surname: "",
  });

  const handleChange = async (e) => {
    updateUserDetails({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      phone: `+234${user.phone}`,
      first_name: user.first_name,
      surname: user.surname,
    };

    updateUser(payload, () => history.push("/profile"));
  };

  return (
    <>
      <div className="update-profile">
        <AppLogo />
        <div className="go-back">
          <ArrowBackIcon />
          <Link to="/profile"> Profile</Link>
        </div>
        <div className="update-form">
          <Form className="update-main" onSubmit={handleSubmit}>
            <h3>UPDATE PROFILE</h3>

            <FormGroup>
              <Label for="name">First Name</Label>
              <Input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Adekola Diekola"
                value={user.first_name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="name">Surname</Label>
              <Input
                type="text"
                name="surname"
                id="surname"
                placeholder="Adekola Diekola"
                value={user.surname}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="mobilePhone">Mobile Phone Number</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>+234</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="8082269035"
                  type="number"
                  id="phone"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </FormGroup>

            <div className="update-buttons">
              <AppButton
                buttonText="SAVE & CONTINUE"
                classname="continue"
                disabled={updateUserLoading}
              />
            </div>
          </Form>
        </div>
      </div>
      <div className="update-bottom">
        <Copyright />
        <Footer />
      </div>
    </>
  );
}

export default UpdateProfile;
