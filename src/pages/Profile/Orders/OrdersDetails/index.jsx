import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Row, Col } from "reactstrap";

function OrdersDetails() {
  return (
    <div className="orderDetails">
      <div>
        <ArrowBackIcon />
        <h3>Order Details</h3>
      </div>
      <div>
        <h4>
          Order NO: <span>jjjjjj</span>
        </h4>
        <h6>1 Items</h6>
        <h6> Placed on 22-04-2021</h6>

        <h6>Total: ₦ 40,990</h6>
      </div>

      <div>
        <h4>ITEMS IN YOUR ORDER</h4>
        <div>
          <div>
            <h5>Status</h5>
            <h2>On Thursday, 22-04</h2>
            <div>
              <div>
                <img />
              </div>
              <div>
                <h4>Samsung q10</h4>

                <h5>QTY: 1</h5>
                <h6>₦ 40,990</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Row>
          <Col md="6">nn</Col>
          <Col md="6">nnn</Col>
        </Row>
      </div>
    </div>
  );
}

export default OrdersDetails;
