import React from "react";
import "./index.scss";
import productImageSample from "../../img/ProductSampleIMage.png";
import formatMoney from "../../util/formatMoney";

function ProductItem() {
  return (
    <div className="product-item pointer">
      <img src={productImageSample} alt="" />
      <span className="name">Nikon D3200 FHS...</span>
      <span className="store-name">Veral Stores</span>
      <span className="price">{formatMoney(500700)}</span>
    </div>
  );
}

export default ProductItem;
