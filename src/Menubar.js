import React from "react";
import { AiFillHome } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { IoSchool } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-scroll";

const Menubar = ({ home, about, education, project, resume, contact }) => {
  function handleScroll(ref) {
    window.scrollTo({
      top: ref.current.offsetTop - 40,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="fixed bottom-0 left-0  w-full h-[60px] xl:w-[120px] xl:h-[50% ] z-40 text-gray-500 text-2xl xl:fixed xl:top-[6%]  xl:left-[70px] xl:bg-[#F5F3EB]">
        <ul className="flex justify-around items-center p-5 gap-5 xl:flex-col xl:gap-12 xl:p-6 bg-white xl:rounded-full">
          <Link
            to="home"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
          >
            <AiFillHome
              className="hover:text-[#F26649]"
              onClick={() => handleScroll(home)}
            />
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
          >
            <RiContactsFill
              className="hover:text-[#F26649]"
              onClick={() => handleScroll(about)}
            />
          </Link>

          <Link
            to="education"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
          >
            <IoSchool
              className="hover:text-[#F26649]"
              onClick={() => handleScroll(education)}
            />
          </Link>

          <Link
            to="project"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
          >
            <MdBusinessCenter
              className="hover:text-[#F26649]"
              onClick={() => handleScroll(project)}
            />
          </Link>

          <Link
            to="resume"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
          >
            <FaLightbulb
              className="hover:text-[#F26649]"
              onClick={() => handleScroll(resume)}
            />
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
          >
            <FaPhone
              className="hover:text-[#F26649]"
              onClick={() => handleScroll(contact)}
            />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Menubar;
