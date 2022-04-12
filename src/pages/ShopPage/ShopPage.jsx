import React from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

// -------- Data
import { products } from "../../data/products";

// -------- Styles
import { ShopPageWrapper } from "./ShopPage.style.js";

const ShopPage = () => {
  return (
    <ShopPageWrapper>
      {products.map((product) =>
        Object.keys(product).map((key) => {
          const { id, collection, items } = product[key];

          return (
            <CollectionPreview
              key={id}
              id={id}
              collectionName={collection}
              items={items}
              slice={true}
            />
          );
        }),
      )}
    </ShopPageWrapper>
  );
};

export default ShopPage;
