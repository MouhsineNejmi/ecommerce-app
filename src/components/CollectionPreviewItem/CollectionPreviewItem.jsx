import React from "react";

// ------- Components
import { FavoritesIcon, RemoveFavoriteIcon } from "../Icons/Icons";
import { AddToCartButton } from "../Buttons/Buttons";

// ------- Styles
import {
  CollectionPreviewItemWrapper,
  CollectionPreviewItemContainer,
  Icon,
  CollectionPreviewItemImage,
  CollectionPreviewItemInfo,
} from "./CollectionPreviewItem.style";

// ------- Redux
import { useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../app/favorites/favoritesSlice";

const CollectionPreviewItem = ({ item }) => {
  const { id, imageUrl, isFavorite, price, productName } = item;
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
    <CollectionPreviewItemWrapper>
      <CollectionPreviewItemContainer>
        <CollectionPreviewItemImage src={imageUrl} alt={productName} />
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
      </CollectionPreviewItemContainer>
      <CollectionPreviewItemInfo>
        <h4>{productName}</h4>
        <h4>{price}$</h4>
      </CollectionPreviewItemInfo>
    </CollectionPreviewItemWrapper>
  );
};

export default CollectionPreviewItem;
