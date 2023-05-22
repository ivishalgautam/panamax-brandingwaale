{
  /* form */
}
<form
  method="post"
  action="https://magnitecorp.com/panamax-backend/form.php"
  // onSubmit={handleSubmit(onSubmit)}
  className="col-span-2 md:col-span-1"
>
  <div className="flex flex-col justify-center items-center h-full gap-6">
    {/* headings */}
    <div className="text-start w-full">
      <h2 className="text-slate-950 text-3xl font-bold capitalize">
        contact <span className="text-primary text-shadow">panamax</span>
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
          name="number"
          placeholder="Enter your contact no."
          className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full"
          {...register("number", {
            required: true,
            pattern: /^[6-9]\d{9}$/,
          })}
        />
        {errors.number && errors?.number?.type === "required" ? (
          <span className="absolute top-full left-1 text-xs text-red-700">
            This field is required*
          </span>
        ) : errors?.number?.type === "pattern" ? (
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
          name="company"
          placeholder="company"
          className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full"
        />
      </div>
      {/* product */}
      <div className="col-span-2">
        <SelectBox />
      </div>
    </div>

    {/* cta and info */}
    <div className="w-full">
      <button type="submit" className="btn-primary cursor-pointer w-full">
        Send Enquiry
      </button>
    </div>
  </div>
</form>;

<form
  method="post"
  action="https://magnitecorp.com/panamax-backend/form.php"
  className="col-span-2 md:col-span-1"
>
  <div className="flex flex-col justify-center items-center h-full gap-6">
    {/* headings */}
    <div className="text-start w-full">
      <h2 className="text-slate-950 text-3xl font-bold capitalize">
        contact <span className="text-primary text-shadow">panamax</span>
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
          class="form-control"
        />
      </div>
      <div className="relative col-span-2 md:col-span-1">
        <input
          className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full"
          type="email"
          name="email"
          placeholder="Email"
          required
          class="form-control"
        />
      </div>
      <div className="relative col-span-2 md:col-span-1">
        <input
          className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full"
          type="tel"
          name="number"
          placeholder="Phone Number"
          required
          class="form-control"
        />
      </div>
      <div className="relative col-span-2 md:col-span-1">
        <input
          className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full"
          type="text"
          name="company"
          placeholder="Company"
          required
          class="form-control"
        />
      </div>
      <div className="relative col-span-2 md:col-span-1">
        <input
          className="border border-[#EEEEEE] text-sm p-2 rounded-md w-full"
          type="text"
          name="product"
          placeholder="product"
          required
          class="form-control"
        />
      </div>
    </div>

    {/* cta */}
    <div className="w-full">
      <input type="submit" className="btn-primary cursor-pointer w-full">
        Send Enquiry
      </input>
    </div>
  </div>
</form>;

<button
  type="submit"
  name="submit"
  // value="Send Enquiry"
  className="theme-btn1 submit"
>
  send enquiry
</button>;
