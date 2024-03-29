import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { saveBooking } from '../../../api/bookingApi';
import { updateAdvertiseStatusToFalse, updateStockStatusBooked } from '../../../api/product';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookAdvertisedItem = ({ camera, setAdvertisedProduct, refetch }) => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const { productName, resalePrice, productImage, sellerEmail } = camera;

  const handleBook = (data) => {
    const bookingInfo = {
      buyerName: data.name,
      buyerEmail: data.email,
      buyerPhone: data.phone,
      buyerLocation: data.location,
      itemName: data.itemName,
      itemPrice: data.price,
      itemImage: productImage,
      bookingDate: format(new Date(), 'PP'),
      sellerEmail: sellerEmail
    };
    console.log(bookingInfo);

    if (user === null) {
      return toast.error('Please login to continue');
    }

    // save bookings
    saveBooking(bookingInfo)
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          updateStockStatusBooked(camera)
            .then(data => {
              console.log(data);
              //update advertise status false
              updateAdvertiseStatusToFalse(camera)
                .then(data => {
                  toast.success('Product Booked Successfully');
                  refetch();
                  console.log(data);
                }).catch(error => {
                  console.error(error);
                })
            }).catch(error => {
              console.error(error);
              toast.error(error.message);
            })
        }
      }).catch(error => {
        console.log(error);
        toast.error(error.message);
      })
    // close modal
    setAdvertisedProduct(null);
  }
  return (
    <div>
      <input type="checkbox" id="book-advertisedItem" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="book-advertisedItem" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-semibold my-2">Booking Item: {productName}</h3>
          {/* booking form */}
          <div>
            <form onSubmit={handleSubmit(handleBook)} className="space-y-2">
              {/* user name */}
              <div>
                <input {...register("name")} name="name" defaultValue={user?.displayName} readOnly
                  type="text" className="block w-full py-3 border rounded-md px-6 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Name" />
              </div>
              {/* user email */}
              <div>
                <input {...register("email")} name="email" defaultValue={user?.email} readOnly
                  type="email" className="block w-full py-3 border rounded-md px-6 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
              </div>
              {/* item name */}
              <div>
                <input {...register("itemName")} name="itemName" defaultValue={productName} readOnly
                  type="text" className="block w-full py-3 border rounded-md px-6 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Item Name" />
              </div>
              {/* item price */}
              <div>
                <input {...register("price")} name="price" defaultValue={parseInt(resalePrice)} readOnly
                  type="text" className="block w-full py-3 border rounded-md px-6 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Price" />
              </div>
              {/* item name */}
              <div>
                <input {...register("phone")} name="phone"
                  type="text" className="block w-full py-3 border rounded-md px-6 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Phone Number" />
              </div>
              {/* item name */}
              <div>
                <input {...register("location")} name="location"
                  type="text" className="block w-full py-3 border rounded-md px-6 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Meeting Location" />
              </div>
              {/* submit button */}
              <div>
                <button className="btn bg-green-500 hover:bg-green-600 border-0 w-full" type="submit">Book Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAdvertisedItem;