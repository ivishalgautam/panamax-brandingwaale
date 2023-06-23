import { motion } from "framer-motion";
import React, { useRef } from "react";
import aboutBanner from "../assets/about-banner.png";
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
              Panamax is built on trust and forging enduring relationships.
              Trust sets us apart and propels us towards success. Our mission is
              to help everyone achieve greatness and create remarkable stories
              together. We have the solutions to transform your dreams into
              reality. With pride, we declare, "We Make Things Stick," and we
              commit to sticking with you on your journey towards fulfilling
              your aspirations.
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
              src={aboutBanner}
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
