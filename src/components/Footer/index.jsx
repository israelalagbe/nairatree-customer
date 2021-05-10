import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function Footer() {
  return (
    <div className="footer">
      <Link to="/privacy-policy">Privacy Policy</Link>

      <Link to="/about-us">About</Link>

      <Link to="/blog">Blog</Link>

      <Link to="/payment-policy">Payment Policy</Link>
    </div>
  );
}

export default Footer;
