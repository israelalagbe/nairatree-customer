import React, { useState } from "react";
import Copyright from "../../../components/Copyright";
import Footer from "../../../components/Footer";
import AppLogo from "../../../components/AppLogo";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// @ts-ignore
import { useHistory } from "react-router-dom";
import "./index.scss";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeliveryDetails from "../../../components/DeliveryDetails";
import PaymentMethod from "../../../components/PaymentMethod";
import useOrderStore from "../../../stores/useOrderStore";
import useAuthentication from "../../../stores/useAuthentication";
import useCartStore from "../../../stores/useCartStore";
import env from "../../../config/env";
import Notify from "../../../util/Notify";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function CheckoutDetails() {
  const classes = useStyles();
  const [expansionIndex, setExpansionIndex] = useState(0);
  const { user } = useAuthentication();

  const { carts } = useCartStore();

  const defaultAddress = user.address_book.find(
    (item) => item.is_default === true
  );

  const history = useHistory();

  // @ts-ignore
  const { updateOrderPaymentStatus, saveCheckout } = useOrderStore();

  // @ts-ignore
  const checkout = async (payload) => {
    const cartPayload = carts.map((cart) => ({
      product: cart.product.id,
      quantity: cart.quantity,
      variant: cart.variant,
    }));

    saveCheckout(
      {
        products: cartPayload,
        delivery_address: defaultAddress,
      },
      openPaymentPopup
    );
  };

  /**
   *
   * @param {{payment_reference: string, amount: number}} paymentInfo
   */
  const openPaymentPopup = (paymentInfo) => {
    const amountInKobo = paymentInfo.amount * 100;
    const PaystackPop = window["PaystackPop"];

    const handler = PaystackPop.setup({
      key: env.paystackKey,
      email: user.email,
      ref: paymentInfo.payment_reference,
      amount: amountInKobo,
      callback: function (response) {
        updateOrderPaymentStatus({
          payment_reference: response.reference,
          status: "success",
        });
        history.push("/");
      },
      onClose: function () {
        Notify.warning("You cancelled your payment!");
      },
    });
    handler.openIframe();
  };

  return (
    <>
      <div className="checkout-details">
        <AppLogo />
        <div className="go-back" onClick={history.goBack}>
          <ArrowBackIcon />
          <h6>Back</h6>
        </div>

        <div className="accord-main">
          <div className={classes.root}>
            <Accordion expanded={expansionIndex === 0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={() => setExpansionIndex(0)}
              >
                <Typography className={classes.heading}>Delivery</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <DeliveryDetails onNext={() => setExpansionIndex(1)} />
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expansionIndex === 1}>
              <AccordionSummary
                onClick={() => setExpansionIndex(1)}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  Payment Method
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <PaymentMethod onCheckout={checkout} />
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="checkout-details-bottom">
        <Copyright />
        <Footer />
      </div>
    </>
  );
}

export default CheckoutDetails;
