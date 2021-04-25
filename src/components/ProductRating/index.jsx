import React from "react";
import AppRating from "../AppRating";
import "./index.scss";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

/**
 *
 * @param {{product: Product}} props
 */
function ProductRating({product}) {
  return (
    <div className="tabRating">
      <div className="productRating">
        <h4>Product Rating</h4>
        <div className="productRating2">
          <h5>{product.avg_rating}/5</h5>
          <AppRating rating={product.avg_rating} totalRatings={product.no_of_ratings} />
          <p>{product.no_of_ratings} rating</p>
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
