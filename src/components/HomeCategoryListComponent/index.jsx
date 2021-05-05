import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategoryStore from "../../stores/useCategoryStore";
import clipText from "../../util/clipText";
import LoadingTrigger from "../LoadingTrigger";
import "./index.scss";
import SliderButton from "../HorizontalSlider/SliderButton/SliderButton";

export const HomeCategoryListComponent = () => {
  const { categories, categoriesLoading } = useCategoryStore();
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
    <section className="categories-list-card">
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
        className="categories-list-main"
        ref={sliderContent}
        onScroll={onScroll}
      >
        <LoadingTrigger isLoading={categoriesLoading}>
          {categories.map((category) => (
            <CategoryItem key={category._id} category={category} />
          ))}
        </LoadingTrigger>
      </div>
    </section>
  );
};

/**
 *
 * @param {Object} props
 * @param {Category} props.category
 */
function CategoryItem({ category }) {
  return (
    <Link
      to={`/products?category=${category.name}`}
      className="category-item pointer"
    >
      <img src={category.image_url} alt="" />
      <span>{clipText(category.name, 20)}</span>
    </Link>
  );
}
