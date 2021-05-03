import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Row, Col } from "reactstrap";
import SearchInputs from "../../components/SearchInputs";
import ProductItem from "../../components/ProductItem";
import "./index.scss";
import { useLocation } from "react-router-dom";
import useProductStore from "../../stores/useProductStore";
import LoadingTrigger from "../../components/LoadingTrigger";
import getQueryParams from "../../util/getQueryParams";
import removeNullItems from "../../util/removeNullItem";
import HomeFooter from "../../components/HomeFooter";
import AppPagination from "../../components/AppPagination";
import useRouterQuery from "../../hooks/useRouterQuery";

function ProductSearch() {
  const location = useLocation();

  const limit = 20;
  const { addQuery } = useRouterQuery();

  /**
   * @type {SearchQuery}
   */
  const query = getQueryParams(location.search);

 
  const [filters, setFilters] = useState({
    prices: [],
    color: null,
    brand: null,
    condition: null,
  });

  const { productsLoading, products, totalProducts, searchProducts } = useProductStore();

  useEffect(() => {
    console.log('filters',filters)
    searchProducts(
      removeNullItems({
        limit,
        keyword: query.search,
        page: query.page,
        category: query.category,
        sub_category: query.sub_category,
        min_price: filters.prices[0],
        max_price: filters.prices[1],
        condition: filters.condition && filters.condition.toLowerCase(),
        brand: filters.brand,
        color: filters.color && filters.color.toLowerCase(),
      })
    );
  }, [query.search, query.page, query.category, query.sub_category, filters, searchProducts]);

  const applyFilter = (filter) => {
    setFilters(filter);
  };

  const onPageChange = (page) => {
    addQuery({ page });
  };

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
                <span className="heading-text">
                  {totalProducts} Search result found{" "}
                  {query.search ? `for '${query.search}'` : null}
                </span>
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
              <AppPagination
                onPageChange={onPageChange}
                total={totalProducts}
                limit={limit}
                page={query.page ?? 1}
              />
            </div>
          </Col>
        </Row>
      </div>
      <HomeFooter />
    </div>
  );
}

export default ProductSearch;
