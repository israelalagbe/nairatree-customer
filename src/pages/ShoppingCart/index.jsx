import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import Header from "../../components/Header";
import CartFirst from "../../components/CartFirst";
import CartSecond from "../../components/CartSecond";
import "./index.scss";
import { Link, useHistory } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import useCartStore from "../../stores/useCartStore";
import LoadingTrigger from "../../components/LoadingTrigger";
import useAuthentication from "../../stores/useAuthentication";
import useProductStore from "../../stores/useProductStore";

function ShoppingCart() {
  const history = useHistory();
  const { carts, saveCarts, setLocalCarts } = useCartStore();
  const [selectedCartsIndexes, setSelectedCartsIndexes] = useState([]);
  const { user } = useAuthentication();
  const {
    recentlyViewed,
    recentlyViewedLoading,
    fetchRecentlyViewed,
  } = useProductStore();

  /**
   * @param {number} cartIndex
   * @param {Cart} cartUpdate
   */
  const updateCart = (cartIndex, cartUpdate) => {
    const updatedCarts = carts
      .map((cart, index) => {
        if (index === cartIndex) {
          return cartUpdate;
        }
        return cart;
      })
      //This deletes null cart
      .filter((cart) => cart);
    if (user) {
      const payload = updatedCarts.map((cart) => ({
        product: cart.product.id,
        quantity: cart.quantity,
        ...(cart.variant ? { variant: String(cart.variant) } : null),
      }));

      saveCarts(payload, () => {});
    } else {
      setLocalCarts(updatedCarts);
    }
  };

  const deleteSelectedCarts = () => {
    const updatedCarts = carts
      //This deletes null cart
      .filter((cart, index) => !selectedCartsIndexes.includes(index));

    setLocalCarts(updatedCarts);
  };

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
            <CartFirst
              deleteSelectedCarts={deleteSelectedCarts}
              selectedCartsIndexes={selectedCartsIndexes}
              setSelectedCartsIndexes={setSelectedCartsIndexes}
              updateCart={updateCart}
              carts={carts}
            />
          </Col>
          <Col md={4}>
            <CartSecond carts={carts} />
          </Col>
        </Row>
      </div>
      <div className="cart-products">
        <div className="products-bottom">
          <div className="heading">
            <span className="heading-text">RECENT VIEWED</span>
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
