import React from "react";

// ------ Components
import { CheckoutButton } from "../Buttons/Buttons";
import CartProduct from "../CartProduct/CartProduct";

// ------ Style
import {
  CartModalWrapper,
  CartModalProducts,
  CartModalCheckout,
} from "./CartModal.style";

const CartModal = () => {
  return (
    <CartModalWrapper>
      <CartModalProducts>
        {/* Products In Cart */}
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </CartModalProducts>
      <CartModalCheckout>
        <CheckoutButton />
      </CartModalCheckout>
    </CartModalWrapper>
  );
};

export default CartModal;
