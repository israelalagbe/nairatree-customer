import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import error from "../../img/error.png";
import "./index.scss";

/**
 * 
 * @param {object} props 
 * @param {string} [props.img]
 * @param {string} [props.inputText]
 * @param {string} [props.errorMessage]
 */
function AuthInput({ img, inputText,  errorMessage }) {
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
        {errorMessage ? (
          <div className="error">
            <img src={error} alt="#" />
            &nbsp;
            <p>{errorMessage}</p>
          </div>
        ) : (
          ""
        )}
      
    </div>
  );
}

export default AuthInput;
