import React, { useState } from "react";
import { Button } from "../Button/Button";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

export const TeamHero = () => {
 
  return (
    <section className="w-full mt-4 lg:mt-6 lg:gap-10 md:pb-20 lg:pb-0 relative">
      <div className=" h-[200px] lg:h-[400px] lg:pt-10 flex flex-col gap-4 items-center ">
        <h1 className="text-2xl lg:text-5xl leading-[24px] md:leading-[40px] lg:leading-[60px] text-[#fff] font-bold text-center">
          Our Management <span className="text-primary">Team</span>
        </h1>
        <p className="text-[10px] md:text-[16px] lg:text-[18px] lg:mt-2 text-[#fff] font-regular  md:w-[50%] lg:w-[70%] text-center">
          Our team is made up of medical doctors, gastroenterologists,
          radiologists, pathologists and laboratory scientists. We take great
          care and pleasure in selecting the finest individuals to work with us,
          both on administrative and technical levels, utilizing
          state-of-the-art certified equipment and reagents. No time or effort
          has been spared in the training process of all our personnel.
        </p>
      </div>

      {/* MENU ITEMS */}
      <div className="absolute top-[30%] transform -translate-y-1/2 -left-12  hidden lg:flex">
        <ul className="uppercase flex flex-col gap-4 text-[14px]">
          <Link to="/">
            <li className="flex items-center gap-10 text-gray-200 cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              Home
            </li>
          </Link>

          <Link
            to="/about-us"
           
          >
             <li className="flex items-center gap-10 text-gray-200 cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              About Us
            </li>
          </Link>

          <Link to="/services">
            <li className="flex items-center gap-10 text-gray-200 cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              Services
            </li>
          </Link>

          <Link to="/our-team">
            <li className="flex items-center gap-10 text-primary cursor-pointer">
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
