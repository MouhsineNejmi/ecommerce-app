import React from "react";
import { useSelector } from "react-redux";

// ------- Components
import CollectionPreviewItem from "../../components/CollectionPreviewItem/CollectionPreviewItem";

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
          {favorites.map((favorite) => (
            <CollectionPreviewItem key={favorite.id} item={favorite} />
          ))}
        </FavoriteContainer>
      )}
    </FavoriteWrapper>
  );
};

export default FavoritePage;
