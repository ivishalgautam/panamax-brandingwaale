import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import logo from "../assets/logo.png";
import building from "../assets/building.png";

const navList = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "products",
    path: "/products",
  },
  {
    name: "solutions",
    path: "/solutions",
  },
  {
    name: "clientele",
    path: "/clientele",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "privacy policy",
    path: "/privacy-policy",
  },
];
const Footer = () => {
  return (
    <footer className="bg-secondary w-full px-4 md:px-12">
      {/* logo and address */}
      <div className="flex-box-center flex-wrap max-w-[1200px] mx-auto bg-white rounded-b-xl">
        {/* logo */}
        <figure className="w-52">
          <img src={logo} alt="" />
        </figure>

        {/* address */}
        <div className="flex-box-center flex-wrap gap-y-4 pb-4">
          <div className="flex items-center justify-center gap-2 px-4 border-l border-[#777777]">
            <figure className="w-8">
              <img src={building} alt="" />
            </figure>
            <div className="">
              <p className="text-xs text-gray-500">Meet us at</p>
              <h2 className="font-bold text-sm">
                G -23, Bawana, Delhi - 110039
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 px-4 border-l border-[#777777]">
            <figure className="w-8">
              <img src={building} alt="" />
            </figure>
            <div className="">
              <p className="text-xs text-gray-500">Meet us at</p>
              <h2 className="font-bold text-sm">
                G -23, Bawana, Delhi - 110039
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 px-4 border-l border-[#777777]">
            <figure className="w-8">
              <img src={building} alt="" />
            </figure>
            <div className="">
              <p className="text-xs text-gray-500">Meet us at</p>
              <h2 className="font-bold text-sm">
                G -23, Bawana, Delhi - 110039
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* navigation and form */}
      <div className="grid grid-cols-4 mt-6 max-w-[1200px] mx-auto gap-y-8">
        <div className="col-span-4 lg:col-span-3 text-white flex-box-start flex-col items-center md:flex-row gap-4 md:gap-10">
          <div className="grid grid-cols-4 w-full gap-8 md:gap-0">
            {/* quick link */}
            <div className="col-span-4 md:col-span-1">
              <h2 className="text-xl mb-4 relative before:absolute before:top-0 before:left-0 before:w-8 before:h-1 before:rounded-full before:bg-primary">
                Quick Links
              </h2>
              <ul>
                {navList.map((item, key) => {
                  return (
                    <li
                      key={key}
                      className="capitalize text-sm md:text-md lg:text-[14px]"
                    >
                      <Link to={item.path}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* product categories */}
            <div className="col-span-4 md:col-span-3">
              <h2 className="text-xl mb-4 relative before:absolute before:top-0 before:left-0 before:w-8 before:h-1 before:rounded-full before:bg-primary">
                Product Categories
              </h2>
              {/* categories */}
              <div className="flex-box-start gap-4 flex-wrap md:flex-nowrap">
                <ul>
                  {navList.map((item, key) => {
                    return (
                      <li
                        key={key}
                        className="capitalize text-sm md:text-md lg:text-[14px]"
                      >
                        <Link to={item.path}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>

                <ul>
                  {navList.map((item, key) => {
                    return (
                      <li
                        key={key}
                        className="capitalize text-sm md:text-md lg:text-[14px]"
                      >
                        <Link to={item.path}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>

                <ul>
                  {navList.map((item, key) => {
                    return (
                      <li
                        key={key}
                        className="capitalize text-sm md:text-md lg:text-[14px]"
                      >
                        <Link to={item.path}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>

                <ul>
                  {navList.map((item, key) => {
                    return (
                      <li
                        key={key}
                        className="capitalize text-sm md:text-md lg:text-[14px]"
                      >
                        <Link to={item.path}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 lg:col-span-1 mt-8 md:mt-0 flex items-center justify-center flex-col bg-white rounded-lg px-4 py-3 gap-4 md:gap-10">
          <h2 className="text-2xl font-bold text-secondary text-shadow">
            Enquire Now
          </h2>
          <form className="flex items-center justify-center flex-col gap-2 w-full shadow-sm">
            <input
              type="text"
              placeholder="Contact Number"
              className="border rounded-lg py-2 px-4 text-sm w-full"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="border rounded-lg py-2 px-4 text-sm w-full"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="border rounded-lg py-2 px-4 text-sm w-full"
            />
          </form>
          <button className="btn-secondary">Send Enquiry</button>
        </div>
      </div>

      {/* social links */}
      <div className="flex-box-center gap-2 md:flex-box-between flex-wrap max-w-[1200px] mx-auto border-t border-[#1C4BAA] py-2 mt-8">
        {/* socials */}
        <div className="flex-box-center gap-2">
          <span className="flex-box-center bg-white w-8 h-8 rounded-full">
            <FaFacebookF size={15} className="m-auto text-secondary" />
          </span>
          <span className="flex-box-center bg-white w-8 h-8 rounded-full">
            <FaInstagram size={15} className="m-auto text-secondary" />
          </span>
          <span className="flex-box-center bg-white w-8 h-8 rounded-full">
            <FaLinkedinIn size={15} className="m-auto text-secondary" />
          </span>
        </div>

        {/* copyright */}
        <p className="text-sm text-white">Copyright 2023 All right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
