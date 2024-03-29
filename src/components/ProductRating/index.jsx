import React from "react";
import AppRating from "../AppRating";
import "./index.scss";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { format } from "date-fns";
import Rating from "@material-ui/lab/Rating";

/**
 *
 * @param {{product: Product}} props
 */
function ProductRating({ product }) {
  return (
    <div className="tabRating">
      <div className="productRating">
        <h4>Product Rating({product.no_of_ratings})</h4>
        <div className="productRating2">
          <h5>{product.avg_rating}/5</h5>
          <AppRating
            rating={product.avg_rating}
            totalRatings={product.no_of_ratings}
          />
          <p>{product.no_of_ratings} rating</p>
        </div>
      </div>
      <div className="productReview">
        <h4>Product Reviews({product.reviews.length})</h4>

        {!product.reviews.length ? (
          <div className="no-review">
            <QuestionAnswerIcon />
            <h6>This product has no reviews yet.</h6>
          </div>
        ) : (
          product.reviews.map((review) => (
            <div className="review">
              <div>
                <Rating name="read-only" value={review.rating} readOnly />
              </div>

              <h5>{review.title}</h5>
              <p>{review.description}</p>
              <h6>
                {format(new Date(review.date), "LLL d, yyyy")} by {review.name}
              </h6>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductRating;
