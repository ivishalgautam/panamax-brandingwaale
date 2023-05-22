import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import heroImage from "../assets/hero-image.png";

const Products = () => {
  return (
    <section className="bg-secondary w-full grid grid-cols-9 px-8 py-12 gap-4">
      <div className="col-span-9 md:col-span-3 flex-box-col-start">
        <h2 className="text-white font-thin text-3xl capitalize">
          our{" "}
          <span className="inline-block font-bold italic text-shadow">
            product categories
          </span>
        </h2>
        <p className="text-white my-4 text-sm">
          Panamax provides a range of tapes and adhesives that can be
          incorporated in the manufacturing processes of white goods.
        </p>
        <button className="btn-secondary">Send Enquiry</button>
      </div>

      {/* products */}
      <div className="col-span-9 md:col-span-6 flex-box-center gap-4 flex-wrap md:flex-nowrap">
        <Swiper
          slidesPerView={2.5}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            900: { slidesPerView: 2.5 },
          }}
          className="bg-transparent"
        >
          {Array.from({ length: 3 }).map((item, key) => {
            return (
              <SwiperSlide key={key} className="mr-4">
                <div className="w-full">
                  <figure className="w-full h-[250px]">
                    <img
                      src={heroImage}
                      alt=""
                      className="h-full w-full object-cover object-right  rounded-lg"
                    />
                  </figure>
                  <h2 className="border-l-2 border-primary  text-white font-[600] text-lg mt-3">
                    PVC Insulated Tape
                  </h2>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
