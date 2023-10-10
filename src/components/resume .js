/* eslint-disable jsx-a11y/heading-has-content */
import skills from "./skills";
function Resume({ resume }) {
  return (
    <div id="resume" ref={resume}>
      <h1 className="font-bold text-4xl ml-5 mt-[100px]">My skills</h1>
      {/* <h1 className="font-bold text-xl ml-5 mt-[50px]">My skills</h1> */}
      <div>
        {/* <section className=" p-5 w-full  mt-5 md:w-[80%] ">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="0"
            data-aos-easing="linear"
          >
            <div className="flex justify-between ">
              <h1>HTML</h1>
              <h1>90%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[90%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>
          <br />
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="linear"
          >
            <div className="flex justify-between">
              <h1>CSS</h1>
              <h1>90%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[90%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>
          <br />
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-easing="linear"
          >
            <div className="flex justify-between">
              <h1>JAVASCRIPT</h1>
              <h1>70%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[70%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>
          <br />
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-easing="linear"
          >
            <div className="flex justify-between">
              <h1>BOOTSTRAP</h1>
              <h1>80%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[80%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>
          <br />
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-easing="linear"
          >
            <div className="flex justify-between">
              <h1>TAILWIND CSS</h1>
              <h1>90%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[90%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>
          <br />
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-easing="linear"
          >
            <div className="flex justify-between">
              <h1>REACT JS</h1>
              <h1>80%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[80%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>
          <br />
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-easing="linear"
          >
            <div className="flex justify-between">
              <h1>NODE.JS</h1>
              <h1>75%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[75%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>
          <br />
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-easing="linear"
          >
            <div className="flex justify-between">
              <h1>SQL</h1>
              <h1>50%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[50%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>
          <br />
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-easing="linear"
          >
            <div className="flex justify-between">
              <h1>MONGODB</h1>
              <h1>60%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[60%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>
          <br />
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="600"
            data-aos-easing="linear"
          >
            <div className="flex justify-between">
              <h1>UI/UX</h1>
              <h1>80%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[80%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>
        </section> */}
        <div  className="grid grid-cols-2 place-items-center gap-10 mt-10 md:grid-cols-3 md:p-5 ">
          {skills.map((skill)=>(
            <img src={skill.skill} alt="skillimage" key={skill.id} data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-easing="linear" className="w-[100px] h-[100px] shadow-neutral-800 shadow-2xl rounded-md"/>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Resume;
