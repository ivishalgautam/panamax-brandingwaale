import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import SelectBox from "../components/SelectBox";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import { useEffect } from "react";

const ContactUs = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <section className="py-4 h-auto mx-4">
        <Helmet>
          <title>Contact Us</title>
        </Helmet>
        <div className="h-full w-full bg-white rounded-xl overflow-hidden grid md:grid-cols-2 gap-10 gap-y-12 py-8 px-4 md:px-10 lg:px-12 shadow-sm relative after:absolute after:right-0 after:top-0 after:w-1/5 after:h-full after:bg-primary after:hidden after:md:block">
          {/* form */}
          <div className="form w-full col-span-2 md:col-span-1">
            <form
              method="post"
              action="https://panamax.co.in/portal/form.php"
              className="col-span-2 md:col-span-1 w-full"
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
                      className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full focus:border-primary transition-colors"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="relative col-span-2 md:col-span-1">
                    <input
                      className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full focus:border-primary transition-colors"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="relative col-span-2 md:col-span-1">
                    <input
                      className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full focus:border-primary transition-colors"
                      type="tel"
                      name="number"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="relative col-span-2 md:col-span-1">
                    <input
                      className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full focus:border-primary transition-colors"
                      type="text"
                      name="company"
                      placeholder="Company"
                      required
                    />
                  </div>
                  <div className="relative col-span-2 ">
                    <input
                      className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full focus:border-primary transition-colors"
                      type="text"
                      name="product"
                      placeholder="Product"
                      required
                    />
                  </div>
                </div>

                {/* cta */}
                <div className="w-full col-span-2 flex-box-center">
                  <button
                    type="submit"
                    name="submit"
                    // value="Send Enquiry"
                    className="btn-primary cursor-pointer w-full md:w-[80%] lg:w-1/3 mx-auto capitalize"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.4026318216456!2d77.05306507456281!3d28.767247377952103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0763f2494e39%3A0x1f7a1f8962e6b110!2sPANAMAX%20LIMITED!5e0!3m2!1sen!2sin!4v1685341572680!5m2!1sen!2sin"
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
      <Footer />
    </>
  );
};

export default ContactUs;
