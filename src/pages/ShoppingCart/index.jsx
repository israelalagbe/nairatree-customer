import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import Header from "../../components/Header";
import CartFirst from "../../components/CartFirst";
import CartSecond from "../../components/CartSecond";
import "./index.scss";
import { Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import useCartStore from "../../stores/useCartStore";

function ShoppingCart() {
  const { carts, setLocalCarts  } = useCartStore();
  const [selectedCartsIndexes , setSelectedCartsIndexes] = useState([]);
  /**
   * @param {number} cartIndex
   * @param {Cart} cartUpdate 
   */
  const updateCart = (cartIndex, cartUpdate) => {
    const updatedCarts = carts.map((cart, index) => {
      if(index === cartIndex){
        return cartUpdate;
      }
      return cart;
    })
    //This deletes null cart
    .filter((cart) => cart);
    setLocalCarts(updatedCarts)
  }
  return (
    <div className="cart">
      <Header />
      <div className="cart-row">
        <Row>
          <Col md={8}>
            <CartFirst selectedCartsIndexes={selectedCartsIndexes} setSelectedCartsIndexes={setSelectedCartsIndexes} updateCart={updateCart} carts={carts} />
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
            {/* {new Array(10).fill(null).map(() => (
              <ProductItem />
            ))} */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
