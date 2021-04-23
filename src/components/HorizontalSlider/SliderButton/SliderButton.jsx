import React from "react";
import Arrow from "../Arrows/Arrows";
import "./SliderButton.scss";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const SliderButton = ({ click, position }) => {
  // let buttonPosition = "left: 1.5rem;";
  // if (position === "right") {
  //   buttonPosition = "right: 1.5rem;";
  // }

  return (
    <>
      <div
        className={`arrow-button ${
          position === "right" ? "arrow-right" : "arrow-left"
        }`}
        onClick={click}
      >
        <Arrow
          arrow={
            position === "right" ? <NavigateNextIcon /> : <NavigateBeforeIcon />
          }
        />
      </div>
    </>
  );
};

export default SliderButton;
