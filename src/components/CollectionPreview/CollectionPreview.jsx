import React from "react";
import CollectionPreviewItem from "../CollectionPreviewItem/CollectionPreviewItem";
// ------ Styles
import {
  CollectionPreviewWrapper,
  Title,
  CollectionPreviewContainer,
} from "./CollectionPreview.style";

const CollectionPreview = ({ id, collectionName, items, slice }) => {
  return (
    <CollectionPreviewWrapper>
      {slice && <Title>{collectionName}</Title>}
      <CollectionPreviewContainer>
        {slice
          ? items
              .slice(0, 4)
              .map((item) => (
                <CollectionPreviewItem key={item.id} item={item} />
              ))
          : items.map((item) => (
              <CollectionPreviewItem key={item.id} item={item} />
            ))}
      </CollectionPreviewContainer>
    </CollectionPreviewWrapper>
  );
};

export default CollectionPreview;
