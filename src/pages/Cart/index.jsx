import React from "react";
import { Row, Col } from "reactstrap";
import Header from "../../components/Header";
import CartFirst from "../../components/CartFirst";
import CartSecond from "../../components/CartSecond";
import "./index.scss";

function Cart() {
  return (
    <div className="cart">
      <Header />
      <div className="cart-row">
        <Row>
          <Col md={8}>
            <CartFirst />
          </Col>
          <Col md={4}>
            <CartSecond />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Cart;
