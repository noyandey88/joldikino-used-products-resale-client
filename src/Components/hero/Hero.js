import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import cameraAnimation from "../../assets/animation_lk05ugyp.json";

export default function Hero() {
  return (
    <section>
      <div className="px-4 pt-20 gap-12 text-gray-600 overflow-hidden md:px-0 md:flex">
        <div className='flex-none space-y-5 max-w-xl'>
          <Link to="/blogs" className='inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white'>
            <span className='inline-block rounded-full px-3 py-1 bg-green-600 text-white'>
              Blogs
            </span>
            <p className='flex items-center'>
              Read the blogs from here
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </p>
          </Link>
          <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
            Revive & Rediscover: Unleash the Beauty of Preloved
          </h1>
          <p>
            Unlock a world of hidden gems at our resale haven. Browse, buy, and embrace the beauty of preloved treasures, waiting to be cherished anew. Experience the joy of sustainable shopping with our curated collection of quality used products.
          </p>
          <div className='flex items-center gap-x-3 sm:text-sm'>
            <Link to="/dashboard" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-green-600 duration-150 hover:bg-green-700 active:bg-green-900 rounded-full md:inline-flex">
              Get started
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link to="/" className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex">
              Contact sales
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
        <div className='flex-1'>
            {/* lottie */}
            <Lottie className="aspect-auto lg:w-full lg:aspect-auto lg:-mt-36 p-8"
              animationData={cameraAnimation} loop={true} />
        </div>
      </div>
    </section>
  )
}