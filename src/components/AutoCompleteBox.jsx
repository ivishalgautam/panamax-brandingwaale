import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const AutoCompleteBox = ({ inputVal, setInputVal }) => {
  const navigate = useNavigate();
  const { products } = useSelector((store) => store.products);
  const filteredProducts = products.filter(
    (product) =>
      inputVal !== "" &&
      product.title.toLowerCase().includes(inputVal.toLowerCase())
  );

  const handleInputSuggestion = (e) => {
    setInputVal(e.target.innerText);
    navigate(`/search/${inputVal}`);
    setInputVal("");
  };

  return (
    inputVal !== "" && (
      <ul className="search-suggestion absolute top-full flex flex-col gap-[1px] right-0 mt-1 p-2 bg-pink-light z-20 rounded-md w-72 max-h-72 overflow-y-scroll overflow-x-hidden">
        {inputVal !== "" && filteredProducts.length <= 0 ? (
          <li
            onClick={(e) => handleInputSuggestion(e)}
            className="text-sm px-4 py-2 border-b cursor-pointer capitalize rounded-md"
          >
            Nothing found!
          </li>
        ) : (
          filteredProducts?.map((product, key) => {
            return (
              <Link to={`product/${product.id}`} className="mb-2" key={key}>
                <li
                  key={product.id}
                  onClick={(e) => handleInputSuggestion(e)}
                  className="transition-colors text-sm px-4 py-2 border-b pb-4 cursor-pointer capitalize rounded-md "
                >
                  {product.title.toLowerCase()}
                </li>
              </Link>
            );
          })
        )}
      </ul>
    )
  );
};

export default AutoCompleteBox;
