function Project() {
  return (
    <div id="project">
      <p className="font-bold text-4xl p-5 mt-[100px]">Projects</p>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="600"
        data-aos-easing="linear"
        className="w-[50%] shadow-2xl p-5 rounded-xl ml-[20px]"
      >
        <h1 className="text-gray-500 leading-[25px] ml-5 text-sm font-semibold">
          College Project
        </h1>
        <h2 className="font-medium text-sm p-5">TWO-FACTOR AUTHENTICATION</h2>
        <p className="text-gray-500 ml-5 leading-[25px] text-sm font-light">
          E-Voting system using two-factor authentication is an electronic
          voting system that utilizes a two-step authentication process to
          ensure the security and validity of the vote.
        </p>
      </div>
      <br />
      <div
        data-aos="zoom-in-up"
        data-aos-duration="600"
        data-aos-easing="linear"
        className="flex justify-end mr-5"
      >
        <div className="w-[50%] shadow-2xl p-5 rounded-xl">
          <h1 className="text-gray-500 leading-[25px] ml-5 text-sm font-semibold">
            Individual Project
          </h1>
          <h2 className="font-medium text-sm p-5">VPRS Hoops Academy  (Using Figma)</h2>
          <p className="text-gray-500 ml-5 leading-[25px] text-sm font-light">
            Designed the user interface for the VPRS Hoops Academy website, a
            basketball training center catering to youth athletes. The goal was
            to create a modern and engaging online platform that showcases the
            academy's programs, facilities, and success stories, while providing easy access to registration and contact information.
            {/* easy access to registration and contact information.Created
            intuitive navigation and clear information architecture to ensure
            seamless user flow, guiding visitors to relevant sections such as
            program details, coaches' profiles, and registration
            forms.Implemented a visually appealing design language consistent
            with the academy's branding, utilizing bold colors and dynamic
            typography to evoke energy and excitement. */}
          </p>
        </div>
      </div>
      {/* <div
        data-aos="zoom-in-up"
        data-aos-duration="600"
        data-aos-easing="linear"
        className="flex justify-end mr-5"
      >
        <div className="w-[50%] shadow-2xl p-5 rounded-xl">
          <h1 className="text-gray-500 leading-[25px] ml-5 text-sm font-semibold">
            Individual Project
          </h1>
          <h2 className="font-medium text-sm p-5">Garden Project Website</h2>
          <p className="text-gray-500 ml-5 leading-[25px] text-sm font-light">
            Designed and developed a visually appealing and user-friendly
            website for my garden project using Implemented responsive design
            for optimal viewing on various devices, Showcasing garden planning,
            plant information, and progress tracking.
          </p>
        </div>
      </div> */}
      <br />
      <div
        data-aos="zoom-in-up"
        data-aos-duration="600"
        data-aos-easing="linear"
        className="w-[50%] shadow-2xl p-5 rounded-xl ml-[20px]"
      >
        <h1 className="text-gray-500 leading-[25px] ml-5 text-sm font-semibold">
          Individual Project
        </h1>
        <h2 className="font-medium text-sm p-5">BOOMBOX (Using Figma)</h2>
        <p className="text-gray-500 ml-5 leading-[25px] text-sm font-light">
          Designed and developed 'Boombox' using Figma for UI/UX and front-end
          development. The project showcases my skills in creating visually
          appealing digital experiences, emphasizing a seamless fusion of design
          and development expertise.
        </p>
      </div>
    </div>
  );
}

export default Project;
