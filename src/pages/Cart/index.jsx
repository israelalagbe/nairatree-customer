import React from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
import AppButton from "../../components/AppButton";
import Iphone from ".././../img/iphone.png";

function Cart() {
  return (
    <div>
      <Row>
        <Col md={8}>
          <div>
            <div>
              <h3>Shopping Cart(1)</h3>
            </div>
            <div>
              <div>Select All</div>
              <div>Delete Selected</div>
              <AppButton buttonText="Update Cart" />
            </div>
          </div>
          <div>
            <div>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  <div className="d-flex">
                    <div>
                      <img src={Iphone} alt="#" />
                    </div>
                    <div>
                      <h5>Iphone 11 Pro Max</h5>

                      <p>Color: Red</p>
                      <h6>
                        ₦ 150,999.00<span>₦ 150,999.00</span>
                      </h6>
                      <h4>Free Shipping: Within Lagos</h4>
                    </div>
                  </div>
                </Label>
              </FormGroup>
            </div>
            <div>
              <h5>ADD TO WISHLIST </h5>
              <h5>DELETE </h5>
            </div>
          </div>
        </Col>
        <Col md={4}>Your Cart is Up-to-date </Col>
      </Row>
    </div>
  );
}

export default Cart;
