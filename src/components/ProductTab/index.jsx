import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import SingleProductDetails from "../SingleProductDetails";
import "./index.scss";
import ProductRating from "../ProductRating";

/**
 *
 * @param {{product: Product, variant: ProductVariant}} props
 */
const ProductTab = ({ product, variant }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="product-tab">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Details
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Product Rating
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SingleProductDetails variant={variant} product={product} />
        </TabPane>
        <TabPane tabId="2">
          <ProductRating />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductTab;
