import React from "react";
import "./index.scss";
import productImageSample from "../../img/ProductSampleImage.png";
import formatMoney from "../../util/formatMoney";
import { Link } from "react-router-dom";

function ProductItem() {
  return (
    <Link to={'/product-details'} className="product-item pointer">
      <img src={productImageSample} alt="" />
      <span className="name">Nikon D3200 FHS...</span>
      <span className="store-name">Veral Stores</span>
      <span className="price">{formatMoney(500700)}</span>
    </Link>
  );
}

export default ProductItem;
