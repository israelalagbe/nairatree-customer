import React, { useEffect } from "react";
import "./index.scss";
import iphone from "../../../img/iphone.png";
import { Link } from "react-router-dom";
import useOrderStore from "../../../stores/useOrderStore";
import formatMoney from "../../../util/formatMoney";

function Orders() {
  const { orders, fetchOrders } = useOrderStore();
  const product = orders;

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  console.log(product);

  return (
    <>
      {product.map((order) => (
        <div className="orders mb-3">
          <div className="main-order">
            <div className="order-img">
              <img src={order.products[0].product.images[0]} alt="#" />
            </div>

            <div className="order-details">
              <h3>{order.products[0].product.name}</h3>
              <h6>
                Color:
                {/* {order.products[0].product.variants[0].color
                  ? order.products[0].product.variants[0].color
                  : null}{" "} */}
              </h6>
              <h4>{formatMoney(order.products[0].product.price)}</h4>
              <h5>{order.delivery_status}</h5>
            </div>
          </div>

          <div className="details">
            <Link to={`/product-details/${order.id}`}>See details</Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default Orders;
