// ------ Redux
import { useDispatch, useSelector } from "react-redux";
import { getTotalAmount } from "../../app/cart/cartSlice";

// ------ Components
import CheckoutItems from "../../components/CheckoutItems/CheckoutItems";
import * as Bs from "react-icons/bs";

// ------ Styles
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  CheckoutFooterContainer,
  CheckoutFooterBlockContainer,
  CheckoutFooterButtonContainer,
  CheckoutFooterLink,
  CheckoutMessageBlockContainer,
} from "./CheckoutPage.style";
import StripeButton from "../../components/StripeButton/StripeButton";
import { useEffect } from "react";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const priceForStripe = totalAmount.toFixed(2);

  useEffect(() => {
    dispatch(getTotalAmount());
  }, [cartProducts, dispatch]);

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>

      {cartProducts ? (
        cartProducts.map(
          ({ id, imageUrl, isFavorite, productName, price, quantity }) => (
            <CheckoutItems
              key={id}
              id={id}
              isFavorite={isFavorite}
              imageUrl={imageUrl}
              productName={productName}
              quantity={quantity}
              price={price}
            />
          ),
        )
      ) : (
        <p>No Checkout Products</p>
      )}

      <CheckoutFooterContainer>
        <CheckoutFooterBlockContainer>
          <h4>Subtotal</h4>
          <span>${priceForStripe}</span>
        </CheckoutFooterBlockContainer>

        <CheckoutFooterBlockContainer>
          <p>Taxes and shipping calculated at checkout</p>
        </CheckoutFooterBlockContainer>

        <CheckoutFooterButtonContainer>
          <StripeButton totalAmounts={priceForStripe} />
        </CheckoutFooterButtonContainer>

        <CheckoutFooterBlockContainer>
          <CheckoutFooterLink to='/shop'>
            <Bs.BsArrowLeftShort />
            <span>continue shopping</span>
          </CheckoutFooterLink>
        </CheckoutFooterBlockContainer>

        <CheckoutMessageBlockContainer>
          <p>*Please use the following test credit card for payments*</p>
          <p>4242 4242 4242 4242 - Exp: 04/22 - CVV: 123</p>
        </CheckoutMessageBlockContainer>
      </CheckoutFooterContainer>
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
