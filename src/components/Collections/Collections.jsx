import React from "react";
import { useNavigate } from "react-router-dom";
// -------- Styles
import {
  CollectionsWrapper,
  CollectionWrapper,
  CollectionBackground,
  CollectionInfo,
} from "./Collections.style";
// -------- Data
import { collections } from "../../data/collections";

const Collections = () => {
  let navigate = useNavigate();
  const pushRoute = (name) => navigate(`/shop/${name}`);

  return (
    <CollectionsWrapper>
      {collections.map(({ id, image, name }) => (
        <CollectionWrapper key={id} onClick={() => pushRoute(name)}>
          <CollectionBackground image={image}></CollectionBackground>
          <CollectionInfo>
            <h3>{name} collection</h3>
            <h4>buy now</h4>
          </CollectionInfo>
        </CollectionWrapper>
      ))}
    </CollectionsWrapper>
  );
};

export default Collections;
