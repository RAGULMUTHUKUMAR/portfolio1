import { CgWebsite } from "react-icons/cg";
import { GoPackageDependents } from "react-icons/go";
import { FaShirt } from "react-icons/fa6";
import { TbBrandBaidu } from "react-icons/tb";
function Services() {
  return (
    <div>
      <h1 className="font-bold text-4xl ml-5 mt-[100px]">Services</h1>
      <div className="mt-[50px]  grid grid-cols-1 gap-7 md:grid-cols-2  p-4">
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-easing="linear"
          className="flex gap-5 p-5"
        >
          <CgWebsite className="w-[100px] h-[100px] text-[#F26649]" />
          <section>
            <h1 className="font-semibold">Web Design</h1>
            <p className="text-gray-500 leading-[25px] text-sm font-light">
              Modern, minimalist web design with clean typography, vibrant
              visuals, and intuitive navigation to enhance user experience.
            </p>
            <h1 className="hover-underline btn font-medium">More info</h1>
          </section>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-easing="linear"
          className="flex gap-5 p-5 "
        >
          <GoPackageDependents className="w-[150px] h-[100px] text-[#F26649]" />
          <section>
            <h1 className="font-semibold">Package Design</h1>
            <p className="text-gray-500 leading-[25px] font-light text-sm">
              Eye-catching packaging design that combines aesthetics and
              functionality, capturing attention on the shelf while ensuring
              product protection and user convenience.
            </p>
            <h1 className="hover-underline btn font-medium">More info</h1>
          </section>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-easing="linear"
          className="flex gap-5 p-5 "
        >
          <FaShirt className="w-[150px] h-[100px] text-[#F26649]" />
          <section>
            <h1 className="font-semibold">T-Shirt Print Design</h1>
            <p className="text-gray-500 leading-[25px] font-light text-sm">
              Energetic and vibrant t-shirt design featuring abstract geometric
              patterns and bold, contrasting colors for a dynamic look. This
              design embodies creativity and individuality.
            </p>
            <h1 className="hover-underline btn font-medium">More info</h1>
          </section>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-easing="linear"
          className="flex gap-5 p-5 "
        >
          <TbBrandBaidu className="w-[100px] h-[100px] text-[#F26649]" />
          <section>
            <h1 className="font-semibold">Branding Design</h1>
            <p className="text-gray-500 leading-[25px] font-light text-sm">
              Strategic branding design that captivates your target audience,
              conveys your unique identity, and fosters brand loyalty.
            </p>
            <h1 className="hover-underline btn font-medium">More info</h1>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Services;
