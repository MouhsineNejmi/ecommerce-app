import React from "react";
import CollectionProducts from "../../components/CollectionProducts/CollectionProducts";

// -------- Styles
import { CollectionWrapper, Title } from "./CollectionPage.style";

const CollectionPageView = ({ collectionName }) => {
  return (
    <CollectionWrapper>
      <Title>{collectionName}</Title>
      <CollectionProducts collectionName={collectionName} />
    </CollectionWrapper>
  );
};

export default CollectionPageView;
