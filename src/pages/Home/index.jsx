import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Row, Col } from "reactstrap";
import "./index.scss";
import promoImage1 from "../../img/promotion-image-1.png";
import promoImage2 from "../../img/promotion-image2.png";
import promoImage3 from "../../img/promotion-image3.png";
import bannerPromo from "../../img/banner-promo.png";
import bannerPromo2 from "../../img/banner-promo-2.png";
import HomeFooter from "../../components/HomeFooter";

import ProductItem from "../../components/ProductItem";
import { Link } from "react-router-dom";
import { HomeCategoryListComponent } from "../../components/HomeCategoryListComponent";
import { HomePopularBands } from "../../components/HomePopularBands";
import useProductStore from "../../stores/useProductStore";
import LoadingTrigger from "../../components/LoadingTrigger";
import useAuthentication from "../../stores/useAuthentication";
import SliderButton from "../../components/HorizontalSlider/SliderButton/SliderButton";

export default function Home() {
  const { user } = useAuthentication();
  const {
    productsLoading,
    products,
    fetchProducts,

    dealsOfTheDay,
    dealsOfTheDayLoading,
    fetchDealOfTheDay,

    recentlyViewed,
    recentlyViewedLoading,
    fetchRecentlyViewed,

    trendingProducts,
    trendingProductsLoading,
    fetchTrendingProducts,
  } = useProductStore();

  useEffect(() => {
    fetchProducts();
    fetchDealOfTheDay();
    fetchTrendingProducts();
  }, []);

  useEffect(() => {
    if (user) {
      fetchRecentlyViewed();
    }
  }, [fetchRecentlyViewed, user]);

  return (
    <>
      <div className="home-page">
        <Header />
        <div className="mt-3"></div>
        <Row>
          <Col md={1}></Col>
          <Col md={8}>
            <div className="products-content">
              <section>
                <img
                  src={bannerPromo}
                  alt="Banner Promotion"
                  className="banner-promo"
                />
                <div className="banner-toggle">
                  <span className="ball"></span>
                  <span className="ball active"></span>
                  <span className="ball"></span>
                </div>
              </section>
              <HomeCategoryListComponent />
              <br />
              <HomePopularBands />
              <br />
              {user && recentlyViewed.length ? (
                <ProductList
                  topSpacing="1.5rem"
                  products={recentlyViewed}
                  isLoading={recentlyViewedLoading}
                  allProductsLink="/products"
                  title="Recently Viewed"
                />
              ) : null}
              <ProductList
                topSpacing="1.5rem"
                isLoading={trendingProductsLoading}
                products={trendingProducts}
                allProductsLink="/products"
                title="Trending Deals"
              />
              <ProductList
                topSpacing="1.5rem"
                isLoading={dealsOfTheDayLoading}
                products={dealsOfTheDay}
                allProductsLink="/products"
                title="Deal of the Day"
              />
              <img
                src={bannerPromo2}
                alt="Banner Promotion 2"
                className="banner-promo mb-4 mt-4"
              />
              <ProductList
                topSpacing="1.5rem"
                isLoading={productsLoading}
                products={products}
                allProductsLink="/products"
                title="Items you may like"
              />
            </div>
          </Col>
          <Col md={3} className="sidebar-container">
            <div className="sidebar-promo">
              <img
                className="fill-container"
                src={promoImage1}
                alt="Promotion 1"
              />
            </div>
            <div className="sidebar-promo mt-3">
              <img
                className="fill-container"
                src={promoImage2}
                alt="Promotion 2"
              />
            </div>
            <div className="sidebar-promo mt-3">
              <img
                className="fill-container"
                src={promoImage3}
                alt="Promotion 3"
              />
            </div>
          </Col>
        </Row>
      </div>
      <HomeFooter />
    </>
  );
}

/**
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.allProductsLink
 * @param {string} props.topSpacing
 * @param {boolean} [props.isLoading]
 * @param {Product[]} props.products
 */
function ProductList({
  title,
  allProductsLink,
  products,
  isLoading,
  topSpacing,
}) {
  const [showScrollLeftButton, setShowScrollLeftButton] = useState(false);
  const [showScrollRightButton, setShowScrollRightButton] = useState(false);
  const sliderContent = React.createRef();

  useEffect(() => {
    if (
      sliderContent.current?.scrollWidth > sliderContent.current?.clientWidth
    ) {
      setShowScrollRightButton(true);
    }
  }, []);

  if (!isLoading && !products.length) {
    return null;
  }

  const onScroll = (e) => {
    const isScrolledLeft = sliderContent.current.scrollLeft <= 0;
    setShowScrollLeftButton(!isScrolledLeft);

    const isScrolledRight =
      sliderContent.current?.scrollWidth -
        sliderContent.current?.offsetWidth ===
      sliderContent.current.scrollLeft;
    setShowScrollRightButton(!isScrolledRight);
  };

  return (
    <section
      className="product-list-container"
      style={{ marginTop: topSpacing }}
    >
      <div className="heading">
        <span className="heading-text">{title}</span>
        <Link to={allProductsLink} className="show-all">
          Show all +
        </Link>
      </div>
      {showScrollRightButton ? (
        <SliderButton
          click={() => {
            sliderContent.current.scrollBy(30, 0);
          }}
          position="right"
        />
      ) : null}
      {showScrollLeftButton ? (
        <SliderButton
          click={() => {
            sliderContent.current.scrollBy(-30, 0);
          }}
          position="left"
        />
      ) : null}
      <div
        className="product-list-card"
        ref={sliderContent}
        onScroll={onScroll}
      >
        <LoadingTrigger isLoading={isLoading && !products.length}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
          {products.length === 0 ? (
            <h4 className="no-product-message">
              No {title} has been added recently.
            </h4>
          ) : null}
        </LoadingTrigger>
      </div>
    </section>
  );
}
