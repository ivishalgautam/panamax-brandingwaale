import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // console.log(watch("example"), errors); // watch input value by passing the name of it
  return (
    <div className="p-8 h-auto mx-4 md:mx-12">
      <div className="h-full bg-white rounded-xl overflow-hidden grid md:grid-cols-2 gap-10 gap-y-12 py-8 px-12 relative after:absolute after:right-0 after:top-0 after:w-1/5 after:h-full after:bg-primary after:hidden after:md:block">
        {/* form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
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
              {/* name */}
              <div className="relative col-span-2 md:col-span-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  {...register("name")}
                  className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full"
                />
              </div>
              {/* email */}
              <div className="relative col-span-2 md:col-span-1">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter you email"
                  {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                  className={`border ${
                    errors.email ? "border-red-700" : "border-[#EEEEEE]"
                  }  text-sm p-2 rounded-md w-full`}
                />
                {errors.email && errors?.email?.type === "required" ? (
                  <span className="absolute top-full left-1 text-xs text-red-700">
                    This field is required*
                  </span>
                ) : errors?.email?.type === "pattern" ? (
                  <span className="absolute top-full left-1 text-xs text-red-700">
                    Enter correct email
                  </span>
                ) : (
                  ""
                )}
              </div>
              {/* phone number */}
              <div className="relative col-span-2 md:col-span-1">
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your contact no."
                  className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full"
                  {...register("phone", {
                    required: true,
                    pattern: /^[6-9]\d{9}$/,
                  })}
                />
                {errors.phone && errors?.phone?.type === "required" ? (
                  <span className="absolute top-full left-1 text-xs text-red-700">
                    This field is required*
                  </span>
                ) : errors?.phone?.type === "pattern" ? (
                  <span className="absolute top-full left-1 text-xs text-red-700">
                    Enter correct number
                  </span>
                ) : (
                  ""
                )}
              </div>
              {/* company */}
              <div className="relative col-span-2 md:col-span-1">
                <input
                  type="text"
                  placeholder="company"
                  className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full"
                />
              </div>
              {/* message */}
              <div className="col-span-2">
                <textarea
                  name="message"
                  id="message"
                  // cols="30"
                  rows="4"
                  placeholder="Message..."
                  className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full h-full"
                ></textarea>
              </div>
            </div>

            {/* cta and info */}
            <div className="w-full">
              <input
                type="submit"
                className="btn-primary cursor-pointer w-full"
              />
            </div>
          </div>
        </form>

        {/* maps */}
        <div className="relative z-20 flex-box-center col-span-2 md:col-span-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10483.74731842555!2d77.30566071299634!3d28.463682969310977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1684386457209!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-xl w-full"
            // width="400"
            height="350"
            title="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
