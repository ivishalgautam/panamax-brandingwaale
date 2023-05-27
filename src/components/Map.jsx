import React from "react";
import mapImg from "../assets/map.png";

const Map = () => {
  return (
    <section className="px-4 md:px-12 flex-box-around flex-col lg:flex-row  gap-4 py-10 lg:py-0">
      {/* content */}
      <div className="flex-box-center lg:items-start flex-col ">
        <h3 className="text-3xl font-thin text-primary capitalize">
          Widespread{" "}
          <span className="font-bold text-shadow italic">Nationwide</span>{" "}
          Presence
        </h3>
        <p className="text-lg mt-4 ">
          Panamax Limited has a significant presence throughout India, <br />{" "}
          catering to diverse markets and meeting various industrial and
          consumer demands.
        </p>
        {/* <div className="flex-box-center gap-y-6 mt-10 gap-4 hidden lg:flex">
          <div className="relative bg-white rounded-lg px-3 py-2 text-center shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary rounded-full px-2 text-white text-sm font-bold">
              25489+
            </div>
            <small className="capitalize text-gray-400 text-xs border-b border-primary px-1">
              workers
            </small>
            <h2 className="font-bold">Employeed</h2>
          </div>

          <div className="relative bg-white rounded-lg px-3 py-2 text-center shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary rounded-full px-2 text-white text-sm font-bold">
              25489+
            </div>
            <small className="capitalize text-gray-400 text-xs border-b border-primary px-1">
              workers
            </small>
            <h2 className="font-bold">Employeed</h2>
          </div>

          <div className="relative bg-white rounded-lg px-3 py-2 text-center shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary rounded-full px-2 text-white text-sm font-bold">
              25489+
            </div>
            <small className="capitalize text-gray-400 text-xs border-b border-primary px-1">
              workers
            </small>
            <h2 className="font-bold">Employeed</h2>
          </div>
        </div> */}
      </div>

      {/* map */}
      <div className="h-full flex-box-center">
        <div className="mapSite">
          <img src={mapImg} alt="" />
          {/* <div className="flex-box-center gap-y-6 mt-10 gap-4 lg:hidden">
            <div className="relative bg-white rounded-lg px-3 py-2 text-center shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary rounded-full px-2 text-white text-sm font-bold">
                25489+
              </div>
              <small className="capitalize text-gray-400 text-xs border-b border-primary px-1">
                workers
              </small>
              <h2 className="font-bold">Employeed</h2>
            </div>

            <div className="relative bg-white rounded-lg px-3 py-2 text-center shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary rounded-full px-2 text-white text-sm font-bold">
                25489+
              </div>
              <small className="capitalize text-gray-400 text-xs border-b border-primary px-1">
                workers
              </small>
              <h2 className="font-bold">Employeed</h2>
            </div>

            <div className="relative bg-white rounded-lg px-3 py-2 text-center shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary rounded-full px-2 text-white text-sm font-bold">
                25489+
              </div>
              <small className="capitalize text-gray-400 text-xs border-b border-primary px-1">
                workers
              </small>
              <h2 className="font-bold">Employeed</h2>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Map;
