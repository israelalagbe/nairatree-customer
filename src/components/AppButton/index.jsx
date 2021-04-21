import React from "react";

/**
 *
 * @param {object} props
 * @param {string} props.buttonText
 * @param {'button'|'submit'|'reset'} [props.type]
 * @param {string} [props.classname]
 * @param {boolean} [props.disabled]
 * @param {(any)=>any} [props.onClick]
 */
function AppButton({ buttonText, classname, onClick, disabled, type }) {
  return (
    <button type={type} className={`${classname} ${disabled? 'btn-disabled': ''}`} onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  );
}

export default AppButton;
