import React, { useState } from "react";
import { Link } from "react-router-dom";

import heroImage from "../assets/hero-image.png";

const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full">
      <h2 className="font-thin text-primary text-3xl text-center my-8">
        Industries{" "}
        <span className="inline-block font-bold italic text-shadow">
          We Serve
        </span>
      </h2>

      <div className="flex-box-center flex-wrap gap-5 px-4 md:px-12 lg:px-16">
        {Array.from({ length: 9 }).map((item, key) => {
          return (
            <Link to={"/industries"} key={key}>
              <div
                className="relative shadow-xl rounded-xl overflow-hidden"
                onMouseOver={() => setHoveredIndex(key)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <figure className="w-[250px] h-[300px] relative z-0 before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black hover:before:from-primary before:z-10">
                  <img
                    src={heroImage}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </figure>
                <button
                  className={` ${
                    hoveredIndex === key ? "opacity-100" : "opacity-0"
                  } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 btn-primary rounded-xl transition-none`}
                >
                  View More
                </button>
                <h2
                  className={`py-2 absolute ${
                    hoveredIndex === key ? "bottom-8" : "bottom-4"
                  } w-2/3 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none rounded-full border border-white text-white transition-all`}
                >
                  Automotive Industry
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Industries;
