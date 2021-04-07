import React from "react";
import { Row, Col } from "reactstrap";
import Iphone from "../../img/iphone.png";
import "./index.scss";
import AppButton from "../AppButton";
import Car from "../../img/car.png";

function Details() {
  return (
    <div className="details">
      <Row>
        <Col md={10}>
          <div className="details-main">
            <div className="main-1">
              <div className="big">
                <img src={Iphone} alt="iphone" />
              </div>
              <div className="small">
                <img src={Iphone} alt="iphone" />
                <img src={Iphone} alt="iphone" />
                <img src={Iphone} alt="iphone" />
                <img src={Iphone} alt="iphone" />
                <img src={Iphone} alt="iphone" />
              </div>
            </div>

            <div>
              <div>
                <h5>Iphone 12 128GB/4GB Red</h5>
                <p>
                  Sold by:<span>Veral Stores</span>
                </p>
                <p>20% off on shipping for Abeokuta and Lagos</p>
                <h4>₦ 150,999.00</h4>
                <p>Select Other Colors</p>
                <div>
                  <p>Red</p>
                  <p>Lime</p>
                  <p>Black</p>
                </div>
              </div>
              <div>
                <AppButton buttonText="Add to Cart" classname="add-to-cart" />
                <div>
                  <img src={Car} alt="#" />
                  <p>
                    Order today Get it by Monday, Nov 23
                    <br />
                    <span>FREE Shipping on order within Lagos</span>
                  </p>
                </div>
              </div>
              <div>
                <p>
                  Quantity available: <span>3</span>
                </p>
                <h5>Short description</h5>
                <p>
                  Lorem ipsum dolor amend petum nici galu helin mocovureol
                  <br />
                  nuile funcut cuyen yiolum makdola nidef gundu niolpplery hunjy
                  <br />
                  cendy udart airnew bulli nexx benca...
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={2}>
          <div>
            <p>Other offers from vendors</p>
            <div>
              <div>
                <img src={Iphone} alt="iphone" />
              </div>
              <div>
                <h4>₦ 150,999.00</h4>
                <p>Quantum Electronics</p>
                <AppButton buttonText="Add To Cart" classname="add-to-cart" />
              </div>
            </div>
          </div>
          <div>
            <p>Wanna be a vendor?</p>
            <p>Click here to register your account!</p>
            <AppButton
              buttonText="Register as a Vendor"
              classname="register-as-vendor"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Details;
