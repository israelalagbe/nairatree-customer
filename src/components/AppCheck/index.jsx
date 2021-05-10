import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

function AppCheck({ checkText, isChecked, setChecked }) {
  return (
    <FormGroup check>
      <Label check>
        <Input type="checkbox" checked={isChecked} onChange={(e)=>setChecked(e.target.checked)} /> {checkText}
      </Label>
    </FormGroup>
  );
}

export default AppCheck;
