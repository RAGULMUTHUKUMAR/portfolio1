import React from "react";
import {
  FaXmark,
  FaSquareFacebook,
  FaSquareInstagram,
  FaTwitter,
  FaYoutube,
  FaDownload,
  FaGithub
} from "react-icons/fa6"; // Correct the import path
import profileImg from "../images/115291.jpg";
// import Typed from 'react-typed';
import pdf from "./RAGUL M .pdf";
import { FaLinkedin, } from "react-icons/fa";

const Profile = ({ profile, setProfile }) => {
  function close() {
    setProfile(!profile);
  }

  return (
    <div>
      <div
        className={
          profile
            ? "fixed right-0 w-[95%] md:w-[50%] lg:w-[35%] bg-[#241F21]   transition-all duration-300 top-0 text-white  h-full z-50 "
            : "-right-full "
        }
      >
        {profile ? (
          <div>
            <FaXmark
              onClick={close}
              className="pt-3 pl-3 text-4xl text-gray-400"
            />
            <div className="flex flex-col justify-center items-center gap-5">
              <img
                className="border-8 border-[#4d2d29] rounded-full w-[150px]"
                src={profileImg}
                alt="img"
              />
              <h1 className="text-3xl font-bold">RAGUL M</h1>
              {/* <Typed
          strings={["Web Developer", "Full-Stack Developer","UI/UX Designer"]}
          typeSpeed={50}
          backSpeed={25}
          loop
          className="text-[#F26649] text-2xl font-semibold"
        /> */}
              <p className="text-center text-xs p-2">
                I'm a passionate Full-Stack Developer with a knack for crafting
                seamless digital experiences.
              </p>
              <div className="flex gap-[50px] text-3xl">
          <a href="https://www.linkedin.com/in/ragul9360/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-blue-600"/>
          </a>
          <a href="https://github.com/RAGULMUTHUKUMAR" target="_blank" rel="noreferrer">
            <FaGithub className="text-black"/>
          </a>
        </div>
              <div className="flex gap-10 text-xl mt-52 ">
                <FaSquareFacebook className="text-[#F26649]" />
                <FaSquareInstagram className="hover:text-[#F26649]" />
                <FaTwitter className="hover:text-[#F26649]" />
                <FaYoutube className="hover:text-[#F26649]" />
              </div>
              <button className="bg-[#F26649] w-[200px] p-4 border-[#F26649] rounded-[50px] flex justify-center items-center gap-5">
                RESUME
                <a href={pdf} target="_blank" rel="noreferrer">
            <FaDownload />
          </a>
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Profile;
