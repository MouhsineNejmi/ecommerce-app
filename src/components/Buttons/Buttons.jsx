import React from "react";
import { Link } from "react-router-dom";

// ------ Styles
import { AddToCartBtn, CheckoutBtn, SignBtn } from "./Buttons.style";

export const AddToCartButton = () => {
  return <AddToCartBtn>Add To Cart</AddToCartBtn>;
};

export const CheckoutButton = () => {
  return (
    <CheckoutBtn as={Link} to='/checkout'>
      Go to Checkout
    </CheckoutBtn>
  );
};

export const SignButton = ({ children, ...otherProps }) => {
  return <SignBtn {...otherProps}>{children}</SignBtn>;
};
