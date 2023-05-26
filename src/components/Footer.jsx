import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsPinMapFill,
} from "react-icons/bs";

import logo from "../assets/panamax-footer-logo.png";
import { useSelector } from "react-redux";

const navList = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  // {
  //   name: "products",
  //   path: "/products",
  // },
  {
    name: "contact",
    path: "/contact",
  },
];
const Footer = () => {
  let navigate = useNavigate();
  const { products } = useSelector((store) => store.products);

  return (
    <footer className="bg-gradient-to-r from-[#001234] to-[#000123] w-full px-4 md:px-12">
      {/* logo and address */}
      <div className="flex-box-center flex-wrap max-w-[1200px] mx-auto bg-white rounded-b-xl py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
          {/* logo */}
          <figure>
            <img src={logo} alt="" className="w-48" />
          </figure>

          {/* address */}
          <div className="flex items-center justify-start md:justify-center gap-2 px-4 border-l-0 lg:border-l lg:border-[#777777]">
            <figure className="w-8">
              <BsFillEnvelopeFill size={50} className="text-primary" />
            </figure>
            <div className="">
              <p className="text-xs text-gray-500">Mail us at:</p>
              <h2 className="font-bold text-sm">info@panamax.co.in</h2>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-center gap-2 px-4 border-l-0 lg:border-l lg:border-[#777777]">
            <figure className="w-8">
              <BsFillTelephoneFill size={50} className="text-primary" />
            </figure>
            <div className="">
              <p className="text-xs text-gray-500">Call us at:</p>
              <h2 className="font-bold text-sm">18009992049</h2>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-center gap-2 px-4 border-l-0 lg:border-l lg:border-[#777777]">
            <figure className="w-8">
              <BsPinMapFill size={50} className="text-primary" />
            </figure>
            <div className="">
              <p className="text-xs text-gray-500">Address:</p>
              <h2 className="font-bold text-sm">
                Panamax House <br /> 594-595/154 Pooth Khurd
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* navigation and form */}
      <div className="grid grid-cols-4 mt-6 mx-auto max-w-[1200px] gap-y-8">
        <div className="col-span-4 lg:col-span-3 text-white flex-box-start flex-col items-start md:flex-row gap-4 md:gap-10">
          <div className="grid grid-cols-12 w-full gap-8 md:gap-0">
            {/* product categories */}
            <div className="col-span-12">
              <h2 className="text-xl mb-4 relative before:absolute before:top-0 before:left-0 before:w-8 before:h-1 before:rounded-full before:bg-primary">
                Product Categories
              </h2>
              {/* categories */}
              <div className="grid grid-cols-1 md:grid-cols-3  items-start gap-4 gap-y-6">
                <ul className="">
                  {products.slice(0, 10).map((item, key) => {
                    return (
                      <li
                        key={key}
                        className="text-sm md:text-md lg:text-[14px] capitalize mb-1 nav-list overflow-x-hidden hover:overflow-x-visible relative"
                      >
                        <span className="inline-block  transition-all absolute -left-10 top-0">
                          <MdKeyboardArrowRight size={20} className="inline" />
                        </span>
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
                <ul className="">
                  {products.slice(10, 20).map((item, key) => {
                    return (
                      <li
                        key={key}
                        className="text-sm md:text-md lg:text-[14px] capitalize mb-1 nav-list overflow-x-hidden hover:overflow-x-visible relative"
                      >
                        <span className="inline-block  transition-all absolute -left-10 top-0">
                          <MdKeyboardArrowRight size={20} className="inline" />
                        </span>
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
                <ul className="">
                  {products.slice(20, 30).map((item, key) => {
                    return (
                      <li
                        key={key}
                        className="text-sm md:text-md lg:text-[14px] capitalize mb-1 nav-list overflow-x-hidden hover:overflow-x-visible relative"
                      >
                        <span className="inline-block  transition-all absolute -left-10 top-0">
                          <MdKeyboardArrowRight size={20} className="inline" />
                        </span>
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="col-span-4 lg:col-span-1 !h-auto mt-8 md:mt-0 flex items-center justify-center flex-col bg-white rounded-lg px-4 py-3 gap-2 md:gap-4">
          <h2 className="text-2xl font-bold text-secondary text-shadow">
            Enquire Now
          </h2>
          <form className="flex items-center justify-center flex-col gap-2 w-full">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="border rounded-lg py-2 px-4 text-sm w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border rounded-lg py-2 px-4 text-sm w-full"
            />
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              required
              className="border rounded-lg py-2 px-4 text-sm w-full"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              required
              className="border rounded-lg py-2 px-4 text-sm w-full"
            />
            <button className="btn-secondary mt-2">Send Enquiry</button>
          </form>
        </div>
      </div>

      {/* social links */}
      <div className="flex-box-between gap-2 flex-col md:flex-row items-center max-w-[1200px] mx-auto border-t border-[#00051c] py-3 mt-8">
        {/* socials */}
        <div className="flex-box-center gap-2">
          <a
            href="https://www.facebook.com/profile.php?id=100064000752424"
            target="_blank"
            className="flex-box-center bg-white hover:bg-secondary text-secondary hover:text-white w-8 h-8 rounded-full transition-colors cursor-pointer"
          >
            <FaFacebookF size={15} className="m-auto" />
          </a>
          <a
            href="https://www.instagram.com/panamax_ltd/"
            target="_blank"
            className="flex-box-center bg-white hover:bg-secondary text-secondary hover:text-white w-8 h-8 rounded-full transition-colors cursor-pointer"
          >
            <FaInstagram size={15} className="m-auto" />
          </a>
          <a
            href="https://www.linkedin.com/company/panamaxltd/"
            target="_blank"
            className="flex-box-center bg-white hover:bg-secondary text-secondary hover:text-white w-8 h-8 rounded-full transition-colors cursor-pointer"
          >
            <FaLinkedinIn size={15} className="m-auto" />
          </a>
        </div>

        <ul className="flex-box-center gap-2">
          {navList.map((item, key) => {
            return (
              <li
                key={key}
                className="capitalize text-sm md:text-md lg:text-[14px] mb-1 text-white"
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>

        {/* copyright */}
        <p className="text-sm text-white">Copyright 2023 All right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
