import React from "react";
import "./index.scss";
import HomeFooter from "../../components/HomeFooter";
import Header from "../../components/Header";

function CustomerSupport() {
  return (
    <>
      <Header />
      <div className="customer-support">
        <div className="customer-first">
          <div className="mt-5 main-customer">
            <h3>Customer Support</h3>

            <p>
              Our customer care support is available to attend to your enquiries
              between hours of 9am and 5pm daily via any of the following
              channels
            </p>
            <p> – Twitter, Facebook, Instagram, WebChat, Whatsapp and Phone.</p>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
}

export default CustomerSupport;
