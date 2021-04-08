import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import error from "../../img/error.png";
import "./index.scss";

function AuthInput({ img, inputText, errorDiv, type, id, value, onChange }) {
  return (
    <div className="auth-input-component">
      <InputGroup size="lg">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            {img ? <img src={img} alt="icon" /> : ""}
          </InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder={inputText}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
        />
      </InputGroup>
      {errorDiv ? (
        <div className="error">
          <img src={error} alt="#" />
          &nbsp;
          <p>{errorDiv}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AuthInput;
