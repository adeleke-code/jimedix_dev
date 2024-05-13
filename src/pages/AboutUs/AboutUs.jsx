import { FaRegThumbsUp } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { IoRocketOutline } from "react-icons/io5";
import { PiHandshakeDuotone } from "react-icons/pi";
import { Footer } from "../../components/Footer/Footer";
import { AboutHero } from "../../components/Hero/AboutHero";
import { NavBar } from "../../components/NavBar/NavBar";

export const AboutUs = () => {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${backgroundImageUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: 1,
          height: "100%",
        }}
      >
        <div
          className="px-4 lg:px-10 max-w-[1500px] m-auto relative z-10"
          style={{
            zIndex: 1,
          }}
        >
          <NavBar />
          <AboutHero />
        </div>
      </div>
      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
        }}
        className="flex flex-col lg:flex-row gap-10 px-4 lg:px-24 py-8 lg:py-20 items-center w-full justify-center"
      >
        <p className=" text-[14px] lg:text-xl text-center lg:w-[60%] ">
          At Jimedix Diagnostic and Clinical Laboratory, we advocate for
          preventive healthcare measures; this is core in our values and the
          very reason why our team of medical laboratory scientists and clinical
          practitioners have carefully selected a series of test to help you
          examine your health status. Regular health check-ups if done, can help
          you discover diseases early even before the symptoms start
          manifesting. These check-ups increase your early treatment for better
          cure and guarantee you a lot of savings in terms of cost.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 px-4 lg:px-24 items-center lg:pb-20">
        <div className="lg:w-[50%] lg:h-[350px]  gap-6 bg-primary text-white flex flex-col justify-center items-center py-10 lg:p-10">
          <h3 className="text-center text-xl lg:text-3xl font-bold">
            OUR VISION
          </h3>
          <p className="text-center px-2  lg:text-xl">
            To pioneer accessible and diagnostic innovative healthcare
            solutions, striving towards a healthier and more resilient
            community, our vision is to lead the way in shaping a future where
            everyone has equitable access to quality medical care, fostering a
            world where{" "}
            <b className="font-bold">patients&lsquo; interest comes First!</b>
          </p>
        </div>

        <div className="lg:w-[50%] lg:h-[350px]  gap-6 bg-secondary text-white flex flex-col justify-center items-center py-10 lg:p-10">
          <h3 className="text-center text-xl lg:text-3xl font-bold">
            OUR MISSION
          </h3>
          <p className="text-center px-2  lg:text-xl">
            To deliver exceptional and compassionate healthcare services to
            individuals and communities, ensuring personalized and
            evidence-based care.
            <br />
            <br />
            Committed to advancing medical knowledge, embracing cutting-edge
            technologies, and fostering partnerships that creates a positive
            impact and quality health outcomes.
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1400px",
          // margin: "auto",
        }}
        className="flex flex-col gap-10 lg:px-24 pb-14 lg:pb-20 items-center justify-center mt-10 lg:mt-0"
      >
        <h3 className="text-center text-xl lg:text-3xl font-bold text-[#1a2423]">
          OUR VALUES
        </h3>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="group flex flex-col gap-2 w-[270px] py-16 border items-center hover:bg-primary hover:text-white transition duration-500 rounded-lg">
            <PiHandshakeDuotone
              size={80}
              className="text-[#6cbe00] group-hover:text-white"
            />
            <p className="lg:text-xl font-bold">Precision & Trust</p>
          </div>
          <div className="group flex flex-col gap-2 w-[270px] py-16 border items-center hover:bg-primary hover:text-white transition duration-500 rounded-lg">
            <FaRegThumbsUp
              size={70}
              className="text-[#6cbe00] group-hover:text-white"
            />
            <p className="lg:text-xl font-bold">Quality</p>
          </div>
          <div className="group flex flex-col gap-2 w-[270px] py-16 border items-center hover:bg-primary hover:text-white transition duration-500 rounded-lg">
            <IoRocketOutline
              size={70}
              className="text-[#6cbe00] group-hover:text-white"
            />
            <p className="lg:text-xl font-bold">Innovation</p>
          </div>
          <div className="group flex flex-col gap-2 w-[270px] py-16 border items-center hover:bg-primary hover:text-white transition duration-500 rounded-lg">
            <GrUserWorker
              size={60}
              className="text-[#6cbe00] group-hover:text-white"
            />
            <p className="lg:text-xl font-bold">Customer Service</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
