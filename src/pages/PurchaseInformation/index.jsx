import React from "react";

import "./index.scss";
import HomeFooter from "../../components/HomeFooter";
import Header from "../../components/Header";

function PurchaseInformation() {
  return (
    <>
      <Header />
      <div className="purchase-information">
        <div className="purchase-first">
          <div className="mt-5 main-purchase">
            <h3>Purchase Information</h3>

            <p>
              NairaTree encourages potential customers to be sure and decisive
              about what they want to buy before checking out.{" "}
            </p>
            <p>
              We sincerely frown at return of items upon delivery, except for
              cases where items delivered are different to what customer had
              ordered for.
            </p>
            <p>
              We encourage customers to place a phone call prior to placing an
              order to get clarity on the quality and specifications of items
              they may want to buy.
            </p>
            <p>
              We generally do not accept returns, unless otherwise we are at
              fault for sending a wrong item.
            </p>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
}

export default PurchaseInformation;
