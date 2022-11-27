import React from 'react';

const Banner = () => {
  return (
    <>
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full px-4 mx-auto lg:px-0 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Are you looking for used cameras?
                <br />
                So you are in the right place.
              </h2>
              <p className="text-base text-gray-700 text-justify md:text-lg">
                We are selling only used camera products which are resale. You can find different kinds of cameras in our website. But now, you can find only three categories of cameras. Our sellers are very polite. So a user can buy camera to contact with a seller.
              </p>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3170430/pexels-photo-3170430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;