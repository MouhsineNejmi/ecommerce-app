import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";

// ------- Styles
import {
  FavoriteWrapper,
  Title,
  FavoriteMsg,
  FavoriteContainer,
} from "./Favorite.style";

const FavoritePage = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <FavoriteWrapper>
      <Title>favorite</Title>
      {favorites.length === 0 ? (
        <FavoriteMsg>
          <p>No Favorite Items :(</p>
        </FavoriteMsg>
      ) : (
        <FavoriteContainer>
          {favorites.map((favorite) => {
            const { id, imageUrl, productName, price, isFavorite } = favorite;

            return (
              <ProductCard
                key={id}
                id={id}
                imageUrl={imageUrl}
                productName={productName}
                price={price}
                isFavorite={isFavorite}
              />
            );
          })}
        </FavoriteContainer>
      )}
    </FavoriteWrapper>
  );
};

export default FavoritePage;
