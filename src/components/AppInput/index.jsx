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

function AppInput({ img, inputText, errorDiv }) {
  return (
    <Row className="inputRow">
      <Col md="3" />
      <Col md="6">
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              {img ? <img src={img} alt="icon" /> : ""}
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder={inputText} />
        </InputGroup>
      </Col>
      <Col md="1">
        {errorDiv ? (
          <div className="error">
            <img src={error} alt="#" />
            <p>{errorDiv}</p>
          </div>
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
}

export default AppInput;
