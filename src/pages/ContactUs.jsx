import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SelectBox from "../components/SelectBox";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   let resp = await fetch("https://magnitecorp.com/panamax-backend/form.php", {
  //     method: "POST",
  //   });
  //   let result = await resp.json();
  //   console.log(result);
  // };

  // console.log(watch("example"), errors); // watch input value by passing the name of it
  return (
    <section className="p-8 pb-12 h-auto mx-4 lg:mx-12">
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div className="h-full bg-white rounded-xl overflow-hidden grid md:grid-cols-2 gap-10 gap-y-12 py-8 px-12 relative after:absolute after:right-0 after:top-0 after:w-1/5 after:h-full after:bg-primary after:hidden after:md:block">
        {/* form */}
        <div className="form">
          <form
            method="post"
            action="https://magnitecorp.com/panamax-backend/form.php"
            className="col-span-2 md:col-span-1"
          >
            <div className="flex flex-col justify-center items-center h-full gap-6">
              {/* headings */}
              <div className="text-start w-full">
                <h2 className="text-slate-950 text-3xl font-bold capitalize">
                  contact{" "}
                  <span className="text-primary text-shadow">panamax</span>
                </h2>
                <p className="text-sm text-slate-700">
                  Contact us we will contact with you soon.
                </p>
              </div>
              {/* inputs */}
              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="relative col-span-2 md:col-span-1">
                  <input
                    className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="relative col-span-2 md:col-span-1">
                  <input
                    className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="relative col-span-2 md:col-span-1">
                  <input
                    className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full"
                    type="tel"
                    name="number"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="relative col-span-2 md:col-span-1">
                  <input
                    className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full"
                    type="text"
                    name="company"
                    placeholder="Company"
                    required
                  />
                </div>
                <div className="relative col-span-2 md:col-span-1">
                  <input
                    className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full"
                    type="text"
                    name="product"
                    placeholder="product"
                    required
                  />
                </div>
              </div>

              {/* cta */}
              <div className="w-full col-span-2">
                <button
                  type="submit"
                  name="submit"
                  // value="Send Enquiry"
                  className="btn-primary cursor-pointer w-full"
                >
                  send enquiry
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* maps */}
        <div className="relative z-10 flex-box-center col-span-2 md:col-span-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10483.74731842555!2d77.30566071299634!3d28.463682969310977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1684386457209!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl w-full"
            // width="400"
            height="350"
            title="map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
