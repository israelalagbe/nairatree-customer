import React, { useEffect } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import useOrderStore from "../../../stores/useOrderStore";
import formatMoney from "../../../util/formatMoney";
import { format } from "date-fns";
import LoadingTrigger from "../../../components/LoadingTrigger";

function Orders() {
  const { orders, fetchOrders, ordersLoading } = useOrderStore();
  const product = orders;

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <div className="profile-orders-main">
      <LoadingTrigger isLoading={ordersLoading && product.length === 0}>
      {product.length === 0 ? (
        <h2>You have no order to display </h2>
      ) : (
        orders.map((order) => {
          return order.products.map((product) => (
            <div className="orders mb-3">
              <div className="main-order">
                <div className="order-img mr-3">
                  <img src={product.product.images[0]} alt="#" />
                </div>

                <div className="order-details">
                  <h2>{product.product.name}</h2>
                  <h6>
                    Color:
                    {product.product.variants[0]?.color}
                  </h6>
                  <h6>{formatMoney(product.product.price)}</h6>
                  <h5>{order.delivery_status}</h5>

                  <h2 className="mt-3">
                    On {format(new Date(order.createdAt), "LLL d, yyyy")}
                  </h2>
                </div>
              </div>

              <div className="details">
                <Link
                  to={`/profile/orders/order-details/${product.product._id}`}
                >
                  See details
                </Link>
              </div>
            </div>
          ));
        })
      )}
      </LoadingTrigger>
    </div>
  );
}

export default Orders;
