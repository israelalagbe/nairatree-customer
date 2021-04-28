import React from "react";
import "./index.scss";
import logo from "../../img/logo-coloured.svg";
import { Link } from "react-router-dom";

function AppLogo() {
  return (
    <Link to="/" className="app-auth-navbar">
      <img src={logo} alt="logo" />
    </Link>
  );
}

export default AppLogo;
