import React from "react";

// -------- Styles
import {
  CollectionWrapper,
  CollectionBackground,
  CollectionInfo,
} from "./Collections.style";

const CollectionsView = ({ collection, pushRoute }) => {
  const { image, name } = collection;
  const gotoCollection = (event) => {
    event.preventDefault();
    pushRoute(collection.name);
  };

  return (
    <CollectionWrapper onClick={gotoCollection}>
      <CollectionBackground image={image}></CollectionBackground>
      <CollectionInfo>
        <h3>{name} collection</h3>
        <h4>buy now</h4>
      </CollectionInfo>
    </CollectionWrapper>
  );
};

export default CollectionsView;
