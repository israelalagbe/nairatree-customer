import React from "react";
import { Form } from "reactstrap";
import AppCheck from "../AppCheck";
import "./index.scss";
import AppSlider from "../AppSlider";

function SearchInputs() {
  return (
    <div className="search-inputs">
      <div className="first-part">
        <h6 className="category">Category </h6>
        <h6 className="category-2">Phones and accessories</h6>
      </div>

      <Form>
        <div className="main-inputs">
          <div className="price">
            <h6>Price (#)</h6>
            <AppSlider />
            <div className="box">
              <h6>100</h6>
              <p>-</p>
              <h6>100</h6>
            </div>
          </div>

          <div className="mt-4 category-check">
            <h6> Color</h6>
            <AppCheck checkText="Red" />
            <AppCheck checkText="Crimson" />
            <AppCheck checkText="Green" />
            <AppCheck checkText="Yellow" />
          </div>

          <div className="mt-4 category-check">
            <h6> Condition</h6>
            <AppCheck checkText="New" />
            <AppCheck checkText="Refurbished" />
            <AppCheck checkText="Used " />
            <AppCheck checkText="Open Box" />
          </div>

          <div className="mt-4 category-check">
            <h6> Brand</h6>
            <AppCheck checkText="Samsung" />
            <AppCheck checkText="Apple" />
            <AppCheck checkText="Tecno" />
            <AppCheck checkText="Infinix" />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default SearchInputs;