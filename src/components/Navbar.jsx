import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";

import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import AutoCompleteBox from "./AutoCompleteBox";

const Navbar = () => {
  const { products } = useSelector((store) => store.products);
  // console.log(products);
  const navList = [
    {
      id: 1,
      name: "home",
      path: "/",
      type: "link",
    },
    {
      id: 2,
      name: "about",
      path: "/about",
      type: "link",
    },
    {
      id: 3,
      name: "products",
      path: "/products",
      type: "dropdown",
      submenu: products,
    },
    // {
    //   id: 4,
    //   name: "solutions",
    //   path: "/solutions",
    //   type: "dropdown",
    //   submenu: [
    //     {
    //       name: "xyz",
    //       path: "solution/solution-1",
    //     },
    //     {
    //       name: "xyz",
    //       path: "solution/solution-2",
    //     },
    //     {
    //       name: "xyz",
    //       path: "solution/solution-3",
    //     },
    //     {
    //       name: "xyz",
    //       path: "solution/solution-4",
    //     },
    //   ],
    // },
    // {
    //   id: 5,
    //   name: "clientele",
    //   path: "/clientele",
    //   type: "link",
    // },
    {
      id: 6,
      name: "contact",
      path: "/contact-us",
      type: "link",
    },
  ];

  const [isNavOpened, setIsNavOpened] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [inputVal, setInputVal] = useState("");
  const navigate = useNavigate();
  const filteredProducts = products.filter(
    (product) => inputVal !== "" && product.title.includes(inputVal)
  );

  // console.log(filteredProducts);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputVal}`);
  };

  const handleClick = (id) => {
    if (activeIndex === id) {
      setActiveIndex(null);
    } else {
      setActiveIndex(id);
    }
  };

  const handleListClick = (e) => {
    const { tagName } = e.target;
    if (tagName === "A") {
      setIsNavOpened(false);
    }
  };

  return (
    <motion.header
      initial={{ top: -100, opacity: 0 }}
      animate={{ top: 0, opacity: 1 }}
      // transition={{ ease }}
      className="flex items-center justify-between bg-white px-2 sm:px-8 md:px-12 lg:px-18 relative shadow-md py-2"
    >
      {/* logo */}
      <figure className="logo w-48">
        <Link to="/">
          <img src={logo} alt="" className="w-full" />
        </Link>
      </figure>

      {/* desktop nav list */}
      <nav className="desktop hidden lg:block tracking-wide">
        <ul className="flex items-center justify-center gap-4 relative z-50 ">
          {navList.map((menu, key) => {
            return menu.type !== "dropdown" ? (
              <Link
                key={key}
                to={menu.path}
                className="text-sm font-bold capitalize"
              >
                {menu.name}
              </Link>
            ) : (
              <Menu key={key} as="div" className="relative z-50">
                <Menu.Button className="flex items-center justify-center capitalize text-sm font-bold">
                  {menu.name}
                  {menu.type === "dropdown" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 mt-2 w-96 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="p-2 grid grid-cols-2 gap-2 ">
                      {menu?.submenu?.map((submenu) => {
                        return (
                          <Menu.Item key={submenu.id}>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-primary text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md  text-sm`}
                              >
                                <Link
                                  to={`product/${submenu.id}`}
                                  className="inline-block h-full w-full text-start capitalize px-2 py-2 text-sm capitalize"
                                >
                                  {submenu.title.toLowerCase()}
                                </Link>
                              </button>
                            )}
                          </Menu.Item>
                        );
                      })}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            );
          })}
        </ul>
      </nav>

      {/* mobile nav */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ right: isNavOpened ? "0%" : "100%", opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.2 }}
        className={`block md:hidden lg:hidden absolute top-full w-full h-screen bg-primary transition-all z-20`}
      >
        <ul className="flex-box-col-start gap-2 w-full h-full">
          {navList.map((menu, key) => {
            return menu.type !== "dropdown" ? (
              <li
                key={key}
                className="w-full text-start border-b border-red-700 py-2 px-4 text-lg font-bold"
                onClick={(e) => handleListClick(e)}
              >
                <Link
                  to={menu.path}
                  className="text-d capitalize inline-block py-2"
                >
                  {menu.name}
                </Link>
              </li>
            ) : (
              <li
                key={key}
                className="relative w-full py-2 px-4 text-start capitalize border-b border-red-700 cursor-pointer"
                onClick={() => handleClick(menu.id)}
              >
                <div className="flex-box-start py-2 text-lg font-bold">
                  {menu.name}
                  <span className="inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>

                <ul
                  className={` ${
                    activeIndex === menu.id ? "block" : "hidden"
                  } transition-all w-full px-4`}
                >
                  {menu.submenu?.map((submenu, key) => {
                    return (
                      <li
                        key={key}
                        className="text-white text-start text-sm mb-2"
                      >
                        <Link
                          to={`product/${submenu.id}`}
                          className="inline-block h-full w-full"
                          onClick={() => setIsNavOpened(false)}
                        >
                          {submenu.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </motion.nav>

      {/* search input */}
      <div className="flex items-center justify-center relative ml-auto lg:ml-0">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search tape type"
            className="bg-pink-light px-4 pr-14 text-xs md:text-md py-2 rounded-md w-full"
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button className=" bg-white text-primary h-[30px] w-8  m-[1px] rounded-md flex items-center justify-center absolute right-0 top-0">
            <BsSearch size={20} />
          </button>
          {/* autocomplete box */}
          <AutoCompleteBox
            filteredProducts={filteredProducts}
            inputVal={inputVal}
            setInputVal={setInputVal}
          />
        </form>
      </div>

      {/* hamburger */}
      <button
        className="block lg:hidden ml-4"
        onClick={() => setIsNavOpened(!isNavOpened)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm7 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </motion.header>
  );
};

export default Navbar;
