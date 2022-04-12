import React from "react";
import { Link } from "react-router-dom";

// ------ Styles
import { AddToCartBtn, CheckoutBtn } from "./Buttons.style";

export const AddToCartButton = (product) => {
  return <AddToCartBtn>Add To Cart</AddToCartBtn>;
};

export const CheckoutButton = () => {
  return (
    <CheckoutBtn as={Link} to='/checkout'>
      Go to Checkout
    </CheckoutBtn>
  );
};
