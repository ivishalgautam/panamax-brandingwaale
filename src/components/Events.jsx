import React from "react";
import { MdLocationPin } from "react-icons/md";
import eventImg from "../assets/event-speaker.webp";

const Events = () => {
  return (
    <section className="p-4 md:p-16 bg-white">
      <h2 className="text-3xl font-thin text-primary text-center capitalize mb-10">
        recent <span className="font-bold italic text-shadow">events</span>
      </h2>
      <div className="flex-box-center gap-4 flex-wrap lg:flex-nowrap gap-y-8">
        <div className="flex-box-center flex-wrap sm:flex-nowrap rounded-xl border relative gap-4 p-4">
          <div className="absolute -top-6 left-2 text-primary text-sm bg-white rounded-md font-bold py-1 px-2 capitalize">
            22 <br /> may
          </div>
          <img
            src={eventImg}
            alt=""
            className="w-56 h-full object-cover object-center rounded-lg shadow-lg"
          />
          <div className="flex-box-col-start gap-4 p-3">
            <div className="capitalize font-bold">
              <h3 className="">india's tape event</h3>
              <span className="inline-block text-xs">
                <MdLocationPin className="text-primary inline-block" /> Delhi,
                India
              </span>
            </div>
            <p>
              t to know where this information coWant to know where this
              information co
            </p>
            <button className="btn-primary px-6 py-1">Read More</button>
          </div>
        </div>

        <div className="flex-box-center flex-wrap sm:flex-nowrap rounded-xl border relative gap-4 p-4">
          <div className="absolute -top-6 left-2 text-primary text-sm bg-white rounded-md font-bold py-1 px-2 capitalize">
            22 <br /> may
          </div>
          <img
            src={eventImg}
            alt=""
            className="w-56 h-full object-cover object-center rounded-lg shadow-lg"
          />
          <div className="flex-box-col-start gap-4 p-3">
            <div className="capitalize font-bold">
              <h3 className="">india's tape event</h3>
              <span className="inline-block text-xs">
                <MdLocationPin className="text-primary inline-block" /> Delhi,
                India
              </span>
            </div>
            <p>
              t to know where this information coWant to know where this
              information co
            </p>
            <button className="btn-primary px-6 py-1">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
