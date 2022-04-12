import React from "react";
import { useLocation } from "react-router-dom";

// -------- Components
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
// -------- Data
import { products } from "../../data/products";
// -------- Styles
import {
  CollectionWrapper,
  Title,
  CollectionContainer,
} from "./CollectionPage.style";

const CollectionPage = () => {
  const location = useLocation();
  const collectionName = location.pathname.slice(6);

  return (
    <CollectionWrapper>
      <Title>{collectionName}</Title>
      <CollectionContainer>
        {products.map((product) => {
          const { id, collection, items } = product[collectionName];

          return (
            <CollectionPreview
              key={id}
              collectionName={collection}
              items={items}
            />
          );
        })}
      </CollectionContainer>
    </CollectionWrapper>
  );
};

export default CollectionPage;
