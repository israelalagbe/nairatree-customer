import React, { useState } from "react";
import { Form } from "reactstrap";
import AppCheck from "../AppCheck";
import "./index.scss";
import AppSlider from "../AppSlider";
import useBrandStore from "../../stores/useBrandStore";
import AppButton from "../AppButton";

function SearchInputs({ applyFilter }) {
  const { popularBrands } = useBrandStore();

  const [priceRange, setPriceRange] = React.useState([100, 1000000]);

  const [colorFilter, setColorFilter] = useState(null);
  const [conditionsFilter, setConditionsFilter] = useState(null);
  const [brandsFilter, setBrandsFilter] = useState(null);



  const onApplyFilterClicked = (e) => {
    e.preventDefault();
    
    applyFilter({
      prices : priceRange,
      color : colorFilter,
      brand : brandsFilter,
      condition: conditionsFilter
    })
  }
  return (
    <div className="search-inputs">
      <div className="first-part">
        <h6 className="category">Category </h6>
        <h6 className="category-2">Phones and accessories</h6>
      </div>

      <Form onSubmit={onApplyFilterClicked}>
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
              selectedItem={colorFilter}
              setSelectedItem={setColorFilter}
              items={["Red", "Crimson", "Green", "Yellow"]}
            />
          </div>

          <div className="mt-4 category-check">
            <h6> Condition</h6>
            <CheckBoxItems
              selectedItem={conditionsFilter}
              setSelectedItem={setConditionsFilter}
              items={["New", "Refurbished", "Used", "Open Box"]}
            />
          </div>

          <div className="mt-4 category-check">
            <h6> Brand</h6>
            <CheckBoxItems
              selectedItem={brandsFilter}
              setSelectedItem={setBrandsFilter}
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

function CheckBoxItems({ items, setSelectedItem, selectedItem }) {
  const updateChecked = (item, checked) => {
    
    if(selectedItem === item){
      return setSelectedItem(null);
    }
    
    setSelectedItem(item);
  };
  console.log(selectedItem)
  return items.map((item) => (
    <AppCheck
      setChecked={(checked) => updateChecked(item, checked)}
      isChecked={selectedItem === item}
      checkText={item}
    />
  ));
}

export default SearchInputs;
