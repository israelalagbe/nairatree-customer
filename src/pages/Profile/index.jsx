import React from "react";
import { Route, Switch } from "react-router-dom";
import WishList from "./WishList";
import MyProfile from "./MyProfile";
import ShippingAddress from "./ShippingAddress";
import Account from "./Account";
import "./index.scss";
import Header from "../../components/Header";
import ProfileSidebar from "../../components/ProfileSidebar";
import Orders from "./Orders";
import { Row, Col } from "reactstrap";
import ChangePassword from "./ChangePassword";
import UpdateProfile from "./UpdateProfile";
import AddressInfo from "./AddressInfo";

function Profile() {
  return (
    <div className="profile">
      <Header />

      <div className="main">
        <h2>My Profile</h2>
        <Row>
          <Col md="4">
            <div className="left">
              <ProfileSidebar />
            </div>
          </Col>
          <Col md="6">
            <div className="right">
              <Switch>
                <Route exact path="/profile" component={Account} />
                <Route
                  exact
                  path="/profile/addressbook"
                  component={ShippingAddress}
                />
                <Route
                  exact
                  path="/profile/addressbook/new-address"
                  component={AddressInfo}
                />
                <Route path="/profile/myprofile" component={MyProfile} />
                <Route path="/profile/wishlist" component={WishList} />
                <Route path="/profile/orders" component={Orders} />
                <Route
                  path="/profile/change-password"
                  component={ChangePassword}
                />
                <Route
                  path="/profile/update-profile"
                  component={UpdateProfile}
                />
              </Switch>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Profile;
