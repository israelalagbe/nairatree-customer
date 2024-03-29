import React from "react";
import { FormGroup, Input } from "reactstrap";
import useAuthentication from "../../stores/useAuthentication";
import useCartStore from "../../stores/useCartStore";
import formatMoney from "../../util/formatMoney";
import Notify from "../../util/Notify";
import AppButton from "../AppButton";
import "./index.scss";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { useHistory } from "react-router-dom";
// import { ray } from 'js-ray';
/**
 *
 * @param {object} props
 * @param {Cart[]} props.carts
 * @param {(cartIndex:number, cartUpdate: Cart)=>void} props.updateCart
 * @param {()=>void} props.deleteSelectedCarts
 * @param {number[]} props.selectedCartsIndexes
 * @param {(indexs:number[]) => void} props.setSelectedCartsIndexes
 */
function CartFirst({
  carts,
  updateCart,
  selectedCartsIndexes,
  setSelectedCartsIndexes,
  deleteSelectedCarts,
}) {
  const history = useHistory();
  const saveCarts = useCartStore((store) => store.saveCarts);

  const user = useAuthentication((state) => state.user);

  /**
   * @param {number} index
   * @param {Cart} cart
   * @param {ProductVariant} variant
   */
  const incrementCart = (index, cart, variant) => {
    updateCart(index, {
      ...cart,
      quantity:
        cart.quantity < (variant?.quantity ?? cart.product.quantity_available)
          ? cart.quantity + 1
          : cart.quantity,
    });
  };

  /**
   * @param {number} index
   * @param {Cart} cart
   */
  const decreaseCart = (index, cart) => {
    updateCart(index, {
      ...cart,
      quantity: cart.quantity > 1 ? cart.quantity - 1 : cart.quantity,
    });
  };

  /**
   * @param {number} index
   */
  const deleteCart = (index) => {
    //null cart will be deleted
    updateCart(index, null);
  };

  const toggleSelected = (index) => {
    const isChecked =
      selectedCartsIndexes.filter((item) => item === index).length > 0;
    if (isChecked) {
      const updatedIndexes = selectedCartsIndexes.filter(
        (item) => item !== index
      );
      setSelectedCartsIndexes(updatedIndexes);
    } else {
      const updatedIndexes = [...selectedCartsIndexes, index];
      setSelectedCartsIndexes(updatedIndexes);
    }
  };

  const selectAll = () => {
    setSelectedCartsIndexes(carts.map((cart, index) => index));
  };

  const updateCartsOnline = () => {
    const payload = carts.map((cart) => ({
      product: cart.product.id,
      quantity: cart.quantity,
      ...(cart.variant ? { variant: String(cart.variant) } : null),
    }));

    if (user) {
      saveCarts(payload, () => Notify.success("Cart updated successfully!"));
    } else {
      Notify.success("Cart updated successfully!");
    }
  };

  return (
    <div className="cart-first">
      <div className="main">
        <div className="shopping-cart">
          <h3>Shopping Cart({carts.length})</h3>
        </div>
        <div className="main-flex">
          <div className="d-flex mt-1">
            <p className="pointer " onClick={selectAll}>
              Select All
            </p>
            <h6 className="pointer" onClick={deleteSelectedCarts}>
              Delete Selected
            </h6>
          </div>
          <AppButton
            onClick={updateCartsOnline}
            buttonText="Update Cart"
            classname="update-button"
          />
        </div>
      </div>
      {!carts.length ? (
        <div className="empty-cart">
          <h2>Cart is currently empty!</h2>
          <RemoveShoppingCartIcon />
          <AppButton
            buttonText="Click Here To Shop"
            classname="empty-button"
            onClick={() => history.push("/")}
          />
        </div>
      ) : (
        carts.map((cart, index) => {
          const isChecked =
            selectedCartsIndexes.filter((item) => item === index).length > 0;

          const product = cart.product;
          const variant = product.variants.find(
            (variant) => String(variant.variant_id) === String(cart.variant)
          );
          const productImage = variant?.images[0] ?? cart.product.images[0];
          return (
            <div className="wishlist">
              <div className="main">
                <div className="wish-check">
                  <FormGroup>
                    <div>
                      <Input
                        type="checkbox"
                        checked={isChecked}
                        onClick={() => toggleSelected(index)}
                      />
                      <div className="content">
                        <div className="content-img">
                          <img src={productImage} alt={product.name} />
                        </div>
                        <div className="content-2">
                          <h5>{cart.product.name}</h5>

                          {variant ? (
                            <h6>
                              Color:{" "}
                              <span className="capitalize">
                                {variant.color}
                              </span>
                            </h6>
                          ) : null}
                          <h4>
                            {formatMoney(product.price * cart.quantity)}{" "}
                            &nbsp;&nbsp;{" "}
                            {product.deal ? (
                              <span>{formatMoney(product.deal.new_price)}</span>
                            ) : null}
                          </h4>
                          <div className="maintain">
                            <h6
                              className="pointer"
                              onClick={() => decreaseCart(index, cart)}
                            >
                              -
                            </h6>
                            <p>{cart.quantity}</p>
                            <h6
                              className="pointer"
                              onClick={() =>
                                incrementCart(index, cart, variant)
                              }
                            >
                              +
                            </h6>
                          </div>
                          <h6>Free Shipping: Within Lagos</h6>
                        </div>
                      </div>
                    </div>
                  </FormGroup>
                </div>
                <div className="del-add">
                  {/* <h6>ADD TO WISHLIST </h6> */}
                  <h5 className="pointer" onClick={() => deleteCart(index)}>
                    DELETE{" "}
                  </h5>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default CartFirst;
