import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ totalAmounts }) => {
  const [, setStripeToken] = useState(null);

  const KEY = "pk_test_E3Gl1XAVpS19uKzvF0jUjulh00SuUM68zY";

  const onToken = (token) => {
    setStripeToken(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='My Store'
      billingAddress
      shippingAddress
      description={`Your Total is $${totalAmounts}`}
      amount={totalAmounts * 100}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={KEY}>
      <button>Checkout</button>
    </StripeCheckout>
  );
};

export default StripeButton;
