import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Row, Col } from "reactstrap";
import SearchInputs from "../../components/SearchInputs";
import ProductItem from "../../components/ProductItem";
import "./index.scss";
import { Link } from "react-router-dom";
import AppPagination from "../../components/AppPagination";
import useProductStore from "../../stores/useProductStore";
import LoadingTrigger from "../../components/LoadingTrigger";

function ProductSearch() {
  const { productsLoading, products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <div className="product-search-page">
      <Header />

      <div className="product-container">
        <Row>
          <Col md="3">
            <div className="input-main">
              <SearchInputs />
            </div>
          </Col>

          <Col md="9">
            <div className="main mr-4">
              <div className="heading">
                <span className="heading-text">127 Search result for "IPHONE 12"</span>
              </div>
              <section className="product-list">
                <LoadingTrigger isLoading={productsLoading}>
                  {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                  ))}
                </LoadingTrigger>
              </section>
            </div>
            <div className="float-right">
              <AppPagination />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProductSearch;
