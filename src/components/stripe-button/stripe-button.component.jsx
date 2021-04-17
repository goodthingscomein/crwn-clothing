import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51IhBtTHph62mLonYp59dFIA8mhFgiX926ZXbsZptDuMFedOYIqO1ggyh5nL6tBunkTp9HjSO421dMYioSHtNwfQ700K142Sj9G";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            currency='AUD'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

}

export default StripeCheckoutButton;