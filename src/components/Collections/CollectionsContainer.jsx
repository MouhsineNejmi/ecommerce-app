import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// -------- Data
import { collections } from "../../data/collections";

// -------- Components
import CollectionsView from "./CollectionsView";

// -------- Styles
import { CollectionsWrapper } from "./Collections.style";

const fetchCollections = () => {
  return collections;
};

const CollectionsContainer = () => {
  let navigate = useNavigate();
  const [_collections, _setCollections] = useState([]);

  useEffect(() => {
    const getCollections = fetchCollections();
    _setCollections(getCollections);
  }, []);

  const pushRoute = (name) => navigate(`/shop/${name}`);

  return (
    <CollectionsWrapper>
      {_collections &&
        _collections.map((collection) => (
          <CollectionsView
            key={collection.id}
            collection={collection}
            pushRoute={pushRoute}
          />
        ))}
    </CollectionsWrapper>
  );
};

export default CollectionsContainer;
