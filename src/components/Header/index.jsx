import React, { useState } from "react";
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
import search from "../../img/search.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="home-header">
      <Navbar dark expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt="NairaTree" className="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">New Deals</NavLink>
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
          <div className="account-dropdown-nav">
            <AccountCircle fontSize="small" />
            <span className="ml-3 text">Account </span>
            <ExpandMoreIcon fontSize="small" className="ml-1 arrow-down-icon" />
          </div>
          <div className="cart-nav">
            <Badge badgeContent={4} color="error" fontSize="small">
              <ShoppingBasketIcon fontSize="small" />
            </Badge>
            <span className="ml-3 text">Cart</span>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
