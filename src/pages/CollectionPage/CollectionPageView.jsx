import React from "react";
import CollectionProducts from "../../components/CollectionProducts/CollectionProducts";

// -------- Styles
import { CollectionWrapper, Title } from "./CollectionPage.style";

const CollectionPageView = ({ collectionName, products }) => {
  return (
    <CollectionWrapper>
      <Title>{collectionName}</Title>
      <CollectionProducts products={products} />
    </CollectionWrapper>
  );
};

export default CollectionPageView;
