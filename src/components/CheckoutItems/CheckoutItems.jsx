import React from "react";
import * as Io from "react-icons/io";
import * as Ai from "react-icons/ai";

// ------ Redux
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../../app/cart/cartSlice";
import { useDispatch } from "react-redux";

// ------ Styles
import {
  CheckoutItemcontainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./CheckoutItems.style";

const CheckoutItems = ({
  id,
  imageUrl,
  isFavorite,
  productName,
  quantity,
  price,
}) => {
  const dispatch = useDispatch();

  const decreaseQuan = () => dispatch(decreaseQuantity(id));
  const addToCartIncreaseQuantity = () => {
    dispatch(
      addToCart({ id, imageUrl, isFavorite, productName, quantity, price }),
    );
  };

  const removeProductFromCart = () => dispatch(removeFromCart(id));

  return (
    <CheckoutItemcontainer id={id}>
      <ImageContainer
        style={{ backgroundImage: `url(${imageUrl})` }}></ImageContainer>
      <TextContainer>{productName}</TextContainer>
      <QuantityContainer>
        <div onClick={decreaseQuan}>
          <Io.IoIosArrowBack />
        </div>
        <span>{quantity}</span>
        <div onClick={addToCartIncreaseQuantity}>
          <Io.IoIosArrowForward />
        </div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <RemoveButtonContainer onClick={removeProductFromCart}>
        <Ai.AiOutlineClose />
      </RemoveButtonContainer>
    </CheckoutItemcontainer>
  );
};

export default CheckoutItems;
