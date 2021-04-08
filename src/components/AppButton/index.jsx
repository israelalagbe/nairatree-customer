import React from "react";

function AppButton({ buttonText, classname, onClick }) {
  return (
    <button className={classname} onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default AppButton;
