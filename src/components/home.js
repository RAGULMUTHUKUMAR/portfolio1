import { FaFigma } from "react-icons/fa";
function Home({ home }) {
  return (
    <div data-aos="zoom-in" id="home" ref={home} data-aos-duration="2000">
      <div className="flex flex-col gap-1 justify-start mt-[150px] items-center  h-[700px] bg-[#F5F3EB]">
        <h1 className="text-4xl font-bold ">Hi I'm RAGUL </h1>
        <p className="text-sm text-center p-5 text-gray-500">
          I'm a UI/UX Developer and web designer creating awesome and
          effective visual identities for companies.
        </p>
        <div className="flex flex-col gap-[50px] items-center justify-center">
        <a href="mailto:ragulluar4@gmail.com">
        <button className="bg-[#F26649] text-white p-4 border-[#F26649] rounded-[10px] mt-8 w-[190px] shadow-[#F26649] shadow-2xl">
          HIRE ME
        </button>
        </a>
        <a href={"https://www.figma.com/proto/kpMpkHi1ePqKZL2XQyHfjE/UI%2FUX-Designer-Portfolio?page-id=0%3A1&type=design&node-id=1-3&viewport=455%2C485%2C0.35&t=bh4UBbw7Ct2IuFFe-1&scaling=scale-down-width&mode=design"} target="_blank" rel="noreferrer">
                <button className="bg-[#fafafa5c] font-[700] w-[200px] p-4 border-[#F26649] border-solid rounded-[10px] flex justify-center items-center gap-5 hover:bg-[#fff0] hover:text-[#f26649]">
                  UI/UX Designer
                  <FaFigma className="font-[700]"/>
                </button>
              </a>
              </div>
      </div>
    </div>
  );
}
export default Home;
