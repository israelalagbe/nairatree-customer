import React from "react";
import Header from "../../components/Header";
import { Row, Col } from "reactstrap";
import SearchInputs from "../../components/SearchInputs";

function ProductSearch() {
  return (
    <div>
      <Header />
      <div>
        <Row>
          <Col xs="4">
            <SearchInputs />
          </Col>
          <Col xs="8">
            <p>127 Search result for "IPHONE 12"</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProductSearch;
