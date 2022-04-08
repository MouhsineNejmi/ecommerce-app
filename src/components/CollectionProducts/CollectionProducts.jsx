import React, { useEffect } from "react";

// -------- Styles
import { CollectionProductsWrapper } from "./CollectionProducts.style";
// -------- Components
import ProductCard from "../ProductCard/ProductCard";
// ------- Redux
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCollection } from "../../app/features/products/productsSlice";

const CollectionProducts = ({ collectionName }) => {
  const dispatch = useDispatch();
  const collectionProducts = useSelector((state) => state.products);

  const getCollectionProducts = (name) =>
    dispatch(getProductsByCollection(name));
  const collectionProductsItems = collectionProducts?.items;

  useEffect(() => {
    getCollectionProducts(collectionName);
  }, []);

  return (
    <CollectionProductsWrapper>
      {collectionProductsItems ? (
        collectionProductsItems.map((collectionProduct) => {
          const { id, imageUrl, productName, price, isFavorite } =
            collectionProduct;

          return (
            <ProductCard
              key={id}
              id={id}
              imageUrl={imageUrl}
              productName={productName}
              price={price}
              isFavorite={isFavorite}
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
