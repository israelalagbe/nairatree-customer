import React from "react";
import "./index.scss";
import logo from "../../img/logo-coloured.svg";

function AppLogo() {
  return (
    <div className="app-logo">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default AppLogo;
