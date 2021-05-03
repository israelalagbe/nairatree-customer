import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Login from "../pages/Login";
import RegistrationDecision from "../pages/RegistrationDecision";
import ProductSearch from "../pages/ProductSearch";
import CartSuccess from "../pages/ProductDetails/CartSuccess";
import ProductDetails from "../pages/ProductDetails";
import ShoppingCart from "../pages/ShoppingCart";
import UserCheckout from "../pages/CheckoutPages/UserCheckout";
import Profile from "../pages/Profile";
import Otp from "../pages/Otp";
import PaymentPolicy from "../pages/PaymentPolicy";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Blog from "../pages/Blog";
import AboutUs from "../pages/AboutUs";
import AuthRoute from "./AuthRoute";
import GuestRoute from "./GuestRoute";
import GuestCheckout from "../pages/CheckoutPages/GuestCheckout";
import GuestAddressInfo from "../pages/GuestAddressInfo";
import GuestOrderPreference from "../pages/GuestOrderPreference";
import GuestOrderDetails from "../pages/Profile/Orders/OrdersDetails/GuestOrderDetails";
import OurServices from "../pages/OurServices";
import CustomerSupport from "../pages/CustomerSupport";
import PurchaseInformation from "../pages/PurchaseInformation";
import VendorGuide from "../pages/VendorGuide";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <GuestRoute path="/register" exact>
        <Register />
      </GuestRoute>
      <GuestRoute path="/forgot-password" exact>
        <ForgotPassword />
      </GuestRoute>
      <Route path="/reset-password/:id" exact>
        <ResetPassword />
      </Route>
      <GuestRoute path="/login" exact>
        <Login />
      </GuestRoute>
      <GuestRoute path="/registration-decision" exact>
        <RegistrationDecision />
      </GuestRoute>
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
      <AuthRoute path="/checkout-details" exact>
        <UserCheckout />
      </AuthRoute>

      <AuthRoute path="/profile">
        <Profile />
      </AuthRoute>
      <GuestRoute path="/guest-checkout" exact>
        <GuestCheckout />
      </GuestRoute>
      <GuestRoute path="/guest-checkout-address">
        <GuestAddressInfo />
      </GuestRoute>
      <GuestRoute path="/guest-order-preference">
        <GuestOrderPreference />
      </GuestRoute>
      <Route exact path="/guest/orders/order-details/:id">
        <GuestOrderDetails />
      </Route>
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
      <Route path="/our-services">
        <OurServices />
      </Route>
      <Route path="/customer-support">
        <CustomerSupport />
      </Route>
      <Route path="/vendor-guide">
        <VendorGuide />
      </Route>
      <Route path="/purchase-information">
        <PurchaseInformation />
      </Route>
    </Switch>
  );
}
