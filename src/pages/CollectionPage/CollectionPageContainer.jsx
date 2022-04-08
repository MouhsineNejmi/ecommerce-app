import React from "react";
import { useLocation } from "react-router-dom";

// ------- Components
import CollectionPageView from "./CollectionPageView";

// ------- Data
import { products } from "../../data/products";

const CollectionPageContainer = () => {
  const location = useLocation();
  const collectionName = location.pathname.slice(6);
  const collectionProducts = products[collectionName].items;

  return (
    <CollectionPageView
      collectionName={collectionName}
      products={collectionProducts}
    />
  );
};

export default CollectionPageContainer;
