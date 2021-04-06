import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Login from "../pages/Login";
import RegistrationDecision from "../pages/RegistrationDecision";

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Route path="/forgot-password" exact>
        <ForgotPassword />
      </Route>
      <Route path="/reset-password" exact>
        <ResetPassword />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/registration-decision" exact>
        <RegistrationDecision />
      </Route>
    </BrowserRouter>
  );
}
