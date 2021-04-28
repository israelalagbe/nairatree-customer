import React, { useEffect, useState } from "react";
import Copyright from "../../../components/Copyright";
import Footer from "../../../components/Footer";
import AppLogo from "../../../components/AppLogo";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// @ts-ignore
import { useHistory, useLocation } from "react-router-dom";
import "./index.scss";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// @ts-ignore
import DeliveryDetails from "../../../components/DeliveryDetails";
import PaymentMethod from "../../../components/PaymentMethod";
import useOrderStore from "../../../stores/useOrderStore";
import useAuthentication from "../../../stores/useAuthentication";
import useCartStore from "../../../stores/useCartStore";
import env from "../../../config/env";
import Notify from "../../../util/Notify";
import GuestDeliveryDetails from "../../../components/DeliveryDetails/GuestDeliveryDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function GuestCheckout() {
  const location = useLocation();

  const classes = useStyles();
  const [expansionIndex, setExpansionIndex] = useState(0);
  const { user } = useAuthentication();

  const { carts, setLocalCarts} = useCartStore();

  const history = useHistory();


  const { updateOrderPaymentStatus, saveCheckoutGuest } = useOrderStore();

  // @ts-ignore
  // @ts-ignore
  const checkout = async (payload) => {
    const cartPayload = carts.map((cart) => ({
      product: cart.product.id,
      quantity: cart.quantity,
      variant: cart.variant,
    }));

    // @ts-ignore
    const address = {...location.state?.address};

    if(address.phone.startsWith('0')){
      address.phone = address.phone.replace('0','')
    }
    address.phone = "+234" + address.phone;

    // const defaultAddress = {
    //   name: address.name,
    //   phone: address.,
    //   alternate_phone: "+2349090909091",
    //   address: "Yetunde Brown, Gbagada",
    //   region: "Lagos",
    //   city: "Lagos",
    //   additional_info: "White house with a green gate",
    // };

    saveCheckoutGuest(
      {
        products: cartPayload,
        delivery_address: address,
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
      // @ts-ignore
      email: location.state.address.email,
      ref: paymentInfo.payment_reference,
      amount: amountInKobo,
      callback: function (response) {
        updateOrderPaymentStatus(
          {
            payment_reference: response.reference,
            status: "success",
          },
          (order) => {
            setLocalCarts([])
            history.push(`/guest/orders/order-details/${order.payment_reference}`)
          }
        );
      },
      onClose: function () {
        Notify.warning("You cancelled your payment!");
      },
    });
    handler.openIframe();
  };

  useEffect(() => {
    // @ts-ignore
    if (!location.state?.address) {
      history.push("/guest-checkout-address");
    }

    // @ts-ignore
  }, [history, location.state?.address]);

  return (
    <>
      <div className="guest-checkout">
        <AppLogo />
        <div className="go-back" onClick={() => history.push("/guest-checkout-address")}>
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
                  <GuestDeliveryDetails onNext={() => setExpansionIndex(1)} />
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
                <Typography className={classes.heading}>Payment Method</Typography>
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

export default GuestCheckout;
