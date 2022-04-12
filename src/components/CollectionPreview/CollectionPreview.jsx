import React from "react";
import CollectionPreviewItem from "../CollectionPreviewItem/CollectionPreviewItem";
// ------ Styles
import {
  CollectionPreviewWrapper,
  Title,
  CollectionPreviewContainer,
} from "./CollectionPreview.style";

const CollectionPreview = ({ id, collectionName, items }) => {
  return (
    <CollectionPreviewWrapper>
      <Title>{collectionName}</Title>
      <CollectionPreviewContainer>
        {items.slice(0, 4).map((item) => (
          <CollectionPreviewItem key={item.id} item={item} />
        ))}
      </CollectionPreviewContainer>
    </CollectionPreviewWrapper>
  );
};

export default CollectionPreview;
