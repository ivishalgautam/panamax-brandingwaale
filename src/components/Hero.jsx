import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper";

import banner1 from "../assets/Banner-1.jpg";
import banner2 from "../assets/Banner-2.jpg";
import banner3 from "../assets/Banner-3.jpg";
import banner4 from "../assets/Banner-4.jpg";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-9 my-4 px-4 sm:px-8 md:px-12 gap-4">
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-1 lg:col-span-6 flex items-center justify-center"
      >
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <figure className="rounded-2xl h-full w-full overflow-hidden">
              <img
                src={banner1}
                alt=""
                className="object-cover object-center h-full w-full"
              />
            </figure>
          </SwiperSlide>

          <SwiperSlide>
            <figure className="rounded-2xl h-full w-full overflow-hidden">
              <img
                src={banner3}
                alt=""
                className="object-cover object-center h-full w-full"
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="rounded-2xl h-full w-full overflow-hidden">
              <img
                src={banner2}
                alt=""
                className="object-cover object-center h-full w-full"
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="rounded-2xl h-full w-full overflow-hidden">
              <img
                src={banner4}
                alt=""
                className="object-cover object-center h-full w-full"
              />
            </figure>
          </SwiperSlide>
        </Swiper>
      </motion.div>

      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-1 lg:col-span-3 flex items-center justify-center flex-col bg-white rounded-lg px-4 py-3 gap-4"
      >
        <h2 className="text-2xl font-bold text-primary text-shadow">
          Enquire Now
        </h2>
        <form className="flex items-center justify-center flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Contact Number"
            className="border border-[#EEEEEE] caret-primary rounded-lg py-2 px-4 text-sm w-full"
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="border border-[#EEEEEE] caret-primary rounded-lg py-2 px-4 text-sm w-full"
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="border border-[#EEEEEE] caret-primary rounded-lg py-2 px-4 text-sm w-full"
          />
          <input
            type="text"
            placeholder="Product You Want"
            className="border border-[#EEEEEE] caret-primary rounded-lg py-2 px-4 text-sm w-full"
          />
        </form>
        <button className="btn-primary">Send Enquiry</button>
      </motion.div>
    </section>
  );
};

export default Hero;
