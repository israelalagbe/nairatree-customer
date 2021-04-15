import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import useAuthentication from "../stores/useAuthentication";

/**
 *
 * @param {{children:React.ReactNode,path:string, exact?:boolean}} param0
 */
const AuthRoute = ({ children, ...props }) => {
    const [isInitialized, setIsInitialized] = React.useState(false);

    const user  = useAuthentication((state) => state.user);
    
    useEffect(() => {
        //This is needed so localstorage can set auth details before the routes is processed
        requestAnimationFrame(()=>{
            setIsInitialized(true);
        });
    }, []);
    
    return (
      <Route
        {...props}>
            {user ? children : (isInitialized && <Redirect to={`/login?redirect_to=${props.path}`} />)}
        </Route>
    );
  };


export default AuthRoute;