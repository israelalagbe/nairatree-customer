import React from "react";
import BackDrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import './index.scss';


/**
 * @type {React.FC}
 * @param {object} props
 * @param {boolean} props.isLoading
 * @param {React.ReactElement} [props.loader]
 * @param {React.ReactNode} props.children
 */
export default function LoadingTrigger(props){
    return <>{props.isLoading?(props.loader || <Loader />) :props.children}</>;
}

const Loader = () => {
    return (<div className='loader-container'>
        <CircularProgress size={25} />
    </div>);
}