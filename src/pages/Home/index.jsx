import React from "react";
import Header from "../../components/Header";
import { Row, Col } from "reactstrap";
import "./index.scss";
import promoImage1 from "../../img/promotion-image-1.png";
import promoImage2 from "../../img/promotion-image2.png";
import bannerPromo from "../../img/banner-promo.png";

import categoryIconSample from "../../img/category-sample-icon.png";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <div className="mt-3"></div>
      <Row>
        <Col md={2}></Col>
        <Col md={7}>
          <div className="products-content">
            <section>
              <img src={bannerPromo} alt="Banner Promotion" className="banner-promo" />
              <div className="banner-toggle">
                <span className="ball"></span>
                <span className="ball active"></span>
                <span className="ball"></span>
              </div>
            </section>
            <section className="categories-list-card">
                {[1,2,3,].map(()=> <CategoryItem />)}
            </section>
            <br/>
            <section className='products-list-card'>

            </section>
            <br/>
            <section className='products-list-card'>

            </section>
            <br/>
            <section className='products-list-card'>

            </section>
          </div>
        </Col>
        <Col md={3}>
          <div className="sidebar-promo">
            <img className="fill-container" src={promoImage1} alt="Promotion 1" />
          </div>
          <div className="sidebar-promo mt-3">
            <img className="fill-container" src={promoImage2} alt="Promotion 2" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

function CategoryItem() {
  return (
    <div className="category-item pointer">
      <img src={categoryIconSample} alt="" />
      <span>Men's</span>
    </div>
  );
}
