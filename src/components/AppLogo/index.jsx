import React from "react";
import "./index.scss";
import logo from "../../img/logo-coloured.svg";

function AppLogo() {
  return (
    <div className="app-auth-navbar">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default AppLogo;
