import React from "react";

// ------- Components
import { FavoritesIcon } from "../Icons/Icons";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

// ------- Styles
import {
  ProductCardWrapper,
  ProductCardContainer,
  ProductCardImage,
  ProductCardInfo,
} from "./ProductCard.styles";

const ProductCard = ({ id, imageUrl, productName, price, isFavorite }) => {
  return (
    <ProductCardWrapper>
      <ProductCardContainer>
        <ProductCardImage src={imageUrl} alt={productName} />
        <FavoritesIcon isFavorite={isFavorite} />
        <AddToCartButton />
      </ProductCardContainer>
      <ProductCardInfo>
        <h4>{productName}</h4>
        <h4>{price}$</h4>
      </ProductCardInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;
