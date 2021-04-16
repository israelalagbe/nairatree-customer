import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

const linkList = [
  {
    id: "account",
    name: "ACCOUNT",
    link: "/profile",
  },
  {
    id: "orders",
    name: "MY ORDERS",
    link: "/profile/orders",
  },
  {
    id: "wishlist",
    name: "WISHLIST",
    icon: "wishlist",
    link: "/profile/wishlist",
  },
  {
    id: "myprofile",
    name: "MY PROFILE",
    link: "/profile/myprofile",
  },
  {
    id: "shippingaddress",
    name: "SHIPPING ADDRESS",
    link: "/profile/shippingaddress",
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
      <div className="profile-sidebar-link  ">
        {linkList.map((item) => {
          return (
            <Link key={item.id} to={item.link}>
              <h1
                className={[
                  activeLink(item, item.sublinks) ? `activeMenuText ` : "",
                ]
                  .join(" ")
                  .toString()}
              >
                {item.name}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileSidebar;
