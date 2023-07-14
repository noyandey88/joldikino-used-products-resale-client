import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NewCollections() {
  return (
    <section>
      <div className="px-4 py-8 mx-auto sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50, duration: 1.25, ease: "easeInOut", bounce: 0.3 }}
            viewport={{ once: true }}
            className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">New Collections</h2>

                <p className="mt-4 text-gray-500">
                  Visit our sites or subscribe our newsletters for new update of products and collections.
                </p>
              </header>

              <Link
                to="/"
                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-green-500 border rounded hover:shadow focus:outline-none focus:ring"
              >
                Shop All
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <motion.li
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ type: "spring", stiffness: 40, duration: 1.25, ease: "easeInOut", bounce: 0.3 }}
                viewport={{ once: true }}
              >
                <Link to="/" className="block group">
                  <img
                    src="https://images.pexels.com/photos/14997916/pexels-photo-14997916/free-photo-of-photo-of-a-body-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="camera"
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3">
                    <h3
                      className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                    >
                      Simple Watch
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">$150</p>
                  </div>
                </Link>
              </motion.li>

              <motion.li
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ type: "spring", stiffness: 30, duration: 1.25, ease: "easeInOut", bounce: 0.3 }}
                viewport={{ once: true }}
              >
                <Link to="/" className="block group">
                  <img
                    src="https://images.pexels.com/photos/3878617/pexels-photo-3878617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="camera"
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3">
                    <h3
                      className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                    >
                      Simple Watch
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">$150</p>
                  </div>
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}