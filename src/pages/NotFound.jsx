import React from "react";
import Notfound from "../assets/not-found.png";

const NotFound = () => {
  return (
    <div className="bg-white h-screen">
      <figure className="w-full">
        <img
          src={Notfound}
          alt=""
          className="max-w-4xl mx-auto object-cover object-center"
        />
      </figure>
    </div>
  );
};

export default NotFound;
