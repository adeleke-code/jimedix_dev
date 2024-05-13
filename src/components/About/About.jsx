import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export const About = () => {
  return (
    <section
      id="about-us"
      className="px-7 lg:px-36 mb-10 max-w-[1400px] mx-auto"
    >
      <h2 className="text-2xl lg:text-3xl text-center mt-8 lg:mt-16 font-bold">
        About <span className="text-primary">Us</span>
      </h2>

      <div className="flex flex-col lg:flex-row mt-10 gap-8 items-center">
        <div
          className="w-full lg:w-[50%] h-[220px] md:h-[350px]"
          style={{
            backgroundImage: `url("https://img.freepik.com/free-vector/flat-hand-drawn-female-team-leader-illustration_52683-55542.jpg?w=740&t=st=1708093003~exp=1708093603~hmac=9f191ac7f835580d7a4007cbe80e82c6c61c6b5bf5246850cd1b1abba3df2ac4")`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            
          }}
        ></div>
        <div className="w-full lg:w-[50%] flex flex-col gap-5 lg:gap-10">
          <p className="text-center lg:text-left text-[14px] lg:text-[16px] text-gray-500">
            Do you know that various chronic diseases people suffer today could
            have been prevented if only such people adopted early health
            check-ups?. <br />
            <br /> Those who prioritize regular check-ups with the aim of early
            detection of any health abnormalities in their body find early
            treatment solutions and management of their sicknesses beneficial.
            Regular medical screenings and health check-ups against sicknesses
            can help you live a long, healthy and happy life.
          </p>

          <Link to="/about-us">
            <div className="flex items-center w-full ">
              <div className="flex items-center justify-center lg:justify-start gap-2 w-full text-primary font-bold text-[14px] lg:text-[16px]">
                READ MORE{" "}
                <FaArrowRightLong size={18} className="flex lg:hidden" />
                <FaArrowRightLong size={20} className="hidden lg:flex" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
