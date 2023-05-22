import React from "react";
import { BiBarChartAlt2 } from "react-icons/bi";

const Statements = () => {
  return (
    <section className="bg-white px-4 py-8">
      <h2 className="text-3xl font-thin text-primary capitalize mb-12 text-center">
        our <span className="italic font-bold text-shadow">statements</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative p-5 border rounded-xl text-center">
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-primary bg-white">
            <BiBarChartAlt2 size={45} />
          </div>
          <h2 className="text-2xl font-bold">Vision</h2>
          <p className="">
            To become a leading supplier of Tapes and Adhesives. To be the best
            solution provider for accessories of Tapes by providing unmatched
            quality products at the most competitive prices.
          </p>
        </div>
        <div className="relative p-5 border rounded-xl text-center">
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-primary bg-white">
            <BiBarChartAlt2 size={45} />
          </div>
          <h2 className="text-2xl font-bold">Principles</h2>
          <p className="">
            To become a leading supplier of Tapes and Adhesives. To be the best
            solution provider for accessories of Tapes by providing unmatched
            quality products at the most competitive prices.
          </p>
        </div>
        <div className="relative p-5 border rounded-xl text-center">
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-primary bg-white">
            <BiBarChartAlt2 size={45} />
          </div>
          <h2 className="text-2xl font-bold">Values</h2>
          <p className="">
            To become a leading supplier of Tapes and Adhesives. To be the best
            solution provider for accessories of Tapes by providing unmatched
            quality products at the most competitive prices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statements;
