import React from "react";

import msmeLogo from "../assets/msme-logo.webp";

const Certificates = () => {
  return (
    <div className="py-12 px-4 md:px-12">
      <h2 className="text-3xl text-primary font-thin text-center capitalize mb-8">
        {" "}
        our <span className="font-bold italic text-shadow">
          certificates
        </span>{" "}
      </h2>

      <div className="flex-box-center flex-wrap lg:flex-nowrap gap-6 gap-y-10 mb-4">
        <div className="flex-box-col-center gap-2 bg-white rounded-xl">
          <img src={msmeLogo} alt="" className="w-56 rounded-xl" />
          <p className="font-bold">MSME Certificate</p>
          <button className="btn-primary translate-y-1/2 px-8">
            Read More
          </button>
        </div>

        <div className="flex-box-col-center gap-2 bg-white rounded-xl">
          <img src={msmeLogo} alt="" className="w-56 rounded-xl" />
          <p className="font-bold">MSME Certificate</p>
          <button className="btn-primary translate-y-1/2 px-8">
            Read More
          </button>
        </div>

        <div className="flex-box-col-center gap-2 bg-white rounded-xl">
          <img src={msmeLogo} alt="" className="w-56 rounded-xl" />
          <p className="font-bold">MSME Certificate</p>
          <button className="btn-primary translate-y-1/2 px-8">
            Read More
          </button>
        </div>

        <div className="flex-box-col-center gap-2 bg-white rounded-xl">
          <img src={msmeLogo} alt="" className="w-56 rounded-xl" />
          <p className="font-bold">MSME Certificate</p>
          <button className="btn-primary translate-y-1/2 px-8">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
