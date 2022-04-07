import React from "react";

// -------- Styles
import { CollectionWrapper, Title } from "./CollectionPage.style";

const CollectionPageView = ({ collectionName }) => {
  return (
    <CollectionWrapper>
      <Title>{collectionName}</Title>
    </CollectionWrapper>
  );
};

export default CollectionPageView;
