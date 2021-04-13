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
function ProductItem({product}) {
  return (
    <Link to={'/product-details'} className="product-item pointer">
      <img src={productImageSample} alt="" />
      <span className="name">{clipText(product.name, 20)}</span>
      {/* <span className="store-name">Veral Stores</span> */}
      <span className="price">{formatMoney(product.price)}</span>
    </Link>
  );
}

export default ProductItem;
