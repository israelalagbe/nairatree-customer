import React from "react";

/**
 * 
 * @param {object} props 
 * @param {string} props.buttonText
 * @param {string} props.classname
 * @param {(any)=>any} [props.onClick]
 */
function AppButton({ buttonText, classname, onClick }) {
  return (
    <button className={classname} onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default AppButton;
