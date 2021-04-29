import React, { useEffect } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import useOrderStore from "../../../stores/useOrderStore";
import formatMoney from "../../../util/formatMoney";
import { format } from "date-fns";

function Reviews() {
  const { orders, fetchOrders } = useOrderStore();
  const pendingReviewOrders = orders.filter((order) => {
    return order.delivery_status === 'CONFIRMED';
  });

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <div className="profile-orders-main">
      {pendingReviewOrders.length ? (
        pendingReviewOrders.map((order) => {

          return order.products
            .filter((product) => !product.is_reviewed)
            .map((product) => (
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
                    to={`/profile/reviews/details/${order.id}/product/${product.product._id}`}
                  >
                    RATE THIS PRODUCT
                  </Link>
                </div>
              </div>
            ));
        })
      ) : (
        <h2>You have no order to review </h2>
      )}
    </div>
  );
}

export default Reviews;
