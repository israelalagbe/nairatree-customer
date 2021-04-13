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

export default function Home() {
  const {
    productsLoading,
    products,
    fetchProducts,

    dealsOfTheDay,
    dealsOfTheDayLoading,
    fetchDealOfTheDay,

    trendingProducts,
    trendingProductsLoading,
    fetchTrendingProducts
  } = useProductStore();

  useEffect(() => {
    fetchProducts();
    fetchDealOfTheDay();
    fetchTrendingProducts();
  }, []);
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
            <ProductList products={[]} allProductsLink="/products" title="Recently Viewed" />
            <br />
            <ProductList
              isLoading={trendingProductsLoading}
              products={trendingProducts}
              allProductsLink="/products"
              title="Trending Deals"
            />
            <br />
            <ProductList
              isLoading={dealsOfTheDayLoading}
              products={dealsOfTheDay}
              allProductsLink="/products"
              title="Deal of the Day"
            />
            <br />

            <ProductList
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
 * @param {boolean} [props.isLoading]
 * @param {Product[]} props.products
 */
function ProductList({ title, allProductsLink, products, isLoading }) {
  return (
    <section className="product-list-container">
      <div className="heading">
        <span className="heading-text">{title}</span>
        <Link to={allProductsLink} className="show-all">
          Show all +
        </Link>
      </div>
      <div className="product-list-card">
        <LoadingTrigger isLoading={isLoading && !products.length}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
          {products.length === 0 ? (
            <h4 className="no-product-message">No products found to display</h4>
          ) : null}
        </LoadingTrigger>
      </div>
    </section>
  );
}
