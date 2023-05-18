import React from "react";
import { FaPenNib } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {
  return (
    <div className="bg-white mt-14 px-4 md:px-16 py-10">
      <h2 className="font-thin text-3xl text-primary text-center mb-4">
        Our{" "}
        <span className="inline-block italic font-bold text-shadow">Blogs</span>
      </h2>
      <div className="flex-box-center flex-wrap gap-4 gap-y-12 py-4 px-2 md:px-8">
        {blogs.map(({ id, title, desc, image, postedOn }) => {
          return (
            <Link key={id} to={`/blog/${id}`}>
              <div className="rounded-xl shadow-md relative max-w-[300px] h-[320px] border pb-10 md:pb-0">
                <div
                  className="absolute top-0 left-8 bg-white text-primary font-bold shadow-md rounded-b-lg py-1 px-2 text-center"
                  dangerouslySetInnerHTML={{ __html: postedOn }}
                />
                <figure>
                  <img src={image} alt={title} />
                </figure>
                <div className="px-4 py-6">
                  <h2 className="font-bold">{title}</h2>
                  <small className="text-xs text-primary">
                    {" "}
                    <FaPenNib className="inline-block mr-[3px]" /> Vizen
                    Solutions
                  </small>
                  <p className="text-sm">{desc}</p>
                </div>
                <button className="absolute left-1/2 -translate-x-1/2 -bottom-4 btn-primary">
                  Read More
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;