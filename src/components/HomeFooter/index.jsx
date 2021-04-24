import React from "react";
import { Form, Label, FormGroup, Input, Col, Row } from "reactstrap";
import logo from "../../img/greenlogo.png";
import AppButton from "../AppButton";
import { Link } from "react-router-dom";
import stores from "../../img/stores.png";
import visa from "../../img/visa.png";
import mastercard from "../../img/mastercard.png";
import instagram from "../../img/instagram.png";
import linkedin from "../../img/linkedin.png";
import snapchat from "../../img/snapchat.png";
import twitter from "../../img/twitter.png";
import facebook from "../../img/facebook.png";
import youtube from "../../img/youtube.png";
import "./index.scss";

function HomeFooter() {
  return (
    <div className="allFooter">
      <div className="homeFooter1">
        <div className="homeFooter1Img">
          <img src={logo} alt="logo" />
        </div>
        <div className="homeFooter1Form">
          <Form>
            <Label for="email">
              Subscribe to our newslettter and get updates on cheapest offers
            </Label>
            <div className="homeFooter1FormGroup">
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ololadeoselu@yahoo.com"
                  className="homeFooterInput"
                />
              </FormGroup>
              <AppButton buttonText="Submit" classname="homeFooterButton" />
            </div>
          </Form>
        </div>
      </div>

      <div className="homeFooter2">
        <div>
          <Row>
            <Col md="2">
              <h3>ABOUT NAIRATREE</h3>

              <Link to="/">
                <h6>About Us</h6>
              </Link>
              <Link to="/">
                <h6>Terms and Conditions</h6>
              </Link>
              <Link to="/">
                <h6>Privacy Policy</h6>
              </Link>
            </Col>
            <Col md="2">
              <h3>SERVICES</h3>

              <Link to="/">
                <h6>Buying and Selling</h6>
              </Link>
              <Link to="/">
                <h6>International Address</h6>
              </Link>
              <Link to="/">
                <h6>Privacy Policy</h6>
              </Link>
              <Link to="/">
                <h6>e-Shopping Global</h6>
              </Link>
              <Link to="/">
                <h6>Top International Stores</h6>
              </Link>
            </Col>
            <Col md="2">
              <h3>SHOPS</h3>

              <Link to="/">
                <h6>Ebay</h6>
              </Link>
              <Link to="/">
                <h6>Target</h6>
              </Link>
              <Link to="/">
                <h6>Macy</h6>
              </Link>
              <Link to="/">
                <h6>Etsy</h6>
              </Link>
              <Link to="/">
                <h6>Others +</h6>
              </Link>
            </Col>
            <Col md="2">
              <h3> GET THE NAIRATREE APP</h3>
              <Link to="/">
                {" "}
                <h6>Get access to unlimited discounts</h6>
              </Link>
              <div className="stores">
                <img src={stores} alt="stores" />
              </div>
            </Col>
            <Col md="4">
              <h3>HELP CENTER</h3>
              <Link to="/">
                <h6> Customer Support</h6>
              </Link>
              <Link to="/">
                <h6>FAQs</h6>
              </Link>
              <Link to="/">
                <h6>Purchase Information</h6>
              </Link>
              <Link to="/">
                <h6>Vendor Guide</h6>
              </Link>
              <Link to="/">
                <h6>Report</h6>
              </Link>
            </Col>
          </Row>
        </div>
        <div className="mt-5">
          <Row>
            <Col md="2">
              <h3>PAYMENT METHODS</h3>
              <div>
                <img src={mastercard} alt="mastercard" />
                <img src={visa} alt="visa" />
              </div>
            </Col>
            <Col md="4">
              <h3>JOIN OUR SOCIAL MEDIA</h3>
              <div>
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={linkedin} alt="linkedin" />
                <img src={instagram} alt="instgram" />
                <img src={snapchat} alt="snapchat" />
                <img src={youtube} alt="youtube" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
