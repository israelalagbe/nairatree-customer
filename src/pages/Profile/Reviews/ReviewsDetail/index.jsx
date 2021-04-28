import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AppButton from "../../../../components/AppButton";
import "./index.scss";
import useOrderStore from "../../../../stores/useOrderStore";

const labels = {
  1: "I hate it",

  2: "I dont like it",

  3: "I have mixed feeling",

  4: "I like it",

  5: "I love it",
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

const useStyles2 = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

function ReviewDetails() {
  const history = useHistory();
  const { orders } = useOrderStore();

  const [selectedOrder, setSelectedOrder] = useState(
    orders.find((item) => item.id)
  );

  const [value, setValue] = React.useState("");
  const [hover, setHover] = React.useState(-1);
  const { userReviews, reviewsLoading } = useOrderStore();

  const [review, setUserReview] = React.useState({
    name: "",
    title: "",
    description: "",
  });

  const classes = useStyles();
  const classes2 = useStyles2();

  const handleChange = async (e) => {
    setUserReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      product_id: selectedOrder.products[0].product._id,
      order_id: selectedOrder.id,
      rating: value,
      review: {
        name: review.name,
        title: review.title,
        description: review.description,
      },
    };
    userReviews(payload, () => history.push("/"));
  };

  return (
    <div className="reviewsDetails">
      <div className="reviewsDetailsBack">
        <div className="go-back" onClick={history.goBack}>
          <ArrowBackIcon />
        </div>
        <h3>Rate & Review</h3>
      </div>
      <div className="reviewsDetailsSelect">
        <h4>SELECT THE STARS TO RATE THE PRODUCT</h4>
        <div className="reviewsDetailsSelectImg">
          <div className="reviewsDetailsSelectImgMain">
            <img
              src={selectedOrder?.products[0].product.images[0]}
              alt="Selected Order"
            />
          </div>
          <div>
            <h4>{selectedOrder?.products[0].product.name}</h4>
            <div className={classes.root}>
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {value !== null && (
                <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="reviewsDetailsLeave">
        <h4>LEAVE A REVIEW</h4>
        <form
          className={classes2.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="title"
            name="title"
            value={userReviews.title}
            label="Review Title"
            onChange={handleChange}
          />
          <TextField
            id="name"
            name="name"
            value={userReviews.name}
            label="Your Name"
            onChange={handleChange}
          />
          <TextField
            id="description"
            name="description"
            value={userReviews.description}
            label="Description"
            onChange={handleChange}
          />
          <AppButton buttonText="Submit Your Review" classname="reviewButton" />
        </form>
      </div>
    </div>
  );
}

export default ReviewDetails;
