import React from "react";
import "./index.scss";

/**
 *
 * @param {{product: Product, variant: ProductVariant}} props
 */
function SingleProductDetails({ product, variant }) {
  const items = [
    { key: "Name", value: product.name },
    {
      key: "Type",
      value: product.type,
    },
    {
      key: "Color",
      value: variant?.color,
    },
    {
      key: "Size",
      value: variant?.size,
    },
    {
      key: "Model",
      value: product.model,
    },
    {
      key: "Condition",
      value: product.condition,
    },
    {
      key: "Features",
      value: product.features.join(", "),
    },
    {
      key: "Date Manufactured",
      value: product.date_manufactured,
    },
  ].filter((item) => item.value);
  return (
    <div className="single-product-details">
      <table>
        <tbody>
          {items.map((item) => (
            <tr key={item.key}>
              <td>
                <span className="key">{item.key}:</span>
              </td>
              <td>
                <span className="value">{item.value}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SingleProductDetails;
