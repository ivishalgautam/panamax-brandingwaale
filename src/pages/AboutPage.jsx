import React from "react";
import About from "../components/About";
import Statements from "../components/Statements";
import Map from "../components/Map";
import Testimonial from "../components/Testimonial";
import { Helmet } from "react-helmet-async";
import breadCrumbBanner from "../assets/breadcrumb-product-banner.png";

import BreadCrumb_common from "../components/BreadCrumb_common";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      {/* breadcrumb */}
      <BreadCrumb_common />
      <About />
      <Statements />
      <Testimonial />
      <Map />
    </>
  );
};

export default AboutPage;
