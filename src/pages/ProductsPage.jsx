import React from "react";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);
  return (
    <section className="container mx-auto">
      {products.map((product, key) => {
        return (
          <div className="card" key={key}>
            <h2>{product.title}</h2>
          </div>
        );
      })}
    </section>
  );
};

export default ProductsPage;
