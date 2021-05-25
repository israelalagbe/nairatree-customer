import React from "react";
import { Form, Label, FormGroup, Input, Col, Row } from "reactstrap";
import logo from "../../img/logo.svg";
import AppButton from "../AppButton";
import { Link, useHistory } from "react-router-dom";
import visa from "../../img/visa.png";
import mastercard from "../../img/mastercard.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./index.scss";
import useAuthentication from "../../stores/useAuthentication";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneIcon from "@material-ui/icons/Phone";

function HomeFooter() {
  const history = useHistory();
  const { postSubscriber } = useAuthentication();

  const [subscriber, setSubscriber] = React.useState({
    email: "",
  });

  const handleChange = async (e) => {
    setSubscriber({ ...subscriber, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: subscriber.email,
    };

    postSubscriber(payload, () => history.push("/"));
  };
  return (
    <div className="allFooter">
      <div className="homeFooter1">
        <div className="homeFooter1Img">
          <img src={logo} alt="logo" />
        </div>
        <div className="homeFooter1Form">
          <Form onSubmit={handleSubmit}>
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
                  value={subscriber.email}
                  onChange={handleChange}
                />
              </FormGroup>
              <AppButton buttonText="Subscribe" classname="homeFooterButton" />
            </div>
          </Form>
        </div>
      </div>

      <div className="homeFooter2">
        <div>
          <Row>
            <Col md="2">
              <h3>ABOUT NAIRATREE</h3>

              <Link to="/about-us">
                <h6>About Us</h6>
              </Link>
              <Link to="/our-services">
                <h6>Our Services</h6>
              </Link>
            </Col>
            <Col md="2">
              <h3>Contact Us</h3>

              <h5>Whatsapp: +2347038678269, +2349095678447</h5>

              <h5>Mobile Phone : +2347038678269</h5>
            </Col>

            <Col md="2">
              <h3>Complaints and Enquiries</h3>

              <h5>customercare@nairatree.com</h5>
            </Col>

            <Col md="4">
              <h3>HELP CENTER</h3>
              <Link to="/customer-support">
                <h6> Customer Support</h6>
              </Link>
              {/* <Link to="/">
                <h6>FAQs</h6>
              </Link> */}
              <Link to="/purchase-information">
                <h6>Purchase Information</h6>
              </Link>
              <Link to="/vendor-guide">
                <h6>Vendor Guide</h6>
              </Link>
              {/* <Link to="/">
                <h6>Report</h6>
              </Link> */}
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
                <a
                  href="http://twitter.com/nairatreestores"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon />
                </a>

                <a
                  href="http://facebook.com/nairatreestores"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="http://api.whatsapp.com/send?phone=+2347038678269"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon />
                </a>
                <a
                  href="http://instagram.com/nairatreestores"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>

                <a href="tel:+2347038678269">
                  <PhoneIcon />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
