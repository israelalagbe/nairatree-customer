import React from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";
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
import useAuthentication from "../../../stores/useAuthentication";

function UpdateProfile() {
  const { user } = useAuthentication();
  const history = useHistory();
  const { updateUser, updateUserLoading } = useAuthentication();
  const [userDetails, updateUserDetails] = React.useState({
    phone: "",
    first_name: "",
    surname: "",
  });

  const handleChange = async (e) => {
    updateUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      phone: `+234${userDetails.phone}`,
      first_name: userDetails.first_name,
      surname: userDetails.surname,
    };
    updateUser(payload, () => history.push("/profile"));
  };

  return (
    <div className="update-profile">
      <h3>UPDATE PROFILE</h3>
      <div className="update-form">
        <Form className="update-main" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">First Name</Label>
            <Input
              type="text"
              name="first_name"
              id="first_name"
              placeholder={user.first_name}
              value={userDetails.first_name}
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
              placeholder={user.surname}
              value={userDetails.surname}
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
                placeholder={user.phone}
                type="number"
                id="phone"
                name="phone"
                value={userDetails.phone}
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
  );
}

export default UpdateProfile;
