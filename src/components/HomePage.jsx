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
import InvitationModal from "./InvitationModal";

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
        <meta
          name="keyword"
          content="Masking Tape,  Pre-Masking Tape, THB Acrylic Nano-Sil Tape, Mirror Mounting Tape, PMX 5000 Electrical Insulation Tape, Dry Wall Joint Tape, PTFE Thread Seal Tape, Plate Mounting Tape, PTFE Fiber Tape, Structural Glazing Tape, Multi Stick Tape, Anti-Slip Tape, Shuttering Tape, Laminate Fixing Tape, Edge Banding Tape, Roof Repair Tape, Leak Stopper Tape, Surface Protection Tape, Craft Paper Tape, BOPP Packaging Tape, Floor Protection Tape, Wood Guard Tape, Floor Marking Tape, Spacer & Eva Cloth Duct Tape, Red Polyster Tape, adhesive tape, mask tape, tape manufacture, self adhesive tape"
        />
      </Helmet>

      <InvitationModal />

      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
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
        <Footer />
      </FadeInWhenVisible>
    </div>
  );
};

export default HomePage;
