import React from "react";
import BackDrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./index.scss";

/**
 * @type {React.FC}
 * @param {object} props
 * @param {boolean} props.isLoading
 * @param {React.ReactElement} [props.loader]
 * @param {string} [props.marginTop]
 * @param {React.ReactNode} props.children
 */
export default function LoadingTrigger(props) {
  return (
    <>
      {props.isLoading ? props.loader || <Loader marginTop={props.marginTop} /> : props.children}
    </>
  );
}

/**
 *
 * @param {{marginTop: string}} props
 */
const Loader = (props) => {
  return (
    <div
      className="loader-container"
      style={props.marginTop ? { marginTop: props.marginTop } : null}
    >
      <CircularProgress size={25} />
    </div>
  );
};
