import React from "react";

// ------- Components
import { FavoritesIcon, RemoveFavoriteIcon } from "../Icons/Icons";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

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

const ProductCard = ({ id, imageUrl, productName, price, isFavorite }) => {
  const dispatch = useDispatch();

  const addProductToFavorites = () => {
    const product = {
      id,
      imageUrl,
      productName,
      price,
      isFavorite: !isFavorite,
    };
    dispatch(addToFavorites(product));
  };

  const removeProductFromFavorites = () => {
    const product = {
      id,
      imageUrl,
      productName,
      price,
      isFavorite: !isFavorite,
    };
    dispatch(removeFromFavorites(product));
  };

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
