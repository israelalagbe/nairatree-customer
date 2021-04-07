import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Row,
  Col,
} from "reactstrap";
import error from "../../img/error.png";
import "./index.scss";

function AuthInput({ img, inputText, errorDiv }) {
  return (
    <div className="auth-input-component">
      
        <InputGroup size='lg'>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              {img ? <img src={img} alt="icon" /> : ""}
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder={inputText} />
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
