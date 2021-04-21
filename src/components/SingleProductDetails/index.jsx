import { format } from "date-fns";
import React, { useEffect } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import useProductStore from "../../stores/useProductStore";

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
      value: product.features && product.features.join(", "),
    },
    {
      key: "Date Manufactured",
      value: format(new Date(product.date_manufactured), "d LLLL yyyy"),
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
