import React from "react";

// ------- Components
import { FavoritesIcon, RemoveFavoriteIcon } from "../Icons/Icons";
import { AddToCartButton } from "../Buttons/Buttons";

// ------- Styles
import {
  ProductCardWrapper,
  ProductCardContainer,
  ProductCardImage,
  ProductCardInfo,
  Icon,
} from "./ProductCard.styles";

// ------- Redux
import { useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../app/features/favorites/favoritesSlice";

const ProductCard = (product) => {
  const { id, imageUrl, productName, price, isFavorite } = product;

  const dispatch = useDispatch();

  const addProductToFavorites = () => {
    const productToAdd = {
      id,
      imageUrl,
      productName,
      price,
      isFavorite: !isFavorite,
    };
    dispatch(addToFavorites(productToAdd));
  };

  const removeProductFromFavorites = () => dispatch(removeFromFavorites(id));

  return (
    <ProductCardWrapper>
      <ProductCardContainer>
        <ProductCardImage src={imageUrl} alt={productName} />
        {!isFavorite ? (
          <Icon onClick={addProductToFavorites}>
            <FavoritesIcon />
          </Icon>
        ) : (
          <Icon onClick={removeProductFromFavorites}>
            <RemoveFavoriteIcon />
          </Icon>
        )}
        <AddToCartButton {...product} />
      </ProductCardContainer>
      <ProductCardInfo>
        <h4>{productName}</h4>
        <h4>{price}$</h4>
      </ProductCardInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;
