import React, { useState, useEffect } from "react";
import "./index.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircle from "@material-ui/icons/AccountCircleOutlined";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingCartOutlined";
import Badge from "@material-ui/core/Badge";
import logo from "../../img/logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import useCategoryStore from "../../stores/useCategoryStore";
import { Popover } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import useBrandStore from "../../stores/useBrandStore";
import useAuthentication from "../../stores/useAuthentication";
import useCartStore from "../../stores/useCartStore";
import HeaderCategory from "../HeaderCategory";
import clipText from "../../util/clipText";
import logout from "../../util/logout";

export default function Header() {
  const history = useHistory();

  const { fetchCategories, categories } = useCategoryStore();
  const { popularBrands, fetchPopularBrands } = useBrandStore();
  const { carts, fetchCarts } = useCartStore();

  const [navbarIsOpen, setIsOpen] = useState(false);
  const toggleNavbarCollapse = () => setIsOpen(!navbarIsOpen);

  const user = useAuthentication((state) => state.user);

  const [showHeaderCategories, setHeaderCategoriesShown] = useState(false);

  const [keyword, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchCategories();
    fetchPopularBrands();
  }, [fetchCategories, fetchPopularBrands]);

  useEffect(() => {
    if (user) {
      fetchCarts();
    }
  }, [user, fetchCarts]);

  const onSearch = (e) => {
    history.push(
      `/products?search=${keyword}${
        selectedCategory ? `&category=${selectedCategory}` : ""
      }`
    );
  };

  const handleSearchInput = (e) => {
    if (e.key === "Enter") {
      onSearch(e);
    }
  };

  return (
    <>
      <div className="home-header">
        <Navbar dark expand="md">
          <NavbarBrand>
            <Link to="/">
              <img src={logo} alt="NairaTree" className="logo" />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbarCollapse} />
          <Collapse isOpen={navbarIsOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  className="pointer"
                  onClick={(e) => {
                    setHeaderCategoriesShown(!showHeaderCategories);
                  }}
                >
                  New Deals
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  Best Brands
                  <ExpandMoreIcon
                    fontSize="small"
                    className="ml-1 arrow-down-icon"
                  />
                </DropdownToggle>
                <DropdownMenu right>
                  {popularBrands.map((brand) => (
                    <DropdownItem
                      key={brand.id}
                      onClick={() =>
                        history.push(`/products?search=${brand.name}`)
                      }
                    >
                      {brand.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="mr-6">
                <NavLink href="/faqs/">FAQ</NavLink>
              </NavItem>
              <div className="form-group category-form pointer">
                <select
                  className="form-control category pointer"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option selected disabled>
                    Categories
                  </option>
                  {categories.map((category) => (
                    <option>{category.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group search-form ml-lg-2">
                <InputGroup>
                  <Input
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={handleSearchInput}
                    value={keyword}
                    placeholder="Search Items..."
                  />
                  <InputGroupAddon
                    addonType="append"
                    className="search-btn"
                    onClick={onSearch}
                  >
                    <InputGroupText>
                      <SearchIcon />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </Nav>

            <div className="nav-items-space-placeholder"></div>

            <AccountNav />

            <Link to="/cart" className="cart-nav text-decoration-none">
              <Badge badgeContent={carts.length} color="error">
                <ShoppingBasketIcon fontSize="small" />
              </Badge>
              <span className="ml-3 text">Cart</span>
            </Link>
          </Collapse>
        </Navbar>
      </div>
      {showHeaderCategories ? (
        <HeaderCategory close={() => setHeaderCategoriesShown(false)} />
      ) : null}
    </>
  );
}

function AccountNav() {
  const user = useAuthentication((state) => state.user);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "header-account-popover" : undefined;

  return (
    <>
      <div className="account-dropdown-nav" onClick={handleClick}>
        <AccountCircle fontSize="small" />
        <span className="ml-3 text">
          {user ? clipText(user.first_name, 10) : "Account"}{" "}
        </span>
        <ExpandMoreIcon fontSize="small" className="ml-1 arrow-down-icon" />
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="header-account-popover">
          {user ? (
            <>
              <Link to="/profile">
                <DropdownItem>Profile</DropdownItem>
              </Link>
              <Link to="/profile/orders">
                <DropdownItem>Orders</DropdownItem>
              </Link>
              <span onClick={logout}>
                <DropdownItem>Logout</DropdownItem>
              </span>
            </>
          ) : (
            <>
              <Link to="/login">
                <DropdownItem>Login</DropdownItem>
              </Link>
              <Link to="/registration-decision">
                <DropdownItem>Register</DropdownItem>
              </Link>
              <Link to="/guest-order-preference">
                <DropdownItem>Guest Delivery Timelines</DropdownItem>
              </Link>
            </>
          )}
        </div>
      </Popover>
    </>
  );
}
