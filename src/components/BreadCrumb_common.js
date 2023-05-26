import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { VscChevronRight } from "react-icons/vsc";

function BreadCrumb_common() {
  return (
    <>
      <div className="breadcommon">
        <h2 className="text-[36px] font-bold text-primary relative z-10 text-center w-full">
          About Us
        </h2>
        <ul className="breadLinks text-white relative z-10 gap-1 text-center w-full flex-box-center">
          <li>
            <AiFillHome className="inline-block" /> <Link to="/">Home</Link>
          </li>
          <VscChevronRight className="inline-block" />
          <li>
            <NavLink>About</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BreadCrumb_common;
