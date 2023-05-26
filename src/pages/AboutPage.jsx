import React, { useEffect } from "react";
import Statements from "../components/Statements";
import Map from "../components/Map";
import Testimonial from "../components/Testimonial";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
// import breadCrumbBanner from "../assets/breadcrumb-product-banner.png";
import heroImage from "../assets/hero-image.png";

import BreadCrumb_common from "../components/BreadCrumb_common";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const AboutPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
        delayChildren: 0.3,
        staggerChildren: 0.2,
      }}
    >
      <Helmet>
        <title>About</title>
      </Helmet>
      {/* breadcrumb */}
      <BreadCrumb_common />
      <section className="bg-white w-full grid grid-cols-1 lg:grid-cols-2 gap-5 p-4 mt-4 md:p-10 relative after:absolute after:top-0 after:right-0 after:bg-primary after:w-1/6 after:h-full after:-z-10 z-0 after:hidden after:lg:block">
        {/* content */}
        <motion.div
          initial="hidden"
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="px-2 md:px-8 lg:px-10 col-span-1"
        >
          <h2 className="text-2xl font-bold ">
            About{" "}
            <span className="inline-block text-primary italic drop-shadow-lg">
              Panamax
            </span>
          </h2>
          <div className="my-6 text-sm">
            <p className="mt-4 text-lg">
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
        </motion.div>

        {/* image section */}
        <motion.div
          initial="hidden"
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex-box-center col-span-1"
        >
          <figure>
            <img src={heroImage} alt="" />
          </figure>
        </motion.div>
      </section>
      <Statements />
      <Testimonial />
      <Map />
      <Footer />
    </motion.div>
  );
};

export default AboutPage;
