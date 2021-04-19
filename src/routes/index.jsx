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
import ShoppingCart from "../pages/ShppingCart";
import AddressInfo from "../pages/CheckoutPages/AddressInfo";
import CheckoutDetails from "../pages/CheckoutPages/CheckoutDetails";
import Profile from "../pages/Profile";
import Otp from "../pages/Otp";
import PaymentPolicy from "../pages/PaymentPolicy";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Blog from "../pages/Blog";
import AboutUs from "../pages/AboutUs";
import AuthRoute from "./AuthRoute";
import UpdateProfile from "../pages/UpdateProfile";

export function Routes() {
  return (
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
      <Route path="/reset-password/:id" exact>
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
        <ShoppingCart />
      </Route>
      <Route path="/product-details/:productId" exact>
        <ProductDetails />
      </Route>
      <Route path="/address-information" exact>
        <AddressInfo />
      </Route>
      <Route path="/checkout-details" exact>
        <CheckoutDetails />
      </Route>
      <AuthRoute path="/profile">
        <Profile />
      </AuthRoute>
      <AuthRoute path="/update-profile">
        <UpdateProfile />
      </AuthRoute>

      <Route path="/confirm-otp">
        <Otp />
      </Route>
      <Route path="/payment-policy">
        <PaymentPolicy />
      </Route>
      <Route path="/privacy-policy">
        <PrivacyPolicy />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/about-us">
        <AboutUs />
      </Route>
    </Switch>
  );
}
