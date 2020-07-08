import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({totalPrice, clearCart}) => {

    const handleToken = () => {
        clearCart();
    };

    return (
        <StripeCheckout
            style={{margin: '15px 0'}}
            stripeKey="pk_test_51H2bhVH43qUPQwY5FzGr7ZRbrza6ccMfLT9F23XFb2C7w4zuZQCHdvL5UYTDqxEVpX1hF9yROSCOZRYIZdxQMQKQ00xBxlH4ww"
            token={handleToken}
            billingAddress
            shippingAddress
            amount={totalPrice * 100}
        />
    );
};

export default StripeButton;