import React from 'react';

const Products = ({ product, handleAdvertise }) => {
  const { productName, productImage, stock, isAdvertised } = product;
  return (
    <div className="bg-gray-100/20 my-2 rounded-md flex justify-between items-center p-2 shadow-md">
      <div className="flex gap-4 items-center">
        <img className="w-20 h-20 object-cover" src={productImage} alt="product" />
        <div className="space-y-1">
          <p className="text-sm lg:text-base font-medium">Name: <span>{productName}</span></p>
          <p className="text-sm lg:text-base font-medium">Status: <span className="capitalize bg-teal-100 text-sm p-1 rounded-md font-semibold lg:text-base">{stock}</span></p>
          <p className="text-sm lg:text-base font-medium">Advertised: <span>{isAdvertised ? "Advertised" : "Not Advertised"}</span></p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <button onClick={() => handleAdvertise(product)} className="btn btn-sm lg:btn-md btn-success text-white">Advertise</button>
        <button className="btn btn-sm lg:btn-md btn-warning">Delete</button>
      </div>
    </div>
  );
};

export default Products;