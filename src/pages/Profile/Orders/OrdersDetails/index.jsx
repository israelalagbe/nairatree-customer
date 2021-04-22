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
          <Col md="6">
            <div>
              <h3>PAYMENT INFORMATION</h3>
              <div>
                <h3>Payment Method</h3>
                <p>
                  Pay Now to enjoy 5% Instant Discount up to N1,000. Stay Safe,
                  go cashless with JumiaPay
                </p>
              </div>
              <div>
                <h3>Payment Details</h3>
                <p>Items total: ₦ 40,990</p>
                <p>Shipping Fees: ₦ 600</p>
                <p>Promotional Discount: ₦ -600</p>
                <h3>Total: ₦ 40,990</h3>
              </div>
            </div>
          </Col>
          <Col md="6">
            {" "}
            <div>
              <h3>DELIVERY INFORMATION</h3>
              <div>
                <h3>Delivery Method</h3>
                <p>Standard Door Delivery</p>
              </div>
              <div>
                <h3>Shipping Address</h3>
                <p>Zainab Oyedeji</p>
                <p>47a Iwaya Road Sabo Yaba</p>
                <p>Yaba-Onike Iwaya, Lagos</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default OrdersDetails;
