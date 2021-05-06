import React from "react";
import "./index.scss";
import HomeFooter from "../../components/HomeFooter";
import Header from "../../components/Header";

function AboutUs() {
  return (
    <>
      <Header />
      <div className="about-us">
        <div className="about-first">
          <div className="mt-5 main-about">
            <h3>About us</h3>

            <p>
              NairaTree is a newly starting E-commerce platform currently
              operating in Nigeria only. Our first branch is located at Lekki,
              Lagos State.
            </p>
            <p>
              We are focused on delivering quality goods to our esteemed
              customers in the fastest time possible.
            </p>
            <p>
              Our target is to create an excellent reputation among our
              customers, as well as deliver value on moneypaid to us.
            </p>
            <p>
              We look forward to being an indispensable go-to platorm in the
              Nigerian E-commerce space in the nearest future
            </p>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
}

export default AboutUs;
