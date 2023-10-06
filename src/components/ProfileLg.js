import React from "react";
// import Typed from "react-typed";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaTwitter,
  FaYoutube,
  FaDownload,
  FaGithub
} from "react-icons/fa6"; // Correct the import path
import profileImg from "../images/115291.jpg";
import pdf from "./RAGUL M .pdf";
import { FaLinkedin, } from "react-icons/fa";


const ProfileLg = () => {
  return (
    <div className="fixed top-0 right-0">
      <div className=" p-8 w-[450px] h-[100vh] text-center flex flex-col items-center  gap-5 bg-[#241F21] text-white ">
        <img
          className="border-8 border-[#4d2d29] rounded-full w-[150px]"
          src={profileImg}
          alt="img"
        />
        <h1 className="text-2xl font-bold">RAGUL M</h1>
        {/* <Typed
          strings={["Web Developer", "Full-Stack Developer", "UI/UX Designer"]}
          typeSpeed={50}
          backSpeed={25}
          loop
          className="text-[#F26649] text-2xl font-semibold"
        /> */}
        <p className=" ">
          I'm a passionate Full-Stack Developer with a knack for crafting
          seamless digital experiences.
        </p>
        <div className="flex gap-[50px] text-3xl">
          <a href="https://www.linkedin.com/in/ragul9360/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/RAGULMUTHUKUMAR" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
        <div className="flex gap-[60px] mt-[250px] text-xl">
          <FaSquareFacebook className="text-[#F26649]" />
          <FaSquareInstagram className="hover:text-[#F26649]" />
          <FaTwitter className="hover:text-[#F26649]" />
          <FaYoutube className="hover:text-[#F26649]" />
        </div>
        <button className="bg-[#F26649] w-[200px]  p-4 border-[#F26649] rounded-[50px] flex justify-center items-center gap-5">
          RESUME
          <a href={pdf} target="_blank" rel="noreferrer">
            <FaDownload />
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProfileLg;
