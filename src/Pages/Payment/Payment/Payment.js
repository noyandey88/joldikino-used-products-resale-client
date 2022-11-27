import { format } from 'date-fns/esm';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
  const data = useLoaderData();
  const payingDate = format(new Date(), 'PP');
  console.log(data);
  return (
    <div>
      <div className="border-2 md:flex justify-evenly p-2">
        <div>
          <h2 className="font-medium">Item Name: <span className="font-bold">{data?.itemName}</span></h2>
          <h2 className="font-medium">Payable Amount: <span className="font-bold">${data?.itemPrice}</span></h2>
        </div>
        <div>
          <h2 className="font-medium">Booked At: <span className="font-bold">{data?.bookingDate}</span></h2>
          <h2 className="font-medium">Paying On: <span className="font-bold">{payingDate}</span></h2>
        </div>
      </div>
    </div>
  );
};

export default Payment;