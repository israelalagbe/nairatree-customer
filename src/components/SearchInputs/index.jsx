import React from "react";
import { Form } from "reactstrap";
import AppCheck from "../AppCheck";
import "./index.scss";

function SearchInputs() {
  return (
    <div className="search-inputs">
      <div>
        <p>Category </p>
        <p>Phones and accessories</p>
      </div>

      <Form>
        <div className="main-inputs">
          <h6>Price (#)</h6>
          <div className="box">
            <h6>100</h6>
            <p>-</p>
            <h6>100</h6>
          </div>
          <div>
            <h6> Color</h6>
            <AppCheck checkText="Red" />
            <AppCheck checkText="Crimson" />
            <AppCheck checkText="Green" />
            <AppCheck checkText="Yellow" />
          </div>

          <div>
            <h6> Condition</h6>
            <AppCheck checkText="New" />
            <AppCheck checkText="Refurbished" />
            <AppCheck checkText="Used " />
            <AppCheck checkText="Open Box" />
          </div>

          <div>
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
