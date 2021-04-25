import React from "react";
import AppRating from "../AppRating";
import "./index.scss";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

function ProductRating() {
  const ratingValue = 4;
  return (
    <div className="tabRating">
      <div className="productRating">
        <h4>Product Rating</h4>
        <div className="productRating2">
          <h5>{ratingValue}/5</h5>
          <AppRating value={ratingValue} />
          <p>{ratingValue} rating</p>
        </div>
      </div>
      <div className="productReview">
        <h4>Product Reviews</h4>
        <QuestionAnswerIcon />
        <h6>This product has no reviews yet.</h6>
      </div>
    </div>
  );
}

export default ProductRating;
