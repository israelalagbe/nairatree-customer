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

function AddressInfo() {
  const history = useHistory();
  const { user, updateUser, updateUserLoading } = useAuthentication();
  const { fetchStates, states } = useLocationStore();
  console.log(states);
  const [address, updateAddress] = React.useState({
    name: "",
    region: "",
    city: "",
    phone: "",
    address: "",
    label: "",
  });

  const handleChange = async (e) => {
    updateAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      address_book: [
        ...user.address_book.map((item) => ({
          name: item.name,
          region: item.region,
          city: item.city,
          phone: item.phone,
          address: item.address,
          label: item.label,
          is_default: false,
        })),
        {
          name: address.name,
          region: address.region,
          city: address.city,
          phone: `+234${address.phone}`,
          address: address.address,
          label: address.label,
          is_default: true,
        },
      ],
    };

    updateUser(payload, () => history.goBack());
  };

  useEffect(() => {
    fetchStates();
  }, [fetchStates]);

  return (
    <>
      <div className="address-info">
        <AppLogo />
        <div className="go-back" onClick={history.goBack}>
          <ArrowBackIcon />
          <h6>Back</h6>
        </div>
        <div className="address-form">
          <Form className="address-main" onSubmit={handleSubmit}>
            <h3>ADDRESS INFORMATION</h3>
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
              <AppButton buttonText="SAVE & CONTINUE" classname="continue" />
              {/* <AppButton
                buttonText="CONTINUE WITHOUT SAVING"
                classname="save"
              /> */}
            </div>
          </Form>
        </div>
      </div>
      <div className="address-info-bottom">
        <Copyright />
        <Footer />
      </div>
    </>
  );
}

export default AddressInfo;
