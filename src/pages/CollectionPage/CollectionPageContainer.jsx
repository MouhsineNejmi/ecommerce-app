import React from "react";
import { useLocation } from "react-router-dom";
import CollectionPageView from "./CollectionPageView";

const CollectionPageContainer = () => {
  const location = useLocation();
  const collectionName = location.pathname.slice(6);

  return <CollectionPageView collectionName={collectionName} />;
};

export default CollectionPageContainer;
