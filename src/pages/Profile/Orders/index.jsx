import React, { useEffect } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import useOrderStore from "../../../stores/useOrderStore";
import formatMoney from "../../../util/formatMoney";
import { format } from "date-fns";

function Orders() {
  const { orders, fetchOrders } = useOrderStore();
  const product = orders;

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <div className="profile-orders">
      {product.length === 0 ? (
        <h2>You have no order to display </h2>
      ) : (
        product.map((order) => (
          <div className="orders mb-3">
            <div className="main-order">
              <div className="order-img mr-3">
                <img src={order.products[0].product.images[0]} alt="#" />
              </div>

              <div className="order-details">
                <h2>{order.products[0].product.name}</h2>
                <h6>
                  Color:
                  {order.products[0].product.variants[0]?.color}
                </h6>
                <h6>{formatMoney(order.products[0].product.price)}</h6>
                <h5>{order.delivery_status}</h5>

                <h2 className="mt-3">
                  On {format(new Date(order.createdAt), "LLL d, yyyy")}
                </h2>
              </div>
            </div>

            <div className="details">
              <Link to={`/product-details/${order.products[0].product._id}`}>
                See details
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
