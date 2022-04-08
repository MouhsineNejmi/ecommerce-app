import React, { Fragment, useEffect } from "react";
// -------- Components
import ProductCard from "../../components/ProductCard/ProductCard";

// -------- Redux
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../app/features/products/productsSlice";
import { getCollections } from "../../app/features/collections/collectionsSlice";

// -------- Styles
import {
  ShopPageWrapper,
  ShopPageCollection,
  Title,
} from "./ShopPage.style.js";

const ShopPage = () => {
  const products = useSelector((state) => state.products);
  const collections = useSelector((state) => state.collections);
  const dispatch = useDispatch();

  const allProductsAndCategories = () => {
    dispatch(getProducts());
    dispatch(getCollections());
  };

  useEffect(() => {
    allProductsAndCategories();
  }, [products, collections]);

  return (
    <ShopPageWrapper>
      {collections.map((collection) => {
        return (
          <Fragment key={collection.id}>
            <Title>{collection.name}</Title>
            <ShopPageCollection>
              {products[collection.name].items.slice(0, 4).map((product) => {
                const { id, imageUrl, productName, price, isFavorite } =
                  product;

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
              })}
            </ShopPageCollection>
          </Fragment>
        );
      })}
    </ShopPageWrapper>
  );
};

export default ShopPage;
