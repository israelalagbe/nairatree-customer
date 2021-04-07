import React from "react";
import AppBreadcrumb from "../../components/AppBreadcrumb";
import Header from "../../components/Header";
import Details from "../../components/Details";

function ProductDetails() {
  return (
    <div className="product-details">
      <Header />
      <AppBreadcrumb />
      <div>
        <Details />
      </div>
    </div>
  );
}

export default ProductDetails;
