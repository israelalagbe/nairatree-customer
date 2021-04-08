import React from "react";

/**
 * @type {React.FC}
 * @param {object} props
 * @param {boolean} props.isLoading
 * @param {React.ReactElement} [props.loader]
 * @param {React.ReactNode} props.children
 */
export default function LoadingTrigger(props){

    return <>{props.isLoading?(props.loader || <h4>Loading</h4>) :props.children}</>;

}