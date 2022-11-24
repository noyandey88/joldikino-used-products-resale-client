import { format } from 'date-fns/esm';
import React from 'react';
import { useForm } from 'react-hook-form';
import { saveImage } from '../../api/imageUpload';

const AddProduct = () => {
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
    
    saveImage(image)
    .then(data => {
      console.log(data);
    })
  }

  return (
    <div className="w-full px-2 lg:px-0 lg:w-3/4 mx-auto">
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
                <option value="chattogram">chattogram</option>
                <option value="cumilla">cumilla</option>
                <option value="dhaka">dhaka</option>
                <option value="rajshahi">rajshahi</option>
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
          <div className="w-full mt-2">
            <button className="btn btn-primary w-full" type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;