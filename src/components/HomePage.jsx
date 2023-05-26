import React, { useRef } from "react";
import Map from "./Map";
import Hero from "./Hero";
import About from "./About";
import Footer from "./Footer";
import Industries from "./Industries";
import Quality from "./Quality";
import Blogs from "./Blogs";
import Products from "./Products";
import { FadeInWhenVisible } from "../utils/FadeInWhenInView";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = ({ blogs }) => {
  const container = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div ref={container} className="bg-pink-light">
      <Helmet>
        <title>Panamax</title>
      </Helmet>
      <Hero />
      <FadeInWhenVisible>
        <About />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Products />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible> */}
      {/* <Map /> */}
      {/* </FadeInWhenVisible> */}
      <FadeInWhenVisible>
        <Quality />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Industries />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Blogs blogs={blogs} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Footer />
      </FadeInWhenVisible>
    </div>
  );
};

export default HomePage;
