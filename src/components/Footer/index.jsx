import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

function Footer() {
  return (
    <div className="footer">
      <Link to="/">Privacy Policy</Link>

      <Link to="/">About</Link>

      <Link to="/">Blog</Link>

      <Link to="/">Payment Policy</Link>
    </div>
  );
}

export default Footer;
