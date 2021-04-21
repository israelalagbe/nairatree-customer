import React, { useState } from "react";
import { Form } from "reactstrap";
import AppCheck from "../AppCheck";
import "./index.scss";
import AppSlider from "../AppSlider";
import useBrandStore from "../../stores/useBrandStore";
import AppButton from "../AppButton";

function SearchInputs() {
  const { popularBrands } = useBrandStore();

  const [priceRange, setPriceRange] = React.useState([100, 1000000]);

  const [colorFilter, setColorFilter] = useState([]);
  const [conditionsFilter, setConditionsFilter] = useState([]);
  const [brandsFilter, setBrandsFilter] = useState([]);

  return (
    <div className="search-inputs">
      <div className="first-part">
        <h6 className="category">Category </h6>
        <h6 className="category-2">Phones and accessories</h6>
      </div>

      <Form>
        <div className="main-inputs">
          <div className="price">
            <h6>Price (#)</h6>
            <AppSlider value={priceRange} setValue={setPriceRange} />
            <div className="box">
              <h6>{priceRange[0]}</h6>
              <p>-</p>
              <h6>{priceRange[1]}</h6>
            </div>
          </div>

          <div className="mt-4 category-check">
            <h6> Color</h6>
            <CheckBoxItems
              selectedItems={colorFilter}
              setSelectedItems={setColorFilter}
              items={["Red", "Crimson", "Green", "Yellow"]}
            />
          </div>

          <div className="mt-4 category-check">
            <h6> Condition</h6>
            <CheckBoxItems
              selectedItems={conditionsFilter}
              setSelectedItems={setConditionsFilter}
              items={["New", "Refurbished", "Used", "Open Box"]}
            />
          </div>

          <div className="mt-4 category-check">
            <h6> Brand</h6>
            <CheckBoxItems
              selectedItems={brandsFilter}
              setSelectedItems={setBrandsFilter}
              items={popularBrands.map((brand) => brand.name)}
            />
          </div>
          <div className='mt-3'>
            <AppButton classname="btn btn-warning" buttonText="Apply Filter" />
          </div>
        </div>
      </Form>
    </div>
  );
}

function CheckBoxItems({ items, setSelectedItems, selectedItems }) {
  const updateChecked = (item, checked) => {
    if (checked) {
      selectedItems = [...selectedItems, item];
    } else {
      selectedItems = selectedItems.filter((i) => i !== item);
    }

    setSelectedItems(selectedItems);
  };
  return items.map((item) => (
    <AppCheck
      setChecked={(checked) => updateChecked(item, checked)}
      isChecked={selectedItems.includes(item)}
      checkText={item}
    />
  ));
}

export default SearchInputs;
