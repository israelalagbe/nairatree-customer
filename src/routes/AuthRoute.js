import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuthentication from "../stores/useAuthentication";

/**
 *
 * @param {{children:React.ReactNode,path:string, exact?:boolean}} param0
 */
const AuthRoute = ({ children, ...props }) => {
  const user = useAuthentication((state) => state.user);
  return (
    <Route {...props}>
      {user ? children : <Redirect to={`/login?redirect_to=${props.path}`} />}
    </Route>
  );
};

export default AuthRoute;
