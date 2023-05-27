<motion.div
  variants={item}
  className="bg-pink-light h-64 relative pt-6 pb-[5rem] md: pb-[17rem]"
>
  <h2 className="text-[24px] font-bold text-primary relative z-10 capitalize text-center">
    {name}
  </h2>
  <ul className="breadLinks flex-box-center text-xs md:text-sm relative z-10 gap-1">
    <li>
      <AiFillHome className="inline-block" /> <Link to="/">Home</Link>
    </li>
    <VscChevronRight className="inline-block" />
    <li>
      <Link to="/">Product</Link>
    </li>
    <VscChevronRight className="inline-block" />
    <li className="">
      <NavLink>{name}</NavLink>
    </li>
  </ul>
  <img
    src={productBanner}
    alt=""
    className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 z-10 rounded-xl w-[980px]"
  />
</motion.div>;
