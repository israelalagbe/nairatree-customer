import React, { useEffect } from "react";
import AppLogo from "../../../components/AppLogo";
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
import AppButton from "../../../components/AppButton";
import Copyright from "../../../components/Copyright";
import Footer from "../../../components/Footer";
import useAuthentication from "../../../stores/useAuthentication";
import { Select } from "@material-ui/core";
import useLocationStore from "../../../stores/useLocation";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Notify from "../../../util/Notify";

function ChangePassword() {
  const history = useHistory();
  const { updateUserPassword, updateUserPasswordLoading } = useAuthentication();
  const [password, updatePassword] = React.useState({
    current_password: "",
    new_password: "",
    new_password_2: "",
  });

  const handleChange = async (e) => {
    updatePassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.new_password !== password.new_password_2) {
      Notify.error("New Password must be same as Re type Password");
      return;
    }
    const payload = {
      current_password: password.current_password,
      new_password: password.new_password,
    };
    updateUserPassword(payload, () => history.push("/profile"));
  };

  return (
    <div className="changePassword">
      <h3>Change Password</h3>
      <div className="changePasswordForm">
        <Form className="changePasswordMain" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="current_password">Current Password</Label>
            <InputGroup size="lg">
              <Input
                placeholder="*********"
                type="password"
                id="current_password"
                name="current_password"
                value={password.current_password}
                onChange={handleChange}
                required
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <VisibilityIcon />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <Label for="new_password">New Password</Label>
            <InputGroup size="lg">
              <Input
                placeholder="*********"
                type="password"
                id="new_password"
                name="new_password"
                value={password.new_password}
                onChange={handleChange}
                required
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <VisibilityIcon />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <Label for="new_password_2">Retype New Password</Label>
            <InputGroup size="lg">
              <Input
                placeholder="*********"
                type="password"
                id="new_password_2"
                name="new_password_2"
                value={password.new_password_2}
                onChange={handleChange}
                required
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <VisibilityIcon />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>

          <div className="changePasswordButton">
            <AppButton buttonText="SAVE & CONTINUE" classname="continue" />
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ChangePassword;
