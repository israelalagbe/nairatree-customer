import React from "react";
import Header from "../../components/Header";
import { Row, Col } from "reactstrap";
import SearchInputs from "../../components/SearchInputs";
import ProductItem from "../../components/ProductItem";
import "./index.scss";
import { Link } from "react-router-dom";
import AppPagination from "../../components/AppPagination";

function ProductSearch() {
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
                <span className="heading-text">
                  127 Search result for "IPHONE 12"
                </span>
                <Link to="/products" className="view-all">
                  VIEW ALL
                </Link>
              </div>
              <section className="product-list">
                {new Array(10).fill(null).map(() => (
                  <ProductItem />
                ))}
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
