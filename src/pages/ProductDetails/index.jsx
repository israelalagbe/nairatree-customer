import React, { useEffect, useState } from "react";
import AppBreadcrumb from "../../components/AppBreadcrumb";
import Header from "../../components/Header";
import ProductPrimaryDetails from "../../components/ProductPrimaryDetails";
import ProductTab from "../../components/ProductTab";
import "./index.scss";
import { useParams } from "react-router-dom";
import useProductStore from "../../stores/useProductStore";
import LoadingTrigger from "../../components/LoadingTrigger";
import useAuthentication from "../../stores/useAuthentication";
import HomeFooter from "../../components/HomeFooter";

function ProductDetails() {
  /**
   * @type {{productId:string}}
   */
  const { productId } = useParams();

  const [selectedVariant, setVariant] = useState(null);

  const { user } = useAuthentication();

  const {
    selectedProduct,
    selectedProductLoading,
    fetchSelectedProduct,
    addLocalRecentlyViewed,
    updateRecentView,
  } = useProductStore();

  useEffect(() => {
    fetchSelectedProduct(productId);
  }, [fetchSelectedProduct, productId]);

  useEffect(() => {
    if (user) {
      updateRecentView(productId);
      return;
    }
    
    if(selectedProduct) {
      addLocalRecentlyViewed(selectedProduct);
    }
  }, [
    updateRecentView,
    addLocalRecentlyViewed,
    selectedProduct,
    user,
    productId,
  ]);

  return (
    <div className="product-details">
      <Header />
      <div className="product-details-main">
        <LoadingTrigger
          marginTop="10rem"
          isLoading={selectedProductLoading || !selectedProduct}
        >
          <AppBreadcrumb product={selectedProduct} />
          <div className="details">
            <ProductPrimaryDetails
              selectedVariant={selectedVariant}
              setVariant={setVariant}
              product={selectedProduct}
            />
          </div>
        </LoadingTrigger>
      </div>
      <br />
      <br />
      <br />
      <br />
      
      <HomeFooter />
    </div>
  );
}

export default ProductDetails;
