import React from "react";
import AppLogo from "../../components/AppLogo";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./index.scss";

function Blog() {
  const history = useHistory();
  return (
    <div className="blog">
      <AppLogo />
      <div className="blog-first">
        <div className="go-back" onClick={history.goBack}>
          <ArrowBackIcon />
          <h6>Back</h6>
        </div>
        <div className="mt-5">
          <h3>Blog</h3>
        </div>
      </div>
    </div>
  );
}

export default Blog;
