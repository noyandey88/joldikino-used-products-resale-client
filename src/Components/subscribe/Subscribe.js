import { motion } from "framer-motion"

export default function Subscribe() {
  return (
    <section>
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50, duration: 1.25, ease: "easeInOut", bounce: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Subscribe for new products offers
          </h2>
          <p className="hidden text-gray-500 text-sm sm:mt-2 sm:block">
            Subscribe our newsletters to get the news of new products and discounts.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", stiffness: 45, duration: 1.25, ease: "easeInOut", bounce: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-xl">
          <form action="#" className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" placeholder="Email address" className="w-full rounded-md border-2 border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-green-400" />
            </div>
            <button type="submit" className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto">
              <span className="text-sm font-medium"> Subscribe </span>
              <svg className="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}