import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import "./index.scss";

function AppInput({ img, inputText }) {
  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <img src={img} alt="icon" />
        </InputGroupText>
      </InputGroupAddon>
      <Input placeholder={inputText} />
    </InputGroup>
  );
}

export default AppInput;
