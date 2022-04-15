import React from "react";
// ------ Redux
import { useSelector } from "react-redux";

// ------ Components
import { CheckoutButton } from "../Buttons/Buttons";
import CartProduct from "../CartProduct/CartProduct";

// ------ Style
import {
  CartModalWrapper,
  CartModalProducts,
  CartModalCheckout,
} from "./CartModal.style";

const CartModal = ({ openModal }) => {
  const cartProducts = useSelector((state) => state.cart.cartItems);

  return (
    <CartModalWrapper openModal={openModal}>
      <CartModalProducts>
        {cartProducts ? (
          cartProducts.map(({ id, imageUrl, productName, quantity, price }) => (
            <CartProduct
              key={id}
              imageUrl={imageUrl}
              productName={productName}
              quantity={quantity}
              price={price}
            />
          ))
        ) : (
          <p>Empty Cart :(</p>
        )}
      </CartModalProducts>
      <CartModalCheckout>
        <CheckoutButton />
      </CartModalCheckout>
    </CartModalWrapper>
  );
};

export default CartModal;
