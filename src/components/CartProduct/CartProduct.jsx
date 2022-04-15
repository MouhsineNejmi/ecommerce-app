import React from "react";

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from "./CartProduct.style";

const CartProduct = ({ imageUrl, productName, price, quantity }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={productName} />
      <ItemDetailsContainer>
        <p>{productName}</p>
        <p>
          {quantity} x ${price}
        </p>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default React.memo(CartProduct);
