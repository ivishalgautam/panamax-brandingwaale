import React, { useRef } from "react";
import Map from "./Map";
import Hero from "./Hero";
import About from "./About";
import Footer from "./Footer";
import Industries from "./Industries";
import Quality from "./Quality";
import Blogs from "./Blogs";
import Products from "./Products";
import Statements from "./Statements";
import Certificates from "./Certificates";
import Events from "./Events";
import Clients from "./Clients";
import { FadeInWhenVisible } from "../utils/FadeInWhenInView";

const HomePage = ({ blogs }) => {
  const container = useRef(null);

  return (
    <div ref={container} className="bg-pink-light">
      <Hero />
      <FadeInWhenVisible>
        <About />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Products />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Map />
      </FadeInWhenVisible>
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
        <Clients />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Statements />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Certificates />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Events />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Footer />
      </FadeInWhenVisible>
    </div>
  );
};

export default HomePage;
