import React, { useState } from "react";
import Copyright from "../../../components/Copyright";
import Footer from "../../../components/Footer";
import AppLogo from "../../../components/AppLogo";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, useHistory } from "react-router-dom";
import "./index.scss";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeliveryDetails from "../../../components/DeliveryDetails";
import PaymentMethod from "../../../components/PaymentMethod";

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
  const history = useHistory();



  const checkout = async (payload) => {
    console.log(payload)
  }
  
  return (
    <>
      <div className="checkout-details">
        <AppLogo />
        <div className="go-back">
          <ArrowBackIcon />
          <span onClick={history.goBack}  className='pointer'> Address Information</span>
        </div>

        <div className="accord-main">
          <div className={classes.root}>
            <Accordion
              expanded={expansionIndex === 0}
              
            >
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
            <Accordion
              expanded={expansionIndex === 1}
              
            >
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
