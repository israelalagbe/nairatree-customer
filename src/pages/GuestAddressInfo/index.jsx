import React, { useEffect } from "react";

import "./index.scss";
import { Link, useHistory } from "react-router-dom";
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
import useAuthentication from "../../stores/useAuthentication";
import { Select } from "@material-ui/core";
import useLocationStore from "../../stores/useLocation";
import AppLogo from "../../components/AppLogo";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";

function GuestAddressInfo() {
  const history = useHistory();
  const { user, updateUser } = useAuthentication();
  const { fetchStates, states } = useLocationStore();
  const [address, updateAddress] = React.useState({
    name: "",
    region: "",
    city: "",
    phone: "",
    address: "",
    label: "",
    email: "",
  });

  const handleChange = async (e) => {
    updateAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    history.push("/guest-checkout", { address });

    // updateUser(payload, () => history.goBack());
  };

  useEffect(() => {
    fetchStates();
  }, [fetchStates]);

  return (
    <>
      <div className="guest-address-info">
        <AppLogo />
        <div className="go-back">
          <ArrowBackIcon />
          <Link to="/cart"> Cart</Link>
        </div>
        <div className="address-form">
          <Form className="address-main" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="fullName">Full Name*</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Adekola Diekola"
                value={address.name}
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
                  pattern="[1-9]{1}[0-9]+"
                  placeholder="8082269035"
                  type="number"
                  id="phone"
                  name="phone"
                  value={address.phone}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email*</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Adekola Diekola"
                value={address.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address *</Label>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder="81b Kusa Street"
                value={address.address}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="label">Home/Office</Label>
              <Input
                type="text"
                name="label"
                id="label"
                placeholder="Home"
                value={address.label}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="state">State / Region *</Label>

              <Select
                name="region"
                id="region"
                placeholder="Please select..."
                value={address.region}
                onChange={handleChange}
                className="form-control"
                required
              >
                {states.map((state) => (
                  <option value={state.name}>{state.name}</option>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <Label for="city">City *</Label>
              <Input
                type="text"
                name="city"
                id="city"
                placeholder="Please select..."
                value={address.city}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <div className="info-button">
              <AppButton buttonText="CONTINUE" classname="continue" />
            </div>
          </Form>
        </div>
      </div>

      <div className="bottom">
        <Copyright />
        <Footer />
      </div>
    </>
  );
}

export default GuestAddressInfo;
