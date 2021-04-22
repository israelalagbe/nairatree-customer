import React from "react";
import "./index.scss";
import productImageSample from "../../img/ProductSampleImage.png";
import formatMoney from "../../util/formatMoney";
import { Link } from "react-router-dom";
import clipText from "../../util/clipText";

/**
 * @param {object} props
 * @param {Product} props.product
 */
function ProductItem({ product }) {
  console.log(product);
  return (
    <Link
      to={`/product-details/${product.id}`}
      className="product-item pointer"
    >
      <img src={product.images[0]} alt="" />
      <span className="name">{clipText(product.name, 20)}</span>
      {/* <span className="store-name">Veral Stores</span> */}
      <span className="price">{formatMoney(product.price)}</span>
    </Link>
  );
}

export default ProductItem;
