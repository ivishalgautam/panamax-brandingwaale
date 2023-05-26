import React, { useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import image from "../assets/hero-image.png";
import { useDispatch, useSelector } from "react-redux";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { VscChevronRight } from "react-icons/vsc";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import tapeVideo from "../assets/videos/tape.mp4";
import Modal from "../components/Modal";
import { openModal } from "../store/features/modalSlice";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import "../swiper.css";
import Footer from "../components/Footer";
import { useEffect } from "react";

const ProductPage = () => {
  let slice = 5;
  const [showMore, setShowMore] = useState(false);
  const [showFeatures, setShowFeatures] = useState(slice);
  const [showApplications, setShowApplications] = useState(slice);

  const { productId } = useParams();
  const { products } = useSelector((store) => store.products);

  const filteredProduct = products.filter((e) => e.id === +productId);
  const {
    title,
    name,
    about,
    features,
    description,
    applications,
    industrialUses,
    productImg,
  } = filteredProduct[0];
  let dispatch = useDispatch();

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: "100", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const { pathname } = useLocation();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="bg-white overflow-hidden"
      >
        <Helmet>
          <title className="">
            {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
          </title>
        </Helmet>

        {/* breadcrumb */}
        <motion.div variants={item} className="breadcommon">
          <h2 className="text-[24px] font-bold text-primary relative z-10 capitalize ">
            {name}
          </h2>
          <ul className="breadLinks flex-box-start text-white text-xs md:text-sm relative z-10 gap-1">
            <li>
              <AiFillHome className="inline-block" /> <Link to="/">Home</Link>
            </li>
            <VscChevronRight className="inline-block" />
            <li>
              <Link to="/">Product</Link>
            </li>
            <VscChevronRight className="inline-block" />
            <li className="">
              <NavLink>{name}</NavLink>
            </li>
          </ul>
        </motion.div>

        {/* banner */}
        <motion.div
          variants={item}
          className="bg-white p-8 px-4 md:px-10 lg:px-12 rounded-lg grid grid-cols-12 gap-6 relative before:absolute before:left-0 before:top-0 before:bg-pink-light before:w-1/5 before:h-full before:hidden before:md:block"
        >
          <Swiper slidesPerView={1} className="col-span-12 md:col-span-5">
            <SwiperSlide>
              <figure className="col-span-2 md:col-span-1 relative z-10 h-full w-full">
                <img
                  src={productImg}
                  alt=""
                  className="rounded-2xl object-contain !h-auto"
                />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="col-span-2 md:col-span-1 relative z-10 h-full w-full">
                <img
                  src={productImg}
                  alt=""
                  className="rounded-2xl object-contain !h-auto"
                />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className="col-span-2 md:col-span-1 relative z-10 h-full w-full">
                <img
                  src={productImg}
                  alt=""
                  className="rounded-2xl object-contain !h-auto"
                />
              </figure>
            </SwiperSlide>
          </Swiper>

          <div className="col-span-12 md:col-span-7 py-4 flex-box-col-start items-start">
            <h3 className="text-2xl font-bold text-gray-900 capitalize border-l-[3px] mb-4 border-primary pl-2">
              {title}
            </h3>
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html: showMore ? about : about.substring(0, 700),
                }}
                className="inline"
              />
              {about.length > 700 && (
                <button
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                  className="text-primary text-sm font-bold ml-2"
                >
                  {showMore ? " show less" : " show more..."}
                </button>
              )}
            </div>
            {/* <p className="mt-2">
            <span className="font-bold capitalize">Color :</span> Creamish
          </p>
          <p className="">
            <span className="font-bold capitalize">standard lenght -</span>{" "}
            50Mtr
          </p> */}
            <button
              className="btn-primary capitalize mt-3 py-1"
              onClick={() => {
                dispatch(openModal());
              }}
            >
              send enquiry{" "}
              <span className="">
                <RiSendPlaneFill className="inline" size={15} />
              </span>
            </button>
          </div>
        </motion.div>

        <Modal productTitle={filteredProduct[0].title} />

        {/* product specs */}
        <motion.div
          variants={item}
          className="bg-white px-4 md:px-4 lg:px-12 py-8"
        >
          {/* description */}
          <div className="bg-pink-light rounded-xl overflow-hidden px-12 py-10">
            <ul className="pt-10 border-t-2 border-dashed border-gray-300 relative">
              <div className="text-white bg-primary rounded-full px-4 py-1 absolute -top-4 left-1/2 -translate-x-1/2 after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:w-5 after:h-5 after:bg-primary z-10 after:-z-[1]">
                Description
              </div>
              {description?.map((item, key) => {
                return (
                  <li className="mb-1 list-disc" key={key}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* features */}
          <div className="mt-10">
            <h2 className="text-3xl text-primary font-thin capitalize text-center my-6">
              product{" "}
              <span className="font-bold italic text-shadow">features</span>
            </h2>
            <table className="table-auto border-separate border-spacing-y-4 px-4">
              <tbody>
                {features?.slice(0, showFeatures).map((feature, key) => {
                  return (
                    <tr className="even:bg-gray-100" key={key}>
                      <th className="align-top text-start p-2 rounded-l">
                        {feature.name}
                      </th>
                      <td className="p-2 rounded-r text-sm">{feature.about}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button
              className="text-primary mx-auto w-full font-bold flex-box-col-center"
              onClick={() =>
                setShowFeatures((prev) =>
                  features.length > prev
                    ? prev + features.length - slice
                    : prev - (features.length - slice)
                )
              }
            >
              {features.length <= showFeatures ? (
                <>
                  <BsChevronUp /> show less
                </>
              ) : (
                <>
                  show more <BsChevronDown />
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* product application */}
        <motion.div
          variants={item}
          className="bg-white my-10 relative overflow-hidden pt-14 pb-4 after:absolute after:-top-[1.25rem] after:right-0 after:h-[300%] after:w-1/3 after:bg-pink-light after:rotate-[50deg]"
        >
          <h2 className="text-3xl font-thin text-primary capitalize text-center">
            product{" "}
            <span className="font-bold italic text-shadow"> application</span>
          </h2>

          <div className="grid grid-cols-12 px-4 md:px-10 lg:px-20 py-10 relative z-10 ">
            <div className="col-span-12 md:col-span-12">
              <ul className="pt-8 px-4">
                {applications?.slice(0, showApplications).map((item, key) => {
                  return (
                    <li className="mb-2 list-disc" key={key}>
                      {item.about}
                    </li>
                  );
                })}
                <button
                  className="text-primary font-bold w-full flex-box-col-center"
                  onClick={() =>
                    setShowApplications((prev) =>
                      applications.length > prev
                        ? prev + applications.length - slice
                        : prev - (applications.length - slice)
                    )
                  }
                >
                  {applications.length <= showApplications ? (
                    <>
                      <BsChevronUp /> show less
                    </>
                  ) : (
                    <>
                      show more <BsChevronDown />
                    </>
                  )}
                </button>
              </ul>
            </div>
            {/* below section hidden might show later */}
            <div className="hidden col-span-12 md:col-span-4 rounded-xl overflow-hidden flex-box-center">
              <img src={image} alt="" className="w-full !h-auto" />
            </div>
          </div>
        </motion.div>
        {/* icons */}
        <div className="flex-box-center mt-4 gap-6 flex-wrap relative z-10 px-4 md:px-10 lg:px-20 gap-y-20 hidden">
          {applications.map((item, key) => {
            return (
              <div
                key={key}
                className="rounded-2xl bg-white flex-box-col-between gap-y-1 w-[180px] h-[120px]"
              >
                <figure className="p-4 rounded-lg box-shadow-card">
                  <img src={item.icon} alt="" className="w-[50px]" />
                </figure>
                <h2 className="pt-2 text-center text-sm">{item.name}</h2>
              </div>
            );
          })}
        </div>

        {/* video section */}
        <motion.div variants={item} className="hidden my-20 px-4">
          <video
            src={tapeVideo}
            controls={true}
            className="aspect-video bg-gray-500 mx-auto w-[1048px] rounded-2xl mt-10 shadow-2xl"
          ></video>
        </motion.div>

        {/* industries */}
        <motion.div variants={item} className="my-20 px-4 md:px-10 lg:px-12">
          <h2 className="font-thin text-3xl text-primary capitalize text-center">
            used by{" "}
            <span className="font-bold italic text-shadow"> industries</span>
          </h2>
          <div className="mt-10 flex-box-center flex-wrap gap-4">
            {industrialUses?.map((item, key) => {
              return (
                <div
                  key={key}
                  className="rounded-xl px-4 py-2 w-[200px] h-[150px] flex flex-col items-center justify-around box-shadow-card"
                >
                  <img src={item.icon} alt="" className="w-[50px]" />
                  <span className="capitalize text-center text-sm">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
};

export default ProductPage;
