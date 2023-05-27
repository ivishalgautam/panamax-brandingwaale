import React from "react";
import { FaPenNib } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllBlogs = ({ blogs }) => {
  return (
    <section className="bg-white px-4 md:px-16 py-10">
      <div className="flex-box-center flex-wrap lg:flex-nowrap gap-8 gap-y-12 py-4 px-2 md:px-8">
        {blogs.map(({ id, title, desc, image, postedOn }) => {
          return (
            <Link key={id} to={`/blog/${id}`}>
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
  );
};

export default AllBlogs;
