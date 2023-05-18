import React from "react";
import { useParams } from "react-router-dom";

const SearchPage = ({ products }) => {
  const { query } = useParams();
  const filteredProducts = products.filter((item) =>
    item.title.includes(query)
  );
  console.log(filteredProducts);
  return (
    <div className="container mx-auto h-full flex flex-col items-center justify-center">
      {filteredProducts.map(({ id, title, desc }) => {
        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchPage;
