import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Row,
  Col,
} from "reactstrap";
import "./index.scss";

function AppInput({ img, inputText }) {
  return (
    <Row>
      <Col>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              {img ? <img src={img} alt="icon" /> : ""}
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder={inputText} />
        </InputGroup>
      </Col>
    </Row>
  );
}

export default AppInput;
