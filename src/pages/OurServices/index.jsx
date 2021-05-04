import React from "react";
import "./index.scss";
import HomeFooter from "../../components/HomeFooter";
import Header from "../../components/Header";

function OurServices() {
  return (
    <>
      <Header />
      <div className="our-services">
        <div className="services-first">
          <div className="mt-5 main-services">
            <h3>Our Services</h3>

            <div>
              <h4>NairaTree Repairs</h4>
              <p>
                NairaTree offers a service in repair and fixing of gadgets and
                computers- from Android phones, to iPhones, to Windows PC and
                MacBook.
              </p>
              <p>
                You can learn more about this service by contacting us via
                email, the web chat, Whatsapp or Phone Call.
              </p>
            </div>

            <div>
              <h4>Procurement Services</h4>
              <p>
                NairaTree also offers a procurement service through our junior
                companies Yankee2Naija and YankeeShops.
              </p>
              <p>
                To know more about these services, please contact Yankee2Naija
                via Twitter (@Yankee2Naija) and Yankeeshops via Twitter
                (@YourYankeeShops).
              </p>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
}

export default OurServices;
