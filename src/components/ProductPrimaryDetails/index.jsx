import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import Iphone from "../../img/iphone.png";
import "./index.scss";
import AppButton from "../AppButton";
import Car from "../../img/car.png";
import classnames from "classnames";
import formatMoney from "../../util/formatMoney";

/**
 * 
 * @param {{product: Product}} props 
 */
function ProductPrimaryDetails({product}) {
  const [active, setActive] = useState("");

  const toggle = (color) => {
    if (active !== color) setActive(color);
  };
  return (
    <div className="details">
      <Row>
        <Col md={9}>
          <div className="details-main">
            <Row>
              <Col md="6">
                <div className="images-box">
                  <div className="big">
                    <img src={product.images[0]} alt="iphone" />
                  </div>
                  <div className="small">
                    {product.images.map((image)=><img src={image} alt="iphone" />)}
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="main-2">
                  <div className="more-details">
                    <p className="type">{product.name}</p>
                    {/* <h6>
                      Sold by:<span>Veral Stores</span>
                    </h6> */}
                    <h4>20% off on shipping for Abeokuta and Lagos</h4>
                    <p className="amount">{formatMoney(product.price)}</p>

                    <div className="colors">
                      <h6>Select Other Colors</h6>
                      <div className="diff pointer mb-2">
                        <h6
                          className={classnames({ active: active === "red" })}
                          onClick={() => {
                            toggle("red");
                          }}
                        >
                          Red
                        </h6>
                        <h6
                          className={classnames({ active: active === "lime" })}
                          onClick={() => {
                            toggle("lime");
                          }}
                        >
                          Lime
                        </h6>
                        <h6
                          className={classnames({ active: active === "black" })}
                          onClick={() => {
                            toggle("black");
                          }}
                        >
                          Black
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="second-details">
                    <div className="maintain">
                      <h6>-</h6>
                      <p>2</p>
                      <h6>+</h6>
                    </div>
                    <AppButton
                      buttonText="Add to Cart"
                      classname="add-to-cart"
                    />
                    <div className="shipping">
                      <div>
                        <img src={Car} alt="#" />
                      </div>
                      <p>
                        Order today Get it by Monday, Nov 23
                        <br />
                        <span>FREE Shipping on order within Lagos</span>
                      </p>
                    </div>
                  </div>
                  <div className="quantity">
                    <p>
                      Quantity available: <span>{product.quantity_available}</span>
                    </p>
                    <h5>Short description</h5>
                    <p className="down" dangerouslySetInnerHTML={{__html: product.description}}></p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={3}>
          <div className="other-offer">
            <p>Other offers from vendors</p>
            <div className="offers">
              <div className="offers-img">
                <img src={Iphone} alt="iphone" />
              </div>
              <div className="offers-content">
                <h4>₦ 150,999.00</h4>
                <h6>Quantum Electronics</h6>
                <AppButton buttonText="Add To Cart" classname="add-to-cart" />
              </div>
            </div>
          </div>
          <div className="border"></div>
          <div className="vendor">
            <h6>Wanna be a vendor?</h6>
            <h6>Click here to register your account!</h6>
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

export default ProductPrimaryDetails;
