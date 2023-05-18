import React from "react";
import { useParams } from "react-router-dom";
import image from "../assets/hero-image.png";

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const filteredProduct = products.filter((e) => e.path === productId);
  console.log(filteredProduct);
  return filteredProduct?.map(({ title }) => {
    return (
      <div className="bg-white p-4 m-4 rounded-lg grid grid-cols-4 gap-6">
        <figure className="col-span-1">
          <img src={image} alt="" className="rounded-2xl flex-1" />
        </figure>
        <div className="col-span-3">
          <h3 className="text-lg font-bold text-primary capitalize">{title}</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde et id
            quas suscipit dolorem assumenda, ut quis fugit laboriosam fugiat non
            ipsum veniam fuga animi! Ex sint, corporis repellendus, saepe sequi
            commodi vitae suscipit ducimus dicta consequuntur possimus debitis
            quam!
          </p>
        </div>
      </div>
    );
  });
};

export default ProductPage;
