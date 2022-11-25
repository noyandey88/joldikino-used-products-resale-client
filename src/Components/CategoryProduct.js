import React from 'react';

const CategoryProduct = ({ camera }) => {
  const { productName, originalPrice, resalePrice, productImage, location, postedOn, condition, sellerName, stock, description } = camera;
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <img
        src={productImage}
        className="object-cover w-full h-64"
        alt=""
      />
      <div className="p-5 border border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <span
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
          >
            Posted On
          </span>
          <span className="text-gray-600">— {postedOn}</span>
        </p>
        <h2
          className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          {productName}
        </h2>
        <p className="mb-2 text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit sed quia
          consequuntur magni voluptatem doloremque.
        </p>
        <div className="flex justify-between">
          <div>
            <p className="font-medium">Original Price: {originalPrice}</p>
            <p className="font-medium">Resale Price: {resalePrice}</p>
            <p className="font-medium">Status: {stock}</p>
          </div>
          <div>
            <p className="font-medium">Condition: {condition}</p>
            <p className="font-medium">Location: {location}</p>
            <p className="font-medium">Seller: {sellerName}</p>
          </div>
        </div>
        <button className="btn btn-primary w-full mt-2">
          Book
        </button>
      </div>
    </div>
  );
};

export default CategoryProduct;