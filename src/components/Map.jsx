import React from "react";
import DatamapsIndia from "react-datamaps-india";

const Map = () => {
  return (
    <section className="px-4 md:px-12 flex flex-col lg:flex-row h-screen my-10 gap-4">
      {/* content */}
      <div className="flex-box-center lg:items-start flex-col">
        <h3 className="text-3xl font-thin text-primary capitalize">
          doing{" "}
          <span className="font-bold text-shadow italic">best practices</span>{" "}
          for best qualities
        </h3>
        <p className="text-lg mt-4">
          Lodam Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a
        </p>
        <div className="flex-box-center flex-wrap gap-y-6 mt-10 gap-4">
          <div className="relative bg-white rounded-lg px-3 py-2 text-center shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white rounded-full px-2 text-primary font-bold">
              25489+
            </div>
            <small className="capitalize text-gray-400 text-xs border-b border-primary px-1">
              workers
            </small>
            <h2 className="font-bold">Employeed</h2>
          </div>

          <div className="relative bg-white rounded-lg px-3 py-2 text-center shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white rounded-full px-2 text-primary font-bold">
              25489+
            </div>
            <small className="capitalize text-gray-400 text-xs border-b border-primary px-1">
              workers
            </small>
            <h2 className="font-bold">Employeed</h2>
          </div>

          <div className="relative bg-white rounded-lg px-3 py-2 text-center shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white rounded-full px-2 text-primary font-bold">
              25489+
            </div>
            <small className="capitalize text-gray-400 text-xs border-b border-primary px-1">
              workers
            </small>
            <h2 className="font-bold">Employeed</h2>
          </div>
        </div>
      </div>

      {/* map */}
      <div className="relative flex-col-center w-full h-full">
        <DatamapsIndia
          regionData={{
            "Andaman & Nicobar Island": {
              value: 0,
            },
            "Andhra Pradesh": {
              value: 0,
            },
            "Arunachal Pradesh": {
              value: 10,
            },
            Assam: {
              value: 10,
            },
            Bihar: {
              value: 0,
            },
            Chandigarh: {
              value: 0,
            },
            Chhattisgarh: {
              value: 0,
            },
            Delhi: {
              value: 10,
            },
            Goa: {
              value: 0,
            },
            Gujarat: {
              value: 10,
            },
            Haryana: {
              value: 10,
            },
            "Himachal Pradesh": {
              value: 0,
            },
            "Jammu & Kashmir": {
              value: 0,
            },
            Jharkhand: {
              value: 0,
            },
            Karnataka: {
              value: 0,
            },
            Kerala: {
              value: 10,
            },
            Lakshadweep: {
              value: 0,
            },
            "Madhya Pradesh": {
              value: 0,
            },
            Maharashtra: {
              value: 10,
            },
            Manipur: {
              value: 10,
            },
            Meghalaya: {
              value: 10,
            },
            Mizoram: {
              value: 10,
            },
            Nagaland: {
              value: 10,
            },
            Odisha: {
              value: 10,
            },
            Puducherry: {
              value: 0,
            },
            Punjab: {
              value: 10,
            },
            Rajasthan: {
              value: 10,
            },
            Sikkim: {
              value: 10,
            },
            "Tamil Nadu": {
              value: 0,
            },
            Telangana: {
              value: 0,
            },
            Tripura: {
              value: 10,
            },
            "Uttar Pradesh": {
              value: 10,
            },
            Uttarakhand: {
              value: 10,
            },
            "West Bengal": {
              value: 10,
            },
          }}
          mapLayout={{
            // legendTitle: "Number of OCs",
            startColor: "#fff",
            // endColor: "#E41D20",
            hoverTitle: "Count",
            noDataColor: "#ffffff",
            borderColor: "#777",
            hoverColor: "blue",
            hoverBorderColor: "green",
            height: 10,
            weight: 30,
          }}
          hoverComponent={({ value }) => {
            return (
              <div className="pointer-events-none cursor-none">
                {value.name}
              </div>
            );
          }}
        />
      </div>
    </section>
  );
};

export default Map;
