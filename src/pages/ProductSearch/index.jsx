import React from "react";
import Header from "../../components/Header";
import { Row, Col } from "reactstrap";
import SearchInputs from "../../components/SearchInputs";
import ProductItem from "../../components/ProductItem";
import "./index.scss";

function ProductSearch() {
  return (
    <div className="product-search">
      <Header />

      <Row>
        <Col xs="4">
          <SearchInputs />
        </Col>
        <Col xs="8">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Col>
      </Row>
    </div>
  );
}

export default ProductSearch;
