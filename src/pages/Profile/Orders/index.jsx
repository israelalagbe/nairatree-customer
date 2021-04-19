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
      {orders.map((order) =>
        order.products.map((item) => (
          <div className="orders mb-3">
            <div className="main-order">
              <div className="order-img">
                <img src={item.product.images[0]} alt="#" />
              </div>

              <div className="order-details">
                <h3>{item.product.name}</h3>

                {item.product.variants.map((colors) => (
                  <h6>Color:{colors ? colors.color : null} </h6>
                ))}

                <h4>{formatMoney(item.product.price)}</h4>
                <h5>Delivered</h5>
              </div>
            </div>

            <div className="details">
              <Link to="/">See details</Link>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Orders;
