import React from 'react';
import { Link } from 'react-router-dom';
import dslr from '../../../assets/cameras/dslr-camera.jpg'
import mirrorless from '../../../assets/cameras/mirrorless-camera.jpg'
import action from '../../../assets/cameras/action-camera.jpg'

const Categories = () => {
  return (
    <div className="px-4 lg:px-0 mt-12">
      <div className="mb-8">
        <h1 className="text-4xl text-center font-bold">Camera Categories</h1>
      </div>
      <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* DSLR Cameras */}
        <Link to="/" className="group relative block bg-black">
          <img
            alt="Developer"
            src={dslr}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              Camera
            </p>

            <p className="text-2xl font-bold text-white">DSLR</p>

            <div className="mt-64">
              <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p className="text-sm text-white">
                  Used DSLR Cameras
                </p>
              </div>
            </div>
          </div>
        </Link>
        {/* Mirrorless cameras */}
        <Link to="/" className="group relative block bg-black">
          <img
            alt="Developer"
            src={mirrorless}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              Camera
            </p>

            <p className="text-2xl font-bold text-white">Mirrorless</p>

            <div className="mt-64">
              <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p className="text-sm text-white">
                  Used Mirroless Cameras
                </p>
              </div>
            </div>
          </div>
        </Link>
        {/* Action Cameras */}
        <Link to="/" className="group relative block bg-black">
          <img
            alt="Developer"
            src={action}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              Camera
            </p>

            <p className="text-2xl font-bold text-white">Action</p>

            <div className="mt-64">
              <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p className="text-sm text-white">
                  Used Action Cameras
                </p>
              </div>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Categories;