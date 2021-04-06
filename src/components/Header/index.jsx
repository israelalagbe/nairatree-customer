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
  NavbarText,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button
} from "reactstrap";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";

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
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">New Deals</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                Best Brands
                <ExpandMoreIcon className="ml-1 arrow-down-icon" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Optddion 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/components/">FAQ</NavLink>
            </NavItem>
            <div className="form-group">
              <select className="form-control">
                <option>Categories</option>
              </select>
            </div>
            <div className="form-group search-form ml-2">
              <InputGroup>
                <Input placeholder="Search Items..." />
                <InputGroupAddon addonType="append" className='search-btn'>
                  <InputGroupText><img src={search} alt='Search'/></InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </Nav>

          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
