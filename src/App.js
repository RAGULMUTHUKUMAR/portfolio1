import Home from "./components/home";
import Navbar from "./components/navbar";
import About from "./components/about";
import Services from "./components/services";
import Resume from "./components/resume ";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import Project from "./components/project";
import Education from "./components/education";
import Contact from "./components/contact";
import Map from "./components/map";
import Filter from "./components/filter";
import Menubar from "./Menubar";
// import Profile from "./components/profile";
import ProfileLg from "./components/ProfileLg";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const home = useRef();
  const about = useRef();
  const education = useRef();
  const project = useRef();
  const resume = useRef();
  const contact = useRef();

  return (
    <main>
      <div className="bg-[#F5F3EB] xl:hidden">
        <Navbar />
        <Home />
        <About />
        <Services />
        <Resume />
        <Project />
        <Education />
        <Filter />
        <Contact />
        <Map />
        <Menubar />
      </div>

      <div className="hidden xl:flex  xl:bg-[#F5F3EB] ">
        <div className="xl:w-[20%] ">
          <Menubar
            home={home}
            about={about}
            education={education}
            project={project}
            resume={resume}
            contact={contact}
          />
        </div>
        <div className="xl:w-[50%] p-5 bg-[#F5F3EB]">
          <Navbar />
          <Home home={home} />
          <About about={about} />
          <Services />
          <Resume resume={resume} />
          <Project />
          <Education education={education} />
          <Filter project={project} />
          <Contact contact={contact} />
          <Map />
        </div>
        <div className="l-500 xl:w-[25%]">
          <ProfileLg />
        </div>
      </div>
    </main>
  );
}

export default App;
