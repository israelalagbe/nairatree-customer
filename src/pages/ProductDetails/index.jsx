import React, { useEffect } from "react";
import AppBreadcrumb from "../../components/AppBreadcrumb";
import Header from "../../components/Header";
import Details from "../../components/Details";
import ProductTab from "../../components/ProductTab";
import "./index.scss";
import { useParams } from "react-router-dom";
import useProductStore from "../../stores/useProductStore";
import LoadingTrigger from "../../components/LoadingTrigger";

function ProductDetails() {
  /**
   * @type {{productId:string}}
   */
  const { productId } = useParams();

  const { selectedProduct, selectedProductLoading, fetchSelectedProduct } = useProductStore();

  console.log(selectedProduct);
  useEffect(() => {
    fetchSelectedProduct(productId);
  }, [fetchSelectedProduct, productId]);

  return (
    <div className="product-details">
      <Header />
      <div className="product-details-main">
        <LoadingTrigger isLoading={selectedProductLoading || !selectedProduct}>
          <AppBreadcrumb product={selectedProduct} />
          <div className="details">
            <Details />
            <ProductTab />
          </div>
        </LoadingTrigger>
      </div>
    </div>
  );
}

export default ProductDetails;
