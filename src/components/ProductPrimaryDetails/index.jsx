import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import Iphone from "../../img/iphone.png";
import "./index.scss";
import AppButton from "../AppButton";
import Car from "../../img/car.png";
import classnames from "classnames";
import formatMoney from "../../util/formatMoney";
import useCartStore from "../../stores/useCartStore";
import { useHistory } from "react-router-dom";
import useAuthentication from "../../stores/useAuthentication";
import useProductStore from "../../stores/useProductStore";

/**
 *
 * @param {object} props
 * @param {Product} props.product
 * @param {Function} props.setVariant
 * @param {ProductVariant} [props.selectedVariant]
 */
function ProductPrimaryDetails({ product, setVariant, selectedVariant }) {
  const history = useHistory();

  const availableQuantity =
    selectedVariant?.quantity ?? product.quantity_available;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [otherProduct, setOtherProduct] = useState([]);

  const [productImages, setProductImages] = useState(product.images);

  const [counter, setCounter] = useState(1);

  const { carts, setLocalCarts, saveCarts, saveCartsLoading } = useCartStore();

  const { user } = useAuthentication();
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products) {
      const randomItems = products
        .sort(() => Math.random() - Math.random())
        .slice(0, 3);

      setOtherProduct(randomItems);
      console.log(randomItems);
    }
  }, [fetchProducts, products]);

  const viewProduct = (id) => {
    history.push(`/product-details/${id}`);
  };

  /**
   * @param {ProductVariant} variant
   */
  const toggle = (variant) => {
    if (variant === selectedVariant) {
      setVariant(null);
      setProductImages(product.images);
      setCurrentImageIndex(0);
    } else {
      setVariant(variant);
      setProductImages(variant.images);
      setCurrentImageIndex(0);
    }
  };

  const incrementCounter = (e) => {
    if (counter >= availableQuantity) {
      setCounter(availableQuantity);
      return;
    }
    setCounter(counter + 1);
  };

  const decrementCounter = (e) => {
    if (counter <= 1) {
      setCounter(1);
      return;
    }
    setCounter(counter - 1);
  };

  useEffect(() => {
    if (counter >= availableQuantity) {
      setCounter(availableQuantity);
    }
  }, [counter, availableQuantity]);

  const addToCart = (e) => {
    if (!user) {
      //Format existing cart details in format suitable for the backend
      const existingCarts = carts
        .map((cart) => ({
          product: cart.product,
          quantity: cart.quantity,
          ...(cart.variant ? { variant: String(cart.variant) } : null),
        }))
        // Remove current product from shopping cart
        .filter(
          (cart) =>
            !(
              cart.product.id === product.id &&
              String(cart.variant) === String(selectedVariant?.variant_id)
            )
        );

      /**
       * @type {Cart}
       */
      const newCart = {
        product: { ...product },
        quantity: counter,
        ...(selectedVariant?.variant_id
          ? { variant: String(selectedVariant?.variant_id) }
          : null),
      };
      setLocalCarts([...existingCarts, newCart]);
      history.push("/cart-success");

      return;
    }

    //Format existing cart details in format suitable for the backend
    const existingCarts = carts
      .map((cart) => ({
        product: cart.product.id,
        quantity: cart.quantity,
        ...(cart.variant ? { variant: String(cart.variant) } : null),
      }))
      // Remove current product from shopping cart
      .filter(
        (cart) =>
          !(
            cart.product === product.id &&
            String(cart.variant) === String(selectedVariant?.variant_id)
          )
      );

    const payload = [
      ...existingCarts,

      {
        product: product.id,
        quantity: counter,
        ...(selectedVariant?.variant_id
          ? { variant: String(selectedVariant?.variant_id) }
          : null),
      },
    ];
    saveCarts(payload, () => history.push("/cart-success"));
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
                    <img src={productImages[currentImageIndex]} alt="iphone" />
                  </div>
                  <div className="small">
                    {productImages.map((image, index) => (
                      <img
                        key={index}
                        className="pointer"
                        onClick={() => setCurrentImageIndex(index)}
                        src={image}
                        alt="iphone"
                      />
                    ))}
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
                        {product.variants.map((variant) => (
                          <h6
                            key={variant.variant_id}
                            className={classnames({
                              active: selectedVariant?.color === variant.color,
                            })}
                            onClick={() => {
                              toggle(variant);
                            }}
                          >
                            {variant.color}
                          </h6>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="second-details">
                    <div className="maintain">
                      <h6 className="pointer" onClick={decrementCounter}>
                        -
                      </h6>
                      <p>{counter}</p>
                      <h6 className="pointer" onClick={incrementCounter}>
                        +
                      </h6>
                    </div>
                    <AppButton
                      onClick={addToCart}
                      buttonText="Add to Cart"
                      classname={`add-to-cart ${
                        counter === 0 || saveCartsLoading ? "btn-disabled" : ""
                      }`}
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
                      Quantity available: <span>{availableQuantity}</span>
                    </p>
                    <h5>Short description</h5>
                    <p
                      className="down"
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    ></p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={3}>
          <div className="other-offer">
            <p>Other offers from vendors</p>

            {otherProduct.map((item) => (
              <div className="offers">
                <div className="offers-img">
                  <img src={item.images[0]} alt="iphone" />
                </div>

                <div className="offers-content">
                  <h4>{item.name}</h4>
                  <h6>{formatMoney(item.price)}</h6>
                  <AppButton
                    buttonText="View Product"
                    classname="view-product"
                    onClick={() => viewProduct(item.id)}
                  />
                </div>
              </div>
            ))}
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
