import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import bannerPromo from "../../img/banner-promo.png";
import bannerPromo3 from "../../img/banner-promo-3.png";
import bannerPromo5 from "../../img/banner-promo-5.png";
import { Link } from "react-router-dom";

const items = [
  {
    src: bannerPromo,
    key: "1",
  },
  {
    src: bannerPromo3,
    key: "2",
  },
  {
    src: bannerPromo5,
    key: "3",
  },
];

const AppCarousel = () => (
  <Link to="/products">
    <UncontrolledCarousel items={items} />
  </Link>
);

export default AppCarousel;
