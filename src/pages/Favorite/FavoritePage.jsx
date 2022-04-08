import React from "react";
import { useSelector } from "react-redux";

// ------- Styles
import {
  FavoriteWrapper,
  Title,
  FavoriteMsg,
  FavoriteContainer,
} from "./Favorite.style";

const FavoritePage = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <FavoriteWrapper>
      <Title>favorite</Title>
      {favorites.length === 0 ? (
        <FavoriteMsg>
          <p>No Favorite Items :(</p>
        </FavoriteMsg>
      ) : (
        <FavoriteContainer>
          <p>There is products</p>
        </FavoriteContainer>
      )}
    </FavoriteWrapper>
  );
};

export default FavoritePage;
