import React from "react";
import "./index.scss";

function AppButton({ buttonText, classname }) {
  return <button className={classname}>{buttonText}</button>;
}

export default AppButton;
