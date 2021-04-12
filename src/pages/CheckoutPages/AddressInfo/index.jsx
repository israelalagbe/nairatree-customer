import React from "react";
import AppLogo from "../../../components/AppLogo";
import "./index.scss";
import { Link } from "react-router-dom";
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

function AddressInfo() {
  return (
    <>
      <div className="address-info">
        <AppLogo />
        <div className="go-back">
          <ArrowBackIcon />
          <Link to="/login"> Cart</Link>
        </div>
        <div className="address-form">
          <Form className="address-main">
            <h3>ADDRESS INFORMATION</h3>
            <FormGroup>
              <Label for="fullName">Full Name*</Label>
              <Input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Adekola Diekola"
              />
            </FormGroup>
            <FormGroup>
              <Label for="mobilePhone">Mobile Phone Number *</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>+234</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="8082269035" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label for="address">Address *</Label>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder="81b Kusa Street"
              />
            </FormGroup>
            <FormGroup>
              <Label for="state">State / Region *</Label>
              <Input
                type="text"
                name="state"
                id="state"
                placeholder="Please select..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="city">City *</Label>
              <Input
                type="text"
                name="city"
                id="city"
                placeholder="Please select..."
              />
            </FormGroup>

            <div className="info-button">
              <AppButton buttonText="SAVE & CONTINUE" classname="continue" />
              <AppButton
                buttonText="CONTINUE WITHOUT SAVING"
                classname="save"
              />
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

export default AddressInfo;
