import React from "react";
import image from "../assets/hero-image.png";
import { RiSendPlaneFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../swiper.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products } = useSelector((store) => store.products);
  const filteredProduct = products.filter((e) => e.id === +productId);
  const { title, desc } = filteredProduct[0];
  console.log(productId);
  return (
    <section className="bg-white p-8 rounded-lg grid grid-cols-2 gap-6 relative before:absolute before:left-0 before:top-0 before:bg-pink-light before:w-1/5 before:h-full before:hidden before:md:block">
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
          <span className="font-bold capitalize">standard lenght -</span> 50Mtr
        </p>
        <button className="btn-primary capitalize mt-3">
          send enquiry{" "}
          <span className="ml-1">
            <RiSendPlaneFill className="inline" size={20} />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
