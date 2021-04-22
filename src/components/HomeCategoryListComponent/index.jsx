import React from "react";
import { Link } from "react-router-dom";
import useCategoryStore from "../../stores/useCategoryStore";
import clipText from "../../util/clipText";
import LoadingTrigger from "../LoadingTrigger";

export const HomeCategoryListComponent = () => {
  const { categories, categoriesLoading } = useCategoryStore();
  return (
    <section className="categories-list-card">
      <LoadingTrigger isLoading={categoriesLoading}>
        {categories.map((category) => (
          <CategoryItem key={category._id} category={category} />
        ))}
      </LoadingTrigger>
    </section>
  );
};

/**
 *
 * @param {Object} props
 * @param {Category} props.category
 */
function CategoryItem({ category }) {
  return (
    <Link
      to={`/products?category=${category.name}`}
      className="category-item pointer"
    >
      <img src={category.image_url} alt="" />
      <span>{clipText(category.name, 20)}</span>
    </Link>
  );
}
