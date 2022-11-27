import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { savePaymentInfo } from '../../../api/payment';
import { updateStockStatusSold } from '../../../api/product';
import Spinner from '../../../Components/Spinner';

const ProductCheckoutForm = ({ bookingInfo }) => {
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [success, setSuccess] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [loading, setLoading] = useState(true);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { itemPrice, buyerEmail, buyerName, _id, itemId } = bookingInfo;

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem('joldikino-token')}`
      },
      body: JSON.stringify({ itemPrice: Number(itemPrice) }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClientSecret(data.clientSecret);
        setLoading(false);
      });
  }, [itemPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // prevent no payment data
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError('');
    }
    setSuccess('');
    setPaymentProcessing(true);
    const { paymentIntent, error: confirmPaymentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: buyerEmail
          },
        },
      },
    );

    if (confirmPaymentError) {
      setCardError(confirmPaymentError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        price: Number(itemPrice),
        transactionId: paymentIntent.id,
        email: buyerEmail,
        bookingId: _id
      }
      // store payment info in database
      savePaymentInfo(payment)
        .then(data => {
          console.log(data);
          if (data.result.insertedId) {
            setSuccess('Congratulations! Your payment is successful');
            setTransactionId(paymentIntent.id);

            updateStockStatusSold(itemId)
              .then(data => {
                console.log(data);
                toast.success('Payment Done');
              }).catch(error => {
                console.log(error);
              })
          }
        }).catch(error => {
          console.error(error);
        })
    }
    setPaymentProcessing(false);
    // console.log('payment', paymentIntent);

  };

  // loading spinner

  if (loading) {
    return <Spinner></Spinner>
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-primary btn-sm mt-4" type="submit"
          disabled={!stripe || !clientSecret || paymentProcessing}>
          Pay
        </button>
      </form>
      {
        cardError && <p className="text-red-500 font-semibold">{cardError}</p>
      }
      {
        success && (
          <div className="mt-2">
            <p className="text-green-500 font-semibold">{success}</p>
            <p>Your Payment Transaction ID: <span className="font-semibold">{transactionId}</span></p>
          </div>
        )
      }
    </div>
  );
};

export default ProductCheckoutForm;