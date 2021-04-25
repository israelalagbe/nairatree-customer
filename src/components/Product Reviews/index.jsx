import React from "react";
import "./index.scss";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

function ProductReview() {
  return (
    <div className="productReview">
      <QuestionAnswerIcon />
      <h4>This product has no reviews yet.</h4>
    </div>
  );
}

export default ProductReview;
