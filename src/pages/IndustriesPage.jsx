import React from "react";
import image from "../assets/hero-image.png";
import maskingTape from "../assets/masking-tape.jpeg";
import { RiSendPlaneFill } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../swiper.css";
import { useSelector } from "react-redux";

const IndustriesPage = () => {
  //   const { productId } = useParams();
  const { products } = useSelector((store) => store.products);
  const filteredProduct = products.filter((e) => e.id === 1);
  const { title, desc } = filteredProduct[0];

  return (
    <div className="bg-white">
      <div className="bg-white p-8 rounded-lg grid grid-cols-2 gap-6 relative before:absolute before:left-0 before:top-0 before:bg-pink-light before:w-1/5 before:h-full before:hidden before:md:block">
        <Swiper slidesPerView={1} className="col-span-2 md:col-span-1">
          <SwiperSlide>
            <figure className="col-span-2 md:col-span-1 relative z-10 h-full w-full">
              <img
                src={image}
                alt=""
                className="rounded-2xl flex-1 h-full w-full object-center object-cover"
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="col-span-2 md:col-span-1 relative z-10 h-full w-full">
              <img
                src={image}
                alt=""
                className="rounded-2xl flex-1 h-full w-full object-center object-cover"
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="col-span-2 md:col-span-1 relative z-10 h-full w-full">
              <img
                src={image}
                alt=""
                className="rounded-2xl flex-1 h-full w-full object-center object-cover"
              />
            </figure>
          </SwiperSlide>
        </Swiper>

        <div className="col-span-2 md:col-span-1 py-4">
          <h3 className="text-2xl font-bold text-gray-900 capitalize border-l-[3px] mb-4 border-primary pl-2">
            {title}
          </h3>
          <p>{desc}</p>
          <p className="mt-2">
            <span className="font-bold capitalize">Color :</span> Creamish
          </p>
          <p className="">
            <span className="font-bold capitalize">standard lenght -</span>{" "}
            50Mtr
          </p>
          <button className="btn-primary translate-y-9 capitalize mt-3">
            send enquiry{" "}
            <span className="ml-1">
              <RiSendPlaneFill className="inline" size={20} />
            </span>
          </button>
        </div>
      </div>

      {/* industry product range */}
      <div className="mt-16 py-4">
        <h2 className="text-3xl font-bold text-primary text-shadow capitalize text-center">
          industries product range
        </h2>
        <Swiper
          // slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          <div className="px-4 md:px-10 lg:px-12 my-4 py-10 flex-box-center gap-4 flex-wrap md:flex-nowrap mt-8">
            {Array.from({ length: 10 }).map((_, key) => {
              return (
                <SwiperSlide key={key} className="productSlides">
                  <div className="flex-box-col-between gap-4 bg-white p-4 pb-10 border rounded-xl shadow-md relative z-10">
                    <figure className=" w-[250px] rounded-xl overflow-hidden">
                      <img
                        src={maskingTape}
                        alt=""
                        className="w-full h-full object-cover object-center"
                      />
                    </figure>
                    <h2 className="font-bold text-lg"> Masking Tape </h2>
                    <button className="btn-primary absolute -bottom-4 text-sm left-1/2 -translate-x-1/2">
                      Send Enquiry
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default IndustriesPage;
