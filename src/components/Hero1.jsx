import React from "react";
import { Swiper } from "swiper/react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Swiper className="h-full">
        <SwiperSlide>
          <div className="flex items-center justify-around">
            <div>
              <h2 className="text-5xl font-extrabold">
                Tapes with a <br /> quality
              </h2>
              <p className="my-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
                Esse, possimus.
              </p>
              <button className="bg-primary text-white border border-primary hover:bg-white hover:text-primary transition-all rounded-md px-4 py-2">
                view more
              </button>
            </div>
            <figure>
              <img src="../assets/Tape.jpg" alt="" className="w-64 h-64" />
            </figure>
          </div>
        </SwiperSlide>
        <SplideSlide>
          <div className="flex items-center justify-around">
            <div>
              <h2 className="text-5xl font-extrabold">
                Tapes with a <br /> quality
              </h2>
              <p className="my-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
                Esse, possimus.
              </p>
              <button className="capitalize bg-white border border-primary text-primary hover:bg-primary hover:text-white rounded-md px-8 py-2">
                view more
              </button>
            </div>
            <figure>
              <img src="../assets/Tape.jpg" alt="" className="w-64 h-64" />
            </figure>
          </div>
        </SplideSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
