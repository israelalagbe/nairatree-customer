import React from "react";
import AppBreadcrumb from "../../components/AppBreadcrumb";
import Header from "../../components/Header";
import Details from "../../components/Details";
import ProductTab from "../../components/ProductTab";
import "./index.scss";

function ProductDetails() {
  return (
    <div className="product-details">
      <Header />
      <div className="product-details-main">
        <AppBreadcrumb />
        <div className="details">
          <Details />
          <ProductTab />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
