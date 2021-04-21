import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "reactstrap";
import useCategoryStore from "../../stores/useCategoryStore";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./index.scss";
import LoadingTrigger from "../LoadingTrigger";
import useOnClickOutside from "../../util/useClickOutside";

function HeaderCategory({close}) {
  const history = useHistory();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { fetchCategories, categories, categoriesLoading} = useCategoryStore();

  const ref = useRef();
  
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useOnClickOutside(ref, close);

  return (
    <div className="headerCategory" >
      <div className="headerCategoryMain" ref={ref}>
        <div className="headerCategoriesViewAll">
          <h3>CATEGORIES</h3>
          <Link to="/">View All</Link>
        </div>
        <div className="headerCategoriesRow">
          <Row>
            <Col md="6">
              <div className="categoryCol">
                <LoadingTrigger isLoading={categoriesLoading}>
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
                </LoadingTrigger>
              </div>
            </Col>
            <Col md="6">
              <div className="categoryCol-2">
                {selectedCategory
                  ? selectedCategory.subcategories.map((item) => (
                      <p className="pointer" onClick={() => history.push(`/products?search=${item.name}`)} >{item.name}</p>
                    ))
                  : null}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default HeaderCategory;
