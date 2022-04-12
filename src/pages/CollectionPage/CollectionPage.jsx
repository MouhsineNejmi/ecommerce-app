import React from "react";
import { useLocation } from "react-router-dom";
// -------- Components

// -------- Styles
import { CollectionWrapper, Title } from "./CollectionPage.style";

const CollectionPage = () => {
  const location = useLocation();
  const collectionName = location.pathname.slice(6);

  return (
    <CollectionWrapper>
      <Title>{collectionName}</Title>
    </CollectionWrapper>
  );
};

export default CollectionPage;
