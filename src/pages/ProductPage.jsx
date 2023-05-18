import React, { useState } from "react";
import { useParams } from "react-router-dom";
import image from "../assets/hero-image.png";
import { useSelector } from "react-redux";
import { RiSendPlaneFill } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../swiper.css";

const ProductPage = () => {
  const { productId } = useParams();
  const { products } = useSelector((store) => store.products);

  const filteredProduct = products.filter((e) => e.id === +productId);
  console.log(filteredProduct);
  const { title, desc, mainDetail, productSpecs, descList } =
    filteredProduct[0];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="bg-white">
      <div className="bg-white p-8 rounded-lg grid grid-cols-2 gap-6 relative before:absolute before:left-0 before:top-0 before:bg-pink-light before:w-1/5 before:h-full before:hidden before:md:block">
        <Swiper slidesPerView={1}>
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
          <button className="btn-primary capitalize mt-3">
            send enquiry{" "}
            <span className="ml-1">
              <RiSendPlaneFill className="inline" size={20} />
            </span>
          </button>
        </div>
      </div>

      {/* product specs */}
      <div className="bg-white px-12 py-8">
        <div className="bg-pink-light rounded-xl overflow-hidden px-12 py-10">
          <ul className="pt-8 border-t-2 border-dashed border-gray-300">
            {descList.map((list, key) => {
              return (
                <li className="mb-1 list-disc" key={key}>
                  {list}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* product application */}
      <div className="bg-white"></div>
    </div>
  );
};

export default ProductPage;
