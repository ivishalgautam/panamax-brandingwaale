import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AutoCompleteBox = ({ filteredProducts, inputVal, setInputVal }) => {
  const navigate = useNavigate();

  const handleInputSuggestion = (e) => {
    setInputVal(e.target.innerText);
    navigate(`/search/${inputVal}`);
    setInputVal("");
  };

  return (
    <ul className="search-suggestion absolute top-full left-0 mt-1 z-10 rounded-md w-full">
      {inputVal !== "" && filteredProducts.length <= 0 ? (
        <li
          onClick={(e) => handleInputSuggestion(e)}
          className="bg-primary text-white text-sm px-4 py-2 border-b cursor-pointer capitalize rounded-md"
        >
          Nothing found!
        </li>
      ) : (
        filteredProducts?.map((product) => {
          return (
            <Link to={`product/${product.id}`}>
              <li
                key={product.id}
                onClick={(e) => handleInputSuggestion(e)}
                className="bg-primary text-white text-sm px-4 py-2 border-b cursor-pointer capitalize rounded-md"
              >
                {product.title}
              </li>
            </Link>
          );
        })
      )}
    </ul>
  );
};

export default AutoCompleteBox;
