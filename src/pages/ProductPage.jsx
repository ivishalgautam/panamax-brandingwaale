import React, { useState } from "react";
import { useParams } from "react-router-dom";
import image from "../assets/hero-image.png";
import { useSelector } from "react-redux";
import { RiSendPlaneFill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { TbFridge } from "react-icons/tb";
import ProductDetails from "../components/ProductDetails";
import { Swiper, SwiperSlide } from "swiper/react";
import tapeVideo from "../assets/videos/tape.mp4";
import Modal from "../components/Modal";

const ProductPage = () => {
  const { productId } = useParams();
  const { products } = useSelector((store) => store.products);

  const filteredProduct = products.filter((e) => e.id === +productId);
  console.log(filteredProduct);
  const { title, desc, descList } = filteredProduct[0];

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="bg-white overflow-hidden">
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
          <button className="btn-primary capitalize mt-3" onClick={openModal}>
            send enquiry{" "}
            <span className="ml-1">
              <RiSendPlaneFill className="inline" size={20} />
            </span>
          </button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
        setIsOpen={setIsOpen}
      />

      {/* product specs */}
      <div className="bg-white px-4 md:px-4 lg:px-12 py-8">
        <div className="bg-pink-light rounded-xl overflow-hidden px-12 py-10">
          <ul className="pt-10 border-t-2 border-dashed border-gray-300 relative">
            <div className="text-white bg-primary rounded-full px-4 py-1 absolute -top-4 left-1/2 -translate-x-1/2 after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:w-5 after:h-5 after:bg-primary z-10 after:-z-[1]">
              Despcription
            </div>
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
      <div className="bg-white my-10 relative overflow-hidden pt-14 pb-4 after:absolute after:-top-1 after:right-0 after:h-[300%] after:w-1/3 after:bg-pink-light after:rotate-[45deg]">
        <h2 className="text-3xl font-thin text-primary capitalize text-center">
          product{" "}
          <span className="font-bold italic text-shadow"> application</span>
        </h2>

        <div className="grid grid-cols-12 px-4 md:px-10 lg:px-20 py-10 gap-10 relative z-10">
          <div className="col-span-12 md:col-span-8">
            <ul className="pt-8 border-gray-300 pl-4">
              {descList.map((list, key) => {
                return (
                  <li className="mb-1 list-disc" key={key}>
                    {list}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-4 rounded-xl overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover object-right"
            />
          </div>
        </div>
      </div>

      {/* video section */}
      <div className="my-20 px-4">
        <div className="flex-box-center gap-6 flex-wrap md:flex-nowrap">
          {Array.from({ length: 5 }).map((_, key) => {
            return (
              <div className="rounded-2xl bg-white flex-box-col-center gap-y-2 border shadow-md p-4 w-[180px]">
                <FiSettings size={30} className="text-primary mb-2" />
                <h2 className="border-t-2 border-dashed border-gray-300 pt-2">
                  Automotive
                </h2>
              </div>
            );
          })}
        </div>
        <video
          src={tapeVideo}
          controls={true}
          className="aspect-video bg-gray-500 mx-auto w-[1048px] rounded-2xl mt-10"
        ></video>
      </div>

      {/* industries */}
      <div className="my-20">
        <h2 className="font-thin text-3xl text-primary capitalize text-center">
          using{" "}
          <span className="font-bold italic text-shadow"> industries</span>
        </h2>
        <div className="mt-10 flex-box-center flex-wrap md:flex-nowrap gap-4">
          <div className="border border-[#EEEEEE] rounded-xl px-4 py-2">
            <TbFridge
              size={40}
              className="-translate-y-7 mx-auto bg-white text-primary"
            />
            <span className="capitalize text-lg">automotive</span>
          </div>
          <div className="border border-[#EEEEEE] rounded-xl px-4 py-2">
            <TbFridge
              size={40}
              className="-translate-y-7 mx-auto bg-white text-primary"
            />
            <span className="capitalize text-lg">automotive</span>
          </div>
          <div className="border border-[#EEEEEE] rounded-xl px-4 py-2">
            <TbFridge
              size={40}
              className="-translate-y-7 mx-auto bg-white text-primary"
            />
            <span className="capitalize text-lg">automotive</span>
          </div>
          <div className="border border-[#EEEEEE] rounded-xl px-4 py-2">
            <TbFridge
              size={40}
              className="-translate-y-7 mx-auto bg-white text-primary"
            />
            <span className="capitalize text-lg">automotive</span>
          </div>
          <div className="border border-[#EEEEEE] rounded-xl px-4 py-2">
            <TbFridge
              size={40}
              className="-translate-y-7 mx-auto bg-white text-primary"
            />
            <span className="capitalize text-lg">automotive</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
