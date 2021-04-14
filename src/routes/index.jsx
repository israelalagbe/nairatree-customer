import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Login from "../pages/Login";
import RegistrationDecision from "../pages/RegistrationDecision";
import ProductSearch from "../pages/ProductSearch";
import CartSuccess from "../pages/ProductDetails/CartSuccess";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import AddressInfo from "../pages/CheckoutPages/AddressInfo";
import CheckoutDetails from "../pages/CheckoutPages/CheckoutDetails";
import Profile from "../pages/Profile";
import Otp from "../pages/Otp";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
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
        <Route path="/products" exact>
          <ProductSearch />
        </Route>
        <Route path="/cart-success" exact>
          <CartSuccess />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/product-details" exact>
          <ProductDetails />
        </Route>
        <Route path="/address-information" exact>
          <AddressInfo />
        </Route>
        <Route path="/checkout-details" exact>
          <CheckoutDetails />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/confirm-otp">
          <Otp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
