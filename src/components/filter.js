// import { useState } from "react";
import Data from "./data";
import { FaGithub } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

function Filter({ project }) {
  return (
    <div>
      <p className="font-bold text-4xl p-5 mt-[100px]" ref={project}>
        Projects
      </p>
      <div className="grid gap-5 p-2   mt-5 md:grid-cols-2 md:p-5 lg:grid-cols-3 lg:p-5 ">
        {Data.map((item) => (
          <div
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className=" relative group  transition-all duration-500 cursor-pointer  "
          >
            <img
              src={item.Image}
              alt="products"
              className="  md:h-[200px]  md:object-cover  shadow-2xl "
            />

            <h1 className="absolute w-full h-full hover:bg-black hover:bg-opacity-40 top-0 left-0 transition-all duration-75">
              <h1 className="text-lg text-center mt-3 font-extrabold text-[#fff] opacity-0 group-hover:opacity-100">
                {item.skills}
              </h1>
              <div className="flex flex-row-reverse items-center justify-center  h-full gap-16">
                <a href={item.git} target="_blank" rel="noreferrer">
                  {" "}
                  <FaGithub className="text-2xl text-[#ffffff] opacity-0 group-hover:opacity-100" />
                </a>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {" "}
                  <FaEye className="text-2xl text-[#ffffff] opacity-0 group-hover:opacity-100" />
                </a>
              </div>{" "}
            </h1>
            <h1 className="absolute -bottom-2/4 left-[35%] text-gray-200 font-semibold text-sm opacity-0 group-hover:opacity-100 group-hover:bottom-2/4 transition-all duration-500">
              {" "}
              {item.Branding}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
