import { motion } from "framer-motion";
import React, { useRef } from "react";
import heroImage from "../assets/image.png";
import { Link } from "react-router-dom";

const About = () => {
  const ref = useRef();

  return (
    <>
      <section className="bg-white w-full grid grid-cols-1 lg:grid-cols-12 gap-5 p-4 mt-4 md:p-10 relative after:absolute after:top-0 after:right-0 after:bg-primary after:w-1/6 after:h-full after:-z-10 z-0 after:hidden after:lg:block">
        {/* content */}
        <motion.div
          initial="hidden"
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          ref={ref}
          className="px-2 md:px-8 lg:px-10 col-span-12 md:col-span-7"
        >
          <h2 className="text-2xl font-bold ">
            About{" "}
            <span className="inline-block text-primary italic drop-shadow-lg">
              Panamax
            </span>
          </h2>
          <div className="my-6 text-sm">
            <p className="mt-4">
              Panamax a name synonym to trust and relation. Little did we know
              when we the Panamax Family questioned ourselves about what is that
              single factor that keeps us together, binds us with our customers
              and differentiate us vis-Ã -vis our competitors. Together we
              concluded that it is nothing else but our ability and our passion
              to live every single day of our life to win the trust of our
              customers and build a relation with every single of our
              stakeholder that leads us together to the path of success and
              prosperity.
            </p>
          </div>
          <Link to="/about" className="btn-primary">
            Read more
          </Link>
        </motion.div>

        {/* image section */}
        <motion.div
          initial="hidden"
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          ref={ref}
          className="flex-box-center col-span-12 md:col-span-5 w-full"
        >
          <figure>
            <img
              src={heroImage}
              alt=""
              className="sm:w-full lg:w-[85%] rounded-xl"
            />
          </figure>
        </motion.div>
      </section>
    </>
  );
};

export default About;
