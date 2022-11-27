import { SwatchIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Spinner from '../../../Components/Spinner';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
  const { user, logoutUser, loading, setLoading } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenu = <>
    <li>
      <Link
        to="/"
        aria-label="Our product"
        title="Our product"
        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/blogs"
        aria-label="Our product"
        title="Our product"
        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
      >
        Blogs
      </Link>
    </li>
    {
      user?.uid &&
      <li>
        <Link
          to="/dashboard"
          aria-label="Product pricing"
          title="Product pricing"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Dashboard
        </Link>
      </li>
    }
  </>

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        setLoading(false);
        toast.success('Logout Successful');
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      })
  };

  console.log(user);

  if (loading) {
    return <Spinner></Spinner>
  }

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-0">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <SwatchIcon className="h-8 w-8 text-green-500" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            JoldiKino
          </span>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          {navMenu}
        </ul>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          {
            user?.uid ?
                <button onClick={handleLogout} className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md btn bg-green-500 border-0 hover:bg-green-600">Logout</button>
              :
              <li>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md btn bg-green-500 border-0 hover:bg-green-600"
                >
                  Login
                </Link>
              </li>
          }
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <SwatchIcon className="h-6 w-6 text-green-500" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        JoldiKino
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {navMenu}
                    {
                      user?.uid ?
                        <div className="flex gap-4 items-center">
                          <button onClick={handleLogout} className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md btn bg-green-500 hover:bg-green-600 border-0">Logout</button>
                        </div>
                        :
                        <li>
                          <Link
                            to="/login"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md btn bg-green-500 hover:bg-green-600 border-0"
                          >
                            Login
                          </Link>
                        </li>
                    }
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;