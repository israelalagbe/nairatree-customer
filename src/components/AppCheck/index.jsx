import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

function AppCheck({ checkText }) {
  return (
    <FormGroup check>
      <Label check>
        <Input type="checkbox" /> {checkText}
      </Label>
    </FormGroup>
  );
}

export default AppCheck;
