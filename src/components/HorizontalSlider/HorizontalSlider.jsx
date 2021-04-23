import React from "react";
import SliderButton from "./SliderButton/SliderButton";
import "./HorizontalSlider.scss";

const HorizontalSlider = ({ children }) => {
  const sliderContent = React.createRef();

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const scrollContent = (change, duration) => {
    let start = sliderContent.current.scrollLeft;
    let currentTime = 0,
      increment = 20;
    const animateScroll = function () {
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      sliderContent.current.scrollLeft = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  const onSliderButtonClick = (change, duration) => {
    scrollContent(change, duration);
  };

  return (
    <>
      <section className="horizontal-slider">
        <div className="horizontal-slider-content">
          <ul ref={sliderContent}>
            <SliderButton
              click={() => onSliderButtonClick(-200, 700)}
              position="left"
            />
            {children}
            <SliderButton
              click={() => onSliderButtonClick(200, 700)}
              position="right"
            />
          </ul>
        </div>
      </section>
    </>
  );
};

export default HorizontalSlider;
