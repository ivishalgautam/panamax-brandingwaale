import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

export default function Modal({ isOpen, setIsOpen, openModal, closeModal }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl leading-6 font-thin capitalize text-center text-slate-950"
                  >
                    contact{" "}
                    <span className="text-primary text-shadow font-bold italic">
                      panamax
                    </span>
                    <p className="text-sm text-slate-700 my-4">
                      Contact us we will contact with you soon.
                    </p>
                  </Dialog.Title>
                  <div className="mt-2">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="col-span-2 md:col-span-1"
                    >
                      <div className="flex flex-col justify-center items-center h-full gap-6">
                        {/* headings */}

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
                                errors.email
                                  ? "border-red-700"
                                  : "border-[#EEEEEE]"
                              }  text-sm p-2 rounded-md w-full`}
                            />
                            {errors.email &&
                            errors?.email?.type === "required" ? (
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
                            {errors.phone &&
                            errors?.phone?.type === "required" ? (
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
                              name="product"
                              id="message"
                              // cols="30"
                              rows="4"
                              placeholder="Product"
                              className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full h-full"
                            ></textarea>
                          </div>
                        </div>

                        {/* cta and info */}
                        <div className="w-full">
                          <button
                            type="submit"
                            className="btn-primary cursor-pointer w-full"
                            onClick={closeModal}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
