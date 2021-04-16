import React from "react";

/**
 *
 * @param {object} props
 * @param {string} props.buttonText
 * @param {string} props.classname
 * @param {boolean} [props.disabled]
 * @param {(any)=>any} [props.onClick]
 */
function AppButton({ buttonText, classname, onClick, disabled }) {
  return (
    <button className={`${classname} ${disabled? 'btn-disabled': ''}`} onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  );
}

export default AppButton;
