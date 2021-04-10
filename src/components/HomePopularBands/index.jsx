import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useBrandStore from "../../stores/useBrandStore";
import clipText from "../../util/clipText";
import LoadingTrigger from "../LoadingTrigger";
import './index.scss';

export const HomePopularBands = () => {
  const { popularBrands, popularBrandsLoading } = useBrandStore();


  
  return (
    <section className="home-popular-bands-component">
      <div className="heading">
        <span className="heading-text">Popular Brands</span>
        {/* <Link to={'popular'} className="show-all">
          Show all +
        </Link> */}
      </div>
      <div className="brands-list-card">
      <LoadingTrigger isLoading={popularBrandsLoading}>
        {popularBrands.map((brand) => (
          <BrandItem key={brand.id} brand={brand} />
        ))}
      </LoadingTrigger>
      </div>
      
    </section>
  );
};

/**
 * 
 * @param {Object} props 
 * @param {Brand} props.brand
 */
function BrandItem({brand}) {
  return (
      <Link to={`/products?brand=${brand.name}`} className="brand-item pointer">
        <img src={brand.image} alt="" />
        <span>{clipText(brand.name, 20)}</span>
      </Link>
  );
}
