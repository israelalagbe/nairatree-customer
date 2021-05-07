import React, { useEffect } from "react";
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
import { Select } from "@material-ui/core";
import useLocationStore from "../../../stores/useLocation";
import Notify from "../../../util/Notify";

function AddressInfo() {
  const history = useHistory();

  /**
   * @type {{address_id:string?}}
   */
  // @ts-ignore
  const locationState = history.location.state;

  const { user, updateUser } = useAuthentication();
  const { fetchStates, states } = useLocationStore();
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
    let addressBook = user.address_book;

    //For edit purpose
    if (locationState?.address_id) {
      addressBook = addressBook.filter(
        (address) => address._id !== locationState.address_id
      );
    }

    const sameLabel = user.address_book.find(
      (item) => item.label === item.label
    );

    const payload = {
      address_book: [
        ...addressBook.map((item) => ({
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
    if (address.phone.length !== 10) {
      Notify.error("Phone Length must be 14 characters long");
      return;
    }
    if (sameLabel) {
      Notify.error(`Duplicate ${address.label} Label Provided`);
      return;
    }
    updateUser(payload, () => {
      Notify.success("Address Updated Successfully");
      history.push("");
    });
  };

  useEffect(() => {
    fetchStates();
  }, [fetchStates]);

  useEffect(() => {
    const selectedAddress = user.address_book?.find?.(
      (address) => address._id === locationState?.address_id
    );
    if (selectedAddress) {
      updateAddress({
        name: selectedAddress.name,
        region: selectedAddress.region,
        city: selectedAddress.city,
        phone: selectedAddress.phone.replace("+234", ""),
        address: selectedAddress.address,
        label: selectedAddress.label,
      });
    }
  }, []);

  return (
    <div className="address-info">
      <h3>Address Information</h3>
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
            <Label for="label">Label(Home/Office)</Label>
            <Input
              type="text"
              name="label"
              id="label"
              placeholder="Home/Office"
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
  );
}

export default AddressInfo;
