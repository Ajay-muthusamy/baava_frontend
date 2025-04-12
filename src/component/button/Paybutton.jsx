import React from 'react';
import axios from 'axios';
import { useStripe } from '@stripe/react-stripe-js';

function Paybutton() {
  const stripe = useStripe();

  const handleClick = async () => {
    const response = await axios.post('http://localhost:1234/create-checkout-session');
    const session = response.data;

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return <button onClick={handleClick}>Checkout</button>;
}

export default Paybutton;
