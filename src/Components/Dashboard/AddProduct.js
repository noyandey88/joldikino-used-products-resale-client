import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { saveImage } from '../../api/imageUpload';
import { AuthContext } from '../../contexts/AuthProvider';

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const today = format(new Date(), 'PP');

  const handleAddProduct = (data) => {
    const productName = data.name;
    const phoneNumber = data.phone;
    const originalPrice = data.originalPrice;
    const resalePrice = data.resalePrice;
    const image = data.image[0];
    const location = data.location;
    const category = data.category;
    const condition = data.condition;
    const postedOn = today;

    saveImage(image)
      .then(data => {
        console.log(data);
        // product object
        const product = {
          productName: productName,
          originalPrice: originalPrice,
          resalePrice: resalePrice,
          productImage: data,
          phoneNumber: phoneNumber,
          location: location,
          category: category,
          postedOn: postedOn,
          condition: condition,
          sellerEmail: user?.email,
          sellerName: user?.displayName
        }

        console.log(product);

        fetch(`${process.env.REACT_APP_API_URL}/products`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('joldikino-token')}`
          },
          body: JSON.stringify(product)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.acknowledged) {
              toast.success("Product Added Successfully");
            }
          }).catch(err => {
            console.error(err);
            toast.error(err.message);
          })
      }).catch(error => {
        console.error(error);
      })
  }

  return (
    <div className="w-full px-2 lg:px-0 lg:w-3/4 mx-auto mb-6">
      <div className="text-center mt-4 mb-4">
        <h1 className="text-4xl fon-semibold">Add A Product</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(handleAddProduct)}>

          <div className="flex gap-2">
            <div className="w-full">
              <input {...register("name")} type="text" placeholder="Product Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="w-full">
              <input {...register("phone")} type="text" placeholder="Phone Number" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-full">
              <input {...register("originalPrice")} type="text" placeholder="Original Price" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="w-full">
              <input {...register("resalePrice")} type="text" placeholder="Resale Price" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
          </div>

          {/* image upload */}
          <div className="w-full">
            <input {...register("image")} type="file" placeholder="Phone Number" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" accept="image/*" />
          </div>

          <div className="flex gap-2">
            <div className="w-full">
              <p className="text-sm -mb-2 mt-2 font-medium">Select Product Location:</p>
              <select {...register("location")} name="location" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                <option value="Chattogram">Chattogram</option>
                <option value="Cumilla">Cumilla</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Rajshahi">Rajshahi</option>
              </select>
            </div>
            <div className="w-full">
              <p className="text-sm -mb-2 mt-2 font-medium">Select Product Category:</p>
              <select {...register("category")} name="category" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                <option value="dslr">dslr</option>
                <option value="mirrorless">mirrorless</option>
                <option value="action">action</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <p className="text-sm -mb-2 mt-2 font-medium">Select Product Condition:</p>
            <select {...register("condition")} name="category" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
            </select>
          </div>
          <div className="w-full mt-2">
            <button className="btn btn-primary w-full" type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;