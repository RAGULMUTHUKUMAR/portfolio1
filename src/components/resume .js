/* eslint-disable jsx-a11y/heading-has-content */
function Resume({resume}) {
  return (
    <div id="reaume" ref={resume}>
      <h1 className="font-bold text-4xl ml-5 mt-[100px]">Resume</h1>
      <h1 className="font-bold text-xl ml-5 mt-[50px]">My skills</h1>
      <div>
        <section className=" p-5 w-full  mt-5 md:w-[80%] ">
          <div>
            <div className="flex justify-between ">
              <h1>HTML</h1>
              <h1>90%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[90%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>

          <br />
          <div>
            <div className="flex justify-between">
              <h1>CSS</h1>
              <h1>90%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[90%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>
          <br />
          <div>
            <div className="flex justify-between">
              <h1>JAVASCRIPT</h1>
              <h1>70%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[70%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>
          <br />
          <div>
            <div className="flex justify-between">
              <h1>REACT JS</h1>
              <h1>65%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[65%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>
          <br />
          <div>
            <div className="flex justify-between">
              <h1>SQL</h1>
              <h1>50%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[50%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>
          <br />
          <div>
            <div className="flex justify-between">
              <h1>MONGODB</h1>
              <h1>60%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[60%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>
          <br />
          <div>
            <div className="flex justify-between">
              <h1>UI/UX</h1>
              <h1>80%</h1>
            </div>
            <div className="w-[100%] flex bg-gray-300 rounded-lg">
              <h2 className="w-[80%] h-[7px] md:h-1 bg-[#F26649] rounded-lg "></h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
