import React from "react";

// -------- Components
import ProductCard from "../ProductCard/ProductCard";

// -------- Styles
import { CollectionProductsWrapper } from "./CollectionProducts.style";

const CollectionProducts = ({ products }) => {
  return (
    <CollectionProductsWrapper>
      {products.map((product) => {
        const { id, imageUrl, productName, price } = product;

        return (
          <ProductCard
            key={id}
            imageUrl={imageUrl}
            productName={productName}
            price={price}
          />
        );
      })}
    </CollectionProductsWrapper>
  );
};

export default CollectionProducts;
