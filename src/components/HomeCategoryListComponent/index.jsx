import React from "react";
import categoryIconSample from "../../img/category-sample-icon.png";
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
function CategoryItem({category}) {
  return (
    <div className="category-item pointer">
      <img src={category.image_url} alt="" />
      <span>{clipText(category.name, 20)}</span>
    </div>
  );
}
