import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import heroImage from "../assets/hero-image.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <section className="bg-gradient-to-r from-[#001234] to-[#000123] w-full grid grid-cols-9 px-8 py-12 gap-4">
      <div className="col-span-9 md:col-span-3 flex items-start justify-center flex-col">
        <h2 className="text-white font-thin text-3xl capitalize">
          our{" "}
          <span className="inline-block font-bold italic text-shadow">
            product categories
          </span>
        </h2>
        <p className="text-white my-4 text-sm">
          Panamax provides a range of tapes and adhesives that can be
          incorporated in the manufacturing processes of white goods.
        </p>
        <Link to="/products" className="btn-secondary">
          View more
        </Link>
      </div>

      {/* products */}
      <div className="col-span-9 md:col-span-6 flex-box-center gap-4 flex-wrap md:flex-nowrap">
        <Swiper
          slidesPerView={2.5}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            900: { slidesPerView: 2.5 },
          }}
          className="bg-transparent"
        >
          {products.map((product, key) => {
            return (
              <SwiperSlide key={key} className="mr-4">
                <Link to={`product/${product.id}`} className="w-full">
                  <figure className="w-full">
                    <img src={product?.image} alt="" className="rounded-lg" />
                  </figure>
                  {/* <h2 className="border-l-[3px] border-white text-white font-[600] text-lg mt-3 text-start pl-6">
                    {product.title}
                  </h2> */}
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
