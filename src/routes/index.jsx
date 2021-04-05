import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

export function Routes() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact><Home /></Route>
    </Switch>
      
    </BrowserRouter>
  );
}
