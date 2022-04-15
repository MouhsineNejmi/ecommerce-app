import { useSelector } from "react-redux";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
} from "./CheckoutPage.style";
import CheckoutItems from "../../components/CheckoutItems/CheckoutItems";

const CheckoutPage = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);

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
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
