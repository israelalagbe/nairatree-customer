import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import useAuthentication from "../stores/useAuthentication";

/**
 *
 * @param {{children:React.ReactNode,path:string, exact?:boolean}} param0
 */
const GuestRoute = ({ children, ...props }) => {
  const user = useAuthentication((state) => state.user);
  return (
    <Route {...props}>
      {user ? <Redirect to={`/`} /> :children}
    </Route>
  );
};

export default GuestRoute;
