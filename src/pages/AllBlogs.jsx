import React from "react";
import { Helmet } from "react-helmet-async";
import { AiFillHome } from "react-icons/ai";
import { FaPenNib } from "react-icons/fa";
import { VscChevronRight } from "react-icons/vsc";
import { Link, NavLink, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";

const AllBlogs = ({ blogs }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title className="">Blogs</title>
      </Helmet>
      {/* breadcrumb */}
      <div className="breadcommon">
        <h2 className="text-[24px] font-bold text-primary relative z-10 capitalize ">
          Blogs
        </h2>
        <ul className="breadLinks flex-box-start text-white text-xs md:text-sm relative z-10 gap-1">
          <li>
            <AiFillHome className="inline-block" /> <Link to="/">Home</Link>
          </li>
          <VscChevronRight className="inline-block" />
          <li>
            <Link to="/">Blogs</Link>
          </li>
        </ul>
      </div>
      <section className="bg-white px-4 md:px-16 py-10">
        <div className="flex-box-center flex-wrap lg:flex-nowrap gap-8 gap-y-12 py-4 px-2 md:px-8">
          {blogs.map(({ id, title, desc, image, postedOn, path }) => {
            return (
              <Link key={id} to={`/blog/${path}`}>
                <div className="rounded-xl shadow-md  relative md:pb-0">
                  <figure className="">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-[200px] object-cover object-center rounded-xl"
                    />
                  </figure>
                  <div className="px-4 py-6 pb-8">
                    <h2 className="font-bold">
                      {title.substring(0, 60) + "..."}
                    </h2>
                    <small className="text-xs text-primary">
                      {" "}
                      <FaPenNib className="inline-block mr-[3px]" /> Admin
                    </small>
                    <p className="text-sm">{desc.substring(0, 145) + "..."}</p>
                  </div>
                  <button className="absolute left-1/2 -translate-x-1/2 -bottom-5 btn-primary">
                    Read More
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllBlogs;
