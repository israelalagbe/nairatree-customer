import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import AppCheck from "../AppCheck";

function SearchInputs() {
  return (
    <div>
      <div>
        <p>Category </p>
        <h5>Phones and accessories</h5>
      </div>
      <Form>
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
      </Form>
    </div>
  );
}

export default SearchInputs;
