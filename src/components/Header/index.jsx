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
  Dropdown,
} from "reactstrap";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircle from "@material-ui/icons/AccountCircleOutlined";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingCartOutlined";
import Badge from "@material-ui/core/Badge";
import logo from "../../img/logo.svg";
import search from "../../img/search.svg";
import useCategoryStore from "../../stores/useCategoryStore";
import { Popover } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Header() {
  const { fetchCategories, categories } = useCategoryStore();

  const [navbarIsOpen, setIsOpen] = useState(false);
  const toggleNavbarCollapse = () => setIsOpen(!navbarIsOpen);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="home-header">
      <Navbar dark expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt="NairaTree" className="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbarCollapse} />
        <Collapse isOpen={navbarIsOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">New Deals</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                Best Brands
                <ExpandMoreIcon fontSize="small" className="ml-1 arrow-down-icon" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Optddion 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="mr-6">
              <NavLink href="/components/">FAQ</NavLink>
            </NavItem>
            <div className="form-group category-form">
              <select className="form-control category">
                <option>Categories</option>
              </select>
            </div>
            <div className="form-group search-form ml-lg-2">
              <InputGroup>
                <Input placeholder="Search Items..." />
                <InputGroupAddon addonType="append" className="search-btn">
                  <InputGroupText>
                    <img src={search} alt="Search" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </Nav>

          <div className="nav-items-space-placeholder"></div>

          <AccountNav />

          <Link to='cart' className="cart-nav text-decoration-none">
            <Badge badgeContent={4} color="error">
              <ShoppingBasketIcon fontSize="small" />
            </Badge>
            <span className="ml-3 text">Cart</span>
          </Link>
        </Collapse>
      </Navbar>
    </div>
  );
}

function AccountNav() {
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
        <span className="ml-3 text">Account </span>
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
          {/* <DropdownItem header>Account</DropdownItem> */}
          <Link to='login'><DropdownItem>Login</DropdownItem></Link>
          <Link to='register'><DropdownItem>Register</DropdownItem></Link>
          
        </div>
      </Popover>
    </>
  );
}
