import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import error from "../../img/error.png";
import "./index.scss";

/**
 *
 * @param {object} props
 * @param {string} [props.img]
 * @param {string} [props.inputText]
 * @param {string} [props.errorMessage]
 * @param {*} [props.type]
 * @param {string} [props.id]
 * @param {string} [props.value]
 * * @param {boolean} [props.required]
 *  * @param {string} [props.name]
 * @param {(any)=>any} [props.onChange]
 */
function AuthInput({
  img,
  inputText,
  errorMessage,
  type,
  id,
  value,
  onChange,
  name,
  required,
}) {
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
          name={name}
          required={required}
        />
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
