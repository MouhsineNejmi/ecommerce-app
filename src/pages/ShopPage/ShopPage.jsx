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

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCollections());
  }, [dispatch]);

  return (
    <ShopPageWrapper>
      {collections.map((collection) => {
        const limitedCollectionProducts = products[collection.name].items.slice(
          0,
          4,
        );

        return (
          <Fragment key={collection.id}>
            <Title>{collection.name}</Title>
            <ShopPageCollection>
              {limitedCollectionProducts.map((product) => {
                const { id, imageUrl, productName, price } = product;

                return (
                  <ProductCard
                    key={id}
                    id={id}
                    imageUrl={imageUrl}
                    productName={productName}
                    price={price}
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
