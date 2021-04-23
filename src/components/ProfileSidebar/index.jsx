import React from "react";
import { Link, useLocation } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LockIcon from "@material-ui/icons/Lock";
import CreateIcon from "@material-ui/icons/Create";
import "./index.scss";

const linkList = [
  {
    id: "account",
    name: "MY ACCOUNT",
    link: "/profile",
    icon: <PersonIcon />,
  },
  {
    id: "orders",
    name: "MY ORDERS",
    link: "/profile/orders",
    icon: <ShoppingBasketIcon />,
  },

  // {
  //   id: "myprofile",
  //   name: "MY PROFILE",
  //   link: "/profile/myprofile",
  // },
  {
    id: "shippingaddress",
    name: "ADDRESS BOOK",
    link: "/profile/addressbook",
    icon: <LocalShippingIcon />,
    sublinks: ["/profile/addressbook/new-address"],
  },
  {
    id: "updateprofile",
    name: "UPDATE PROFILE",
    icon: <CreateIcon />,
    link: "/profile/update-profile",
  },
  {
    id: "change",
    name: "CHANGE PASSWORD",
    link: "/profile/change-password",
    icon: <LockIcon />,
  },
];

const ProfileSidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const activeLink = (item, sublinks) =>
    sublinks?.some((sublink) => pathname.includes(sublink)) ||
    pathname === item.link;

  return (
    <div className="profile-sidebar">
      {linkList.map((item) => {
        return (
          <Link key={item.id} to={item.link}>
            <div className="profile-sidebar-link">
              <div
                className={[
                  `iconStyle`,
                  activeLink(item, item.sublinks) ? `activeIcon` : "",
                ]
                  .join(" ")
                  .toString()}
              >
                {item.icon}
              </div>
              <h5
                className={[
                  activeLink(item, item.sublinks) ? "activeMenuText " : "",
                ]
                  .join(" ")
                  .toString()}
              >
                {item.name}
              </h5>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProfileSidebar;
