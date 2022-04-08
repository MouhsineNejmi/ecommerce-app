import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// -------- Redux
import { useSelector, useDispatch } from "react-redux";
import { getCollections } from "../../app/features/collections/collectionsSlice";

// -------- Components
import CollectionsView from "./CollectionsView";

// -------- Styles
import { CollectionsWrapper } from "./Collections.style";

const CollectionsContainer = () => {
  let navigate = useNavigate();
  const collections = useSelector((state) => state.collections);
  const dispatch = useDispatch();

  const fetchCollections = () => dispatch(getCollections());

  useEffect(() => {
    fetchCollections();
  }, []);

  const pushRoute = (name) => navigate(`/shop/${name}`);

  return (
    <CollectionsWrapper>
      {collections &&
        collections.map((collection) => (
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
