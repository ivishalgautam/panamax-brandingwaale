import React, { useState } from "react";
import image from "../assets/New Project.png";

const Clients = () => {
  const [length, setLength] = useState(12);
  return (
    <section className="px-4 md:px-16 py-12 flex-box-col-center  bg-no-repeat bg-cover bg-center w-full">
      <h2 className="text-3xl text-primary font-thin text-center capitalize mb-8">
        our <span className="font-bold italic text-shadow">clients</span>
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-4">
        {Array.from({ length }).map((_, key) => {
          return <img src={image} alt="" key={key} className="rounded-md" />;
        })}
      </div>
      <button
        className="btn-primary"
        onClick={() => setLength((prev) => prev + 6)}
      >
        Load More
      </button>
    </section>
  );
};

export default Clients;
