import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";

const BlogPage = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.filter((e) => e.id === +id);
  const { title, desc, image, postedOn } = blog[0];
  const { name, userImg, profession } = blog[0].approvedBy[0];

  const shareUrl = "https://panamax.magnitecorp.com/";
  return (
    <>
      <section className="grid grid-cols-12 px-4 md:px-12 mt-4 gap-4 mb-4">
        <Helmet>
          <title>{`Blog ${id}`}</title>
        </Helmet>
        {/* blog */}
        <div className="col-span-12 lg:col-span-8 bg-white p-4 rounded-md">
          {/* breadcrumbs */}
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="flex items-center justify-between border-y-2 border-[#EEEEEE] p-4  my-4">
            <figure className="w-[80px] h-[80px] mr-3">
              <img
                src={userImg}
                alt=""
                className="w-full h-full object-center object-cover rounded-full outline outline-1 outline-offset-2 outline-primary"
              />
            </figure>

            {/* user info */}
            <div className="mr-auto font-sm font-bold text-slate-900 capitalize">
              <span>Aprroved by:</span>
              <h2 className="text-md text-primary">{name}</h2>
              <p className="text-xs text-slate-700">{profession}</p>
            </div>

            <div>
              <h2 className="text-sm font-bold">Posted on:</h2>
              <p dangerouslySetInnerHTML={{ __html: postedOn }} />
            </div>
          </div>

          <div>
            <figure>
              <img src={image} alt="" className="rounded-xl" />
            </figure>
            <p className="mt-4 mb-8">{desc}</p>

            <div className="py-8 border-t-2 border-[#EEEEEE]">
              <h2 className="text-lg capitalize mb-3">share it also on -</h2>
              <div className="flex gap-2">
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon size={40} className="rounded-md" />
                </FacebookShareButton>
                <WhatsappShareButton url={shareUrl}>
                  <WhatsappIcon size={40} className="rounded-md" />
                </WhatsappShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <LinkedinIcon size={40} className="rounded-md" />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>

        {/* form and recent blogs */}
        <div className="col-span-12 lg:col-span-4 grid grid-row-2 grid-cols-2 lg:grid-cols-1 gap-y-4 gap-4">
          {/* form */}
          <div className="flex-box-col-center justify-start gap-4 bg-white col-span-2 md:col-span-1 row-span-1 p-4 rounded-md">
            <h2 className="text-2xl font-bold text-primary text-shadow">
              Enquire Now
            </h2>
            <form className="flex items-center justify-center flex-col gap-4 w-full shadow-sm">
              <input
                type="text"
                placeholder="Contact Number"
                className="border border-[#EEEEEE] caret-primary rounded-lg py-2 px-4 text-sm w-full"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="border border-[#EEEEEE] caret-primary rounded-lg py-2 px-4 text-sm w-full"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="border border-[#EEEEEE] caret-primary rounded-lg py-2 px-4 text-sm w-full"
              />
              <input
                type="text"
                placeholder="Product You Want"
                className="border border-[#EEEEEE] caret-primary rounded-lg py-2 px-4 text-sm w-full"
              />
            </form>
            <button className="btn-primary">Send Enquiry</button>
          </div>

          {/* recent blogs */}
          <div className="p-4 row-span-1 bg-white rounded-md col-span-2 md:col-span-1">
            <h2 className="text-2xl text-center font-bold text-primary mb-3 capitalize">
              recent articles
            </h2>
            <div className="flex-box-col-center gap-3">
              {blogs.map((e) => {
                return (
                  <div
                    className="flex-box-start gap-3 border rounded-md w-full px-3 py-1"
                    key={e.id}
                  >
                    <img
                      src={e.image}
                      alt=""
                      className="w-[50px] h-[50px] object-cover object-right rounded-2xl"
                    />
                    <div className="text-sm">
                      <h2 className="text-ellipsis overflow-hidden">
                        {e.title}
                      </h2>
                      <p>{e.createOn}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
