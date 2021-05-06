import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useBrandStore from "../../stores/useBrandStore";
import clipText from "../../util/clipText";
import LoadingTrigger from "../LoadingTrigger";
import "./index.scss";
import SliderButton from "../HorizontalSlider/SliderButton/SliderButton";

export const HomePopularBands = () => {
  const { popularBrands, popularBrandsLoading } = useBrandStore();
  const [showScrollLeftButton, setShowScrollLeftButton] = useState(false);
  const [showScrollRightButton, setShowScrollRightButton] = useState(false);
  const sliderContent = React.createRef();

  useEffect(() => {
    if (
      sliderContent.current?.scrollWidth > sliderContent.current?.clientWidth
    ) {
      setShowScrollRightButton(true);
    }
  }, [popularBrands, popularBrandsLoading]);

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
    <section className="home-popular-bands-component">
      <div className="heading">
        <span className="heading-text">Popular Brands</span>
        {/* <Link to={'popular'} className="show-all">
          Show all +
        </Link> */}
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
      <div className="brands-list-card" ref={sliderContent} onScroll={onScroll}>
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
function BrandItem({ brand }) {
  return (
    <Link to={`/products?brand=${brand.name}`} className="brand-item pointer">
      <img src={brand.image} alt="" />
      <span>{clipText(brand.name, 20)}</span>
    </Link>
  );
}
