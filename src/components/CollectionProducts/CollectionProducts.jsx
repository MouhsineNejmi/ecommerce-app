import React, { useEffect } from "react";

// -------- Styles
import { CollectionProductsWrapper } from "./CollectionProducts.style";
// -------- Components
import ProductCard from "../ProductCard/ProductCard";
// ------- Redux
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../app/features/products/productsSlice";

const CollectionProducts = ({ collectionName }) => {
  const dispatch = useDispatch();
  const collectionProducts = useSelector((state) => state.products);

  const getCollectionProducts = (name) => dispatch(getProducts(name));
  const collectionProductsItems = collectionProducts?.items;

  useEffect(() => {
    getCollectionProducts(collectionName);
  }, []);

  return (
    <CollectionProductsWrapper>
      {collectionProductsItems ? (
        collectionProductsItems.map((collectionProduct) => {
          const { id, imageUrl, productName, price } = collectionProduct;

          return (
            <ProductCard
              key={id}
              imageUrl={imageUrl}
              productName={productName}
              price={price}
            />
          );
        })
      ) : (
        <p>No Products</p>
      )}
    </CollectionProductsWrapper>
  );
};

export default CollectionProducts;
