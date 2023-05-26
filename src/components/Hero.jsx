import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
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
  SwiperCore.use([Autoplay]);
  return (
    <section className="grid grid-cols-1 lg:grid-cols-9 my-4 px-4 gap-4">
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-1 lg:col-span-6 flex items-center justify-center"
      >
        <Swiper
          modules={[Pagination]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
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
        className="col-span-1 lg:col-span-3 flex items-center justify-center flex-col bg-white rounded-lg px-4 py-3 gap-4 box-shadow-card"
      >
        <h2 className="text-2xl font-bold text-primary text-shadow">
          Enquire Now
        </h2>
        <form
          method="post"
          action="https://magnitecorp.com/panamax-backend/form.php"
          className="flex items-center justify-center flex-col gap-4 w-full"
        >
          <div class="input-group">
            <input
              required
              type="text"
              name="name"
              autocomplete="off"
              className="input"
            />
            <label class="user-label">Full Name</label>
          </div>
          <div class="input-group">
            <input
              required
              type="tel"
              name="number"
              autocomplete="off"
              className="input"
            />
            <label class="user-label">Phone</label>
          </div>
          <div class="input-group">
            <input
              required
              type="email"
              name="email"
              autocomplete="off"
              className="input"
            />
            <label class="user-label">Email</label>
          </div>
          <div class="input-group">
            <input
              required
              type="text"
              name="company"
              autocomplete="off"
              className="input"
            />
            <label class="user-label">Company</label>
          </div>
          {/* <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="border border-[#EEEEEE] caret-primary rounded-lg py-3 px-4 text-sm w-full focus:border-primary transition-colors"
          /> */}
          {/* <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border border-[#EEEEEE] caret-primary rounded-lg py-3 px-4 text-sm w-full focus:border-primary transition-colors"
          /> */}
          {/* <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            required
            className="border border-[#EEEEEE] caret-primary rounded-lg py-3 px-4 text-sm w-full focus:border-primary transition-colors"
          /> */}

          {/* <input
            type="text"
            name="company"
            placeholder="Company"
            required
            className="border border-[#EEEEEE] caret-primary rounded-lg py-3 px-4 text-sm w-full focus:border-primary transition-colors"
          /> */}
        </form>
        <button className="btn-primary">Send Enquiry</button>
      </motion.div>
    </section>
  );
};

export default Hero;
