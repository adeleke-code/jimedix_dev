import { useState } from "react";
// import { Button } from "../Button/Button";
// import Input from "../Input/Input";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const [isAboutUsHovered, setIsAboutUsHovered] = useState(false);

  // Step 3: Event handler for hover effect
  const handleAboutUsHover = () => {
    setIsAboutUsHovered(true);
  };

  const handleAboutUsLeave = () => {
    setIsAboutUsHovered(false);
  };
  return (
    <section className="w-full  lg:gap-10 md:pb-20 lg:pb-0 relative">
      <div className=" h-[200px] lg:h-[400px] lg:pt-10 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-2xl lg:text-5xl leading-[24px] md:leading-[40px] lg:leading-[60px] text-[#fff] font-bold text-center">
          Exceptional Diagnostic <br /> <span className="text-primary">Medicare</span>{" "}
          Deliveries
        </h1>
        {/* <p className="text-[10px] md:text-[16px] lg:text-[18px] lg:mt-2 text-[#fff] font-regular  md:w-[50%] text-center">
          Experience the Ease and Convenience of Receiving Exceptional
          Medications Directly to Your Doorstep
        </p> */}

        {/* <div className="flex gap-2 lg:gap-4 items-center mt-4">
          <Input
            type="text"
            className="w-full py-[9px] px-[20px] rounded-[7px] text-[12px] md:text-[14px] lg:text-[16px] outline-none "
            placeholder="Enter your postcode"
            name="text"
            id="text"
            // value={payload.email}
            // onChange={handlePayload}
          />
          <Button
            className="font-bold hover:bg-[#fff] hover:text-primary transition duration-500"
            text="text-[10px] lg:text-[16px] text-[#fff]"
            rounded="rounded-[6px]"
            bg="bg-primary "
            w="w-[100px] lg:w-[200px]"
            h="h-[30px] lg:h-[42px]"
          >
            SEARCH
          </Button>
        </div> */}
      </div>

      {/* MENU ITEMS */}
      <div className="absolute top-[30%] transform -translate-y-1/2 -left-12  hidden lg:flex">
        <ul className="uppercase flex flex-col gap-4 text-[14px]">
          <Link to="/">
            <li className="flex items-center gap-10 text-primary cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              Home
            </li>
          </Link>

          <Link
            to="/about-us"
            onMouseEnter={handleAboutUsHover}
            onMouseLeave={handleAboutUsLeave}
          >
            <span className="flex items-center gap-10 text-gray-200 cursor-pointer relative">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              <span className="hover:text-primary transition duration-500">
                About Us
              </span>
              {isAboutUsHovered && (
                <div
                  className="absolute top-5 left-20 bg-white p-4 shadow-md w-[200px] gap-3 flex flex-col transition duration-500"
                  onMouseEnter={handleAboutUsHover}
                  onMouseLeave={handleAboutUsLeave}
                >
                  <Link to="/about-us" className="text-gray-800 capitalize">
                    Our Story
                  </Link>
                  <Link to="/services" className="text-gray-800 capitalize">
                    Our Services
                  </Link>
                  <Link to="/our-team" className="text-gray-800 capitalize">
                    Our Management Team
                  </Link>
                </div>
              )}
            </span>
          </Link>

          <Link to="/services">
            <li className="flex items-center gap-10 text-gray-200 cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              Services
            </li>
          </Link>

          <Link to="/our-team">
            <li className="flex items-center gap-10 text-gray-200 cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              Team
            </li>
          </Link>

          <Link to="/contact-us">
            <li className="flex items-center gap-10 text-gray-200 cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </section>
  );
};
