import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Row, Col } from "reactstrap";
import "./index.scss";
import promoImage1 from "../../img/promotion-image-1.png";
import promoImage2 from "../../img/promotion-image2.png";
import bannerPromo from "../../img/banner-promo.png";

import ProductItem from "../../components/ProductItem";
import { Link } from "react-router-dom";
import { HomeCategoryListComponent } from "../../components/HomeCategoryListComponent";
import { HomePopularBands } from "../../components/HomePopularBands";
import useProductStore from "../../stores/useProductStore";
import LoadingTrigger from "../../components/LoadingTrigger";
import HeaderCategory from "../../components/HeaderCategory";
import useAuthentication from "../../stores/useAuthentication";
import HorizontalSlider from "../../components/HorizontalSlider/HorizontalSlider";
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
  }, [user]);

  return (
    <div className="home-page">
      <Header />
      <div className="mt-3"></div>
      <Row>
        <Col md={1}></Col>
        <Col md={8}>
          <div className="products-content">
            <section>
              <img src={bannerPromo} alt="Banner Promotion" className="banner-promo" />
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
                topSpacing ="1.5rem"
                products={recentlyViewed}
                isLoading={recentlyViewedLoading}
                allProductsLink="/products"
                title="Recently Viewed"
              />
            ) : null}
            <ProductList
              topSpacing ="1.5rem"
              isLoading={trendingProductsLoading}
              products={trendingProducts}
              allProductsLink="/products"
              title="Trending Deals"
            />
            <ProductList
              topSpacing ="1.5rem"
              isLoading={dealsOfTheDayLoading}
              products={dealsOfTheDay}
              allProductsLink="/products"
              title="Deal of the Day"
            />
            <ProductList
              topSpacing ="1.5rem"
              isLoading={productsLoading}
              products={products}
              allProductsLink="/products"
              title="Items you may like"
            />
          </div>
        </Col>
        <Col md={3} className="sidebar-container">
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

/**
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.allProductsLink
 * @param {string} props.topSpacing
 * @param {boolean} [props.isLoading]
 * @param {Product[]} props.products
 */
function ProductList({ title, allProductsLink, products, isLoading, topSpacing }) {
  if (!isLoading && !products.length) {
    return null;
  }

  const sliderContent = React.createRef();

  return (
    <section className="product-list-container" style={{marginTop: topSpacing}} >
      <div className="heading">
        <span className="heading-text">{title}</span>
        <Link to={allProductsLink} className="show-all">
          Show all +
        </Link>
      </div>
      <SliderButton
              click={() => {
                sliderContent.current.scrollBy(30,0)
              }}
              position="right"
            />
  
        <div className="product-list-card" ref={sliderContent}>
          <LoadingTrigger isLoading={isLoading && !products.length}>
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
            {products.length === 0 ? (
              <h4 className="no-product-message">No {title} has been added recently.</h4>
            ) : null}
          </LoadingTrigger>
        </div>
     
    </section>
  );
}
