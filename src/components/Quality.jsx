import React, { useState } from "react";
import { RiTimerFill } from "react-icons/ri";

const data = [
  {
    id: 1,
    title: "on-time delivery",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod architecto, inventore illo culpa perspiciatis dicta fugit oditsuscipit accusamus del",
  },
  {
    id: 2,
    title: "40+ years experience",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod architecto, inventore illo culpa perspiciatis dicta fugit oditsuscipit accusamus del",
  },
  {
    id: 3,
    title: "technical advantage",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod architecto, inventore illo culpa perspiciatis dicta fugit oditsuscipit accusamus del",
  },
  {
    id: 4,
    title: "transparency",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod architecto, inventore illo culpa perspiciatis dicta fugit oditsuscipit accusamus del",
  },
  {
    id: 5,
    title: "end-to-end support",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod architecto, inventore illo culpa perspiciatis dicta fugit oditsuscipit accusamus del",
  },
];

const Quality = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = () => {
    document.querySelector(".practices").classList.add("text-white");
  };
  const handleMouseLeave = () => {
    document.querySelector(".practices").classList.remove("text-white");
  };
  return (
    <div className="bg-white w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 px-4 md:px-12 py-12 mt-10">
      <div
        className="hover:bg-primary px-1 py-2 hover:text-white rounded-xl transition-all"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="text-primary capitalize text-3xl font-thin">
          doing{" "}
          <span className="font-bold italic text-shadow capitalize inline-block">
            best practices
          </span>{" "}
          <br />
          for best quality
        </h2>
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod arch
        </p>
      </div>

      {data.map((item) => {
        return (
          <div
            className={`grid grid-cols-6 gap-2  ${
              item.id === 5
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            } px-1 py-2 rounded-xl`}
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
            key={item.id}
          >
            <RiTimerFill size={100} className="justify-self-start" />
            <div className="col-span-5">
              <h2
                className={`${
                  hoveredIndex === item.id ? "text-white" : "text-primary"
                } ${item.id === 5 ? "text-white" : ""} font-bold capitalize`}
              >
                {item.title}
              </h2>
              <p className="mt-3 text-sm">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Quality;
