import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import useCategoryStore from "../../stores/useCategoryStore";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./index.scss";

function HeaderCategory() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { fetchCategories, categories } = useCategoryStore();
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="headerCategory">
      <div className="headerCategoryMain">
        <div className="headerCategoriesViewAll">
          <h3>CATEGORIES</h3>
          <Link to="/">View All</Link>
        </div>
        <div className="headerCategoriesRow">
          <Row>
            <Col md="6">
              <div className="categoryCol">
                {categories.map((item) => (
                  <div className="categoryMap">
                    <p
                      className={
                        selectedCategory?._id === item._id ? "activeCat" : ""
                      }
                      onClick={() => setSelectedCategory(item)}
                    >
                      {item.name}
                    </p>
                    <div>
                      {selectedCategory?._id === item._id ? (
                        <ArrowForwardIosIcon />
                      ) : null}
                    </div>
                  </div>
                ))}
                ;
              </div>
            </Col>
            <Col md="6">
              <div className="categoryCol-2">
                {selectedCategory
                  ? selectedCategory.subcategories.map((item) => (
                      <p>{item.name}</p>
                    ))
                  : null}
                ;
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default HeaderCategory;
