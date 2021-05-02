import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AppButton from "../../../../components/AppButton";
import "./index.scss";
import useOrderStore from "../../../../stores/useOrderStore";
import useAuthentication from "../../../../stores/useAuthentication";
import Notify from "../../../../util/Notify";

const labels = {
  1: "I hate it",
  2: "I dont like it",
  3: "I have mixed feeling",
  4: "I like it",
  5: "I love it",
};

const useStyles = makeStyles({
  root: {
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
  const user = useAuthentication((auth) => auth.user);
  /**
   * @type {{id:string,product_id:string}}
   */
  const { id, product_id } = useParams();
  const { orders, fetchOrders } = useOrderStore();

  const selectedOrder = orders.find((item) => item.id === id);

  const selectedProduct = selectedOrder?.products?.find?.(
    (product) => product.product._id === product_id
  ).product;

  const viewProduct = (id) => {
    history.push(`/product-details/${id}`);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const { userReviews, reviewsLoading } = useOrderStore();

  const [review, setReview] = React.useState({
    name: user.first_name,
    title: "",
    description: "",
  });

  const classes = useStyles();
  const classes2 = useStyles2();

  const handleChange = async (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value) {
      return Notify.error("Please add your star rating first!");
    }
    const payload = {
      product_id: product_id,
      order_id: selectedOrder.id,
      rating: value,
      review: {
        name: review.name,
        title: review.title,
        description: review.description,
      },
    };
    userReviews(payload, () => history.push("/profile"));
    Notify.success("Order Reviewed Successfully");
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
        {selectedOrder && selectedProduct ? (
          <div className="reviewsDetailsSelectImg">
            <div
              className="reviewsDetailsSelectImgMain pointer"
              onClick={() => viewProduct(selectedProduct._id)}
            >
              <img src={selectedProduct.images[0]} alt="Selected Order" />
            </div>
            <div>
              <h4>{selectedProduct.name}</h4>
              <div className={classes.root}>
                <br />
                <br />
                <Rating
                  size="large"
                  name="hover-feedback"
                  value={value}
                  precision={1}
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
        ) : null}
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
            required
            id="title"
            name="title"
            value={review.title}
            label="Review Title"
            onChange={handleChange}
            placeholder="I like it!"
          />
          <TextField
            required
            id="name"
            name="name"
            value={review.name}
            label="Your Name"
            onChange={handleChange}
          />
          <TextField
            required
            id="description"
            name="description"
            value={review.description}
            label="Review Description"
            onChange={handleChange}
            placeholder="Tell us more"
          />
          <AppButton buttonText="Submit Your Review" classname="reviewButton" />
        </form>
      </div>
    </div>
  );
}

export default ReviewDetails;
