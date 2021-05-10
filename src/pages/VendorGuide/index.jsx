import React from "react";
import "./index.scss";
import HomeFooter from "../../components/HomeFooter";
import Header from "../../components/Header";

function VendorGuide() {
  return (
    <>
      <Header />
      <div className="vendor-guide">
        <div className="vendor-first">
          <div className="mt-5 main-vendor">
            <h3>Vendor Guide</h3>

            <p>You can become a vendor on NairaTree.</p>
            <p>
              To know more, contact our customer care service through any of the
              above listed channels.
            </p>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
}

export default VendorGuide;
