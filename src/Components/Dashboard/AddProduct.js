import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleAddProduct = (data) => {
    console.log(data);
  }

  return (
    <div className="w-3/4 mx-auto">
      <div className="text-center mt-2 mb-4">
        <h1 className="text-4xl fon-semibold">Add A Product</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(handleAddProduct)}>

          <div className="flex gap-2">
            <div className="w-full">
              <input {...register("name")} type="text" placeholder="Product Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="w-full">
              <input {...register("price")} type="text" placeholder="Product Price" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-full">
              <input {...register("phone")} type="text" placeholder="Phone Number" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="w-full">
              <input {...register("location")} type="text" placeholder="Product Location" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
          </div>
          
          <div>
            <p className="text-sm -mb-2 mt-2 font-medium">Select Product Category:</p>
            <select {...register("category")} name="category" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-300 rounded-md dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
              <option value="dslr">dslr</option>
              <option value="mirrorless">mirrorless</option>
              <option value="action">action</option>
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