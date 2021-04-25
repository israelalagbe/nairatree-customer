import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Row, Col } from "reactstrap";
import "./index.scss";
import { useHistory } from "react-router-dom";
import useOrderStore from "../../../../stores/useOrderStore";
import { format } from "date-fns";
import formatMoney from "../../../../util/formatMoney";

function OrdersDetails() {
  const history = useHistory();
  const { orders } = useOrderStore();

  const [selectedOrder, setSelectedOrder] = useState(
    orders.find((item) => item.id)
  );
  const total = selectedOrder.total_amount_to_pay + selectedOrder.shipping_fee;
  console.log(selectedOrder);

  return (
    <div className="orderDetails">
      <div className="orderArrow" onClick={history.goBack}>
        <ArrowBackIcon />
        <h3>Order Details</h3>
      </div>
      <div className="orderNumber">
        <h3>Order NO: {selectedOrder.id}</h3>
        <h6>1 Items</h6>
        <h6>
          Placed on {format(new Date(selectedOrder.createdAt), "LLL d, yyyy")}
        </h6>

        <h6>Total: {formatMoney(selectedOrder.total_amount_to_pay)}</h6>
      </div>

      <div className="orderItem">
        <h3>ITEMS IN YOUR ORDER</h3>

        <div className="orderItem1">
          <h5>{selectedOrder.delivery_status}</h5>
          <h4>On {format(new Date(selectedOrder.createdAt), "LLL d, yyyy")}</h4>
          <div className="orderItem2">
            <div className="orderItemsImg">
              <img
                src={selectedOrder.products[0].product.images[0]}
                alt="product"
              />
            </div>
            <div>
              <h4>{selectedOrder.products[0].product.name}</h4>

              <h6>QTY: 1</h6>
              <h4>{formatMoney(selectedOrder.total_amount_to_pay)}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="orderDetailsBottom">
        <Row>
          <Col md="6">
            <div className="orderDetailsPayment">
              <h3 className="mainH3">PAYMENT INFORMATION</h3>
              <div>
                <h3>Payment Method</h3>
                <h6>Pay Now to enjoy Instant Discount up to N1,000.</h6>
              </div>
              <div>
                <h3>Payment Details</h3>
                <h6>
                  Items total: {formatMoney(selectedOrder.total_amount_to_pay)}
                </h6>
                <h6>
                  Shipping Fees: {formatMoney(selectedOrder.shipping_fee)}
                </h6>
                <h6>Promotional Discount:-----</h6>
                <h3>Total: {formatMoney(total)}</h3>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="orderDetailsPayment">
              <h3 className="mainH3">DELIVERY INFORMATION</h3>
              <div>
                <h3>Delivery Method</h3>
                <h6>Standard Door Delivery</h6>
              </div>
              <div>
                <h3>Shipping Address</h3>
                <h6>{selectedOrder.delivery_address.name}</h6>
                <h6>{selectedOrder.delivery_address.address}</h6>
                <h6>
                  {selectedOrder.delivery_address.region},
                  {selectedOrder.delivery_address.city}
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default OrdersDetails;
