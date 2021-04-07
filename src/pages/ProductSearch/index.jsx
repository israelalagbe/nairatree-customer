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
        <Col md="3">
          <SearchInputs />
        </Col>
        <Col md="9">
          <section className='product-list'>
            {(new Array(10).fill(null)).map(()=> <ProductItem />)}
          </section>
          
          
        </Col>
      </Row>
    </div>
  );
}

export default ProductSearch;
