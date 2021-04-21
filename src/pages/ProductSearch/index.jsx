import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Row, Col } from "reactstrap";
import SearchInputs from "../../components/SearchInputs";
import ProductItem from "../../components/ProductItem";
import "./index.scss";
import { Link, useLocation } from "react-router-dom";
import AppPagination from "../../components/AppPagination";
import useProductStore from "../../stores/useProductStore";
import LoadingTrigger from "../../components/LoadingTrigger";
import getQueryParams from "../../util/getQueryParams";
import removeNullItems from "../../util/removeNullItem";



function ProductSearch() {
  const location = useLocation();

  /**
   * @type {SearchQuery}
   */
  const query = getQueryParams(location.search);

  const [filters, setFilters] = useState({});

  const { productsLoading, products, totalProducts, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts(removeNullItems({
      search: query.search,
      ...filters
    }));
  }, [query.search, filters, fetchProducts]);

  const applyFilter = (filter) => {
    setFilters(filter)
  }
  
  return (
    <div className="product-search-page">
      <Header />

      <div className="product-container">
        <Row>
          <Col md="3">
            <div className="input-main">
              <SearchInputs applyFilter={applyFilter} />
            </div>
          </Col>

          <Col md="9">
            <div className="main mr-4">
              <div className="heading">
                <span className="heading-text">{totalProducts} Search result found {query.search? `for '${query.search}'` : null}</span>
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
              {/* <AppPagination /> */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProductSearch;
