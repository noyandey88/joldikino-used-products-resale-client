import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { format } from 'date-fns/esm';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCheckoutForm from '../ProductCheckoutForm/ProductCheckoutForm';

// stripe promise
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const bookingInfo = useLoaderData();
  
  const payingDate = format(new Date(), 'PP');
  // console.log(bookingInfo);
  return (
    <div>
      <div className="border-2 md:flex justify-evenly p-2">
        <div>
          <h2 className="font-medium">Item Name: <span className="font-bold">{bookingInfo?.itemName}</span></h2>
          <h2 className="font-medium">Payable Amount: <span className="font-bold">${bookingInfo?.itemPrice}</span></h2>
        </div>
        <div>
          <h2 className="font-medium">Booked At: <span className="font-bold">{bookingInfo?.bookingDate}</span></h2>
          <h2 className="font-medium">Paying On: <span className="font-bold">{payingDate}</span></h2>
        </div>
      </div>
      <div className="w-1/2 mx-auto border-2 p-2 my-2">
        <Elements stripe={stripePromise}>
          <ProductCheckoutForm bookingInfo={bookingInfo} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;