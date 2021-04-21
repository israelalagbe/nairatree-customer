import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import Header from "../../components/Header";
import CartFirst from "../../components/CartFirst";
import CartSecond from "../../components/CartSecond";
import "./index.scss";
import { Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import useCartStore from "../../stores/useCartStore";
import LoadingTrigger from "../../components/LoadingTrigger";
import useAuthentication from "../../stores/useAuthentication";
import useProductStore from "../../stores/useProductStore";

function ShoppingCart() {
  const { carts } = useCartStore();

  const { user } = useAuthentication();
  const {
    recentlyViewed,
    recentlyViewedLoading,
    fetchRecentlyViewed,
  } = useProductStore();

  useEffect(() => {
    if (user) {
      fetchRecentlyViewed();
    }
  }, [user]);

  return (
    <div className="cart">
      <Header />
      <div className="cart-row">
        <Row>
          <Col md={8}>
            <CartFirst carts={carts} />
          </Col>
          <Col md={4}>
            <CartSecond carts={carts} />
          </Col>
        </Row>
      </div>
      <div className="cart-products">
        <div className="products-bottom">
          <div className="heading">
            <span className="heading-text">RECENT SHOPPING HISTORY</span>
            <Link to="/products" className="view-all">
              View all +
            </Link>
          </div>
          <section className="product-list">
            <LoadingTrigger
              isLoading={recentlyViewedLoading && !recentlyViewed.length}
            >
              {recentlyViewed.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
              {recentlyViewed.length === 0 ? (
                <h4 className="no-product-message">
                  No products found to display
                </h4>
              ) : null}
            </LoadingTrigger>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
