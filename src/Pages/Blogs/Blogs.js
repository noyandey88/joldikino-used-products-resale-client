import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{duration: 2, ease: "easeInOut"}}
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
              {/* question 1 */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ type: "spring", stiffness: 40, duration: 1, ease: "easeInOut" }}
            >
              <p className="mb-4 text-xl font-medium">
                What are the different ways to manage a state in a React Application?
              </p>
              <p className="text-gray-700">
                There are four main types of state to properly manage in a React app. Types are Local State, Global state, Server state, URL state. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL.
              </p>
            </motion.div>
              {/* question 2 */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ type: "spring", stiffness: 35, duration: 1.1, ease: "easeInOut" }}
            >
              <p className="mb-4 text-xl font-medium">
                How does prototypical inheritance work?
              </p>
              <p className="text-gray-700">
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object. Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values). JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.
              </p>
            </motion.div>
          </div>
          <div className="space-y-8">
              {/* question 3 */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ type: "spring", stiffness: 30, duration: 1, ease: "easeInOut" }}
            >
              <p className="mb-4 text-xl font-medium">
                What is unit test? Why should we write unit tests?
              </p>
              <p className="text-gray-700">
                Unit testing, a testing technique using which individual modules are tested to determine if there are any issues by the developer himself. It is concerned with functional correctness of the standalone modules. The main aim is to isolate each unit of the system to identify, analyze and fix the defects.
                <br />
                It Reduces Defects in the Newly developed features or reduces bugs when changing the existing functionality. Also reduces Cost of Testing as defects are captured in very early phase. Improves design and allows better refactoring of code. Unit Tests, when integrated with build gives the quality of the build as well.
              </p>
            </motion.div>
              {/* question 4 */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ type: "spring", stiffness: 25, duration: 1.1, ease: "easeInOut" }}
            >
              <p className="mb-4 text-xl font-medium">
                React vs Angular vs Vue?
              </p>
              <p className="text-gray-700">
                <span className="font-bold">React</span> is a JavaScript library for building user interfaces. It was developed by Facebook, was initially released in 2013. React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages. One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course.
                <br />
                <span className="font-bold">Angular</span> is JavaScript framework developed by Google. It was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module. 
                <br />
                <span className="font-bold">Vue</span> is An approachable, performant and versatile framework for building web user interfaces. It was developed by ex-Google employee Evan You in 2014. Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Blogs;