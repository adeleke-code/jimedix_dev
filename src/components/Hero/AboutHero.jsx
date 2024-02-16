import React, { useState } from "react";
import { Button } from "../Button/Button";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

export const AboutHero = () => {
  return (
    <section className="w-full mt-4 lg:mt-6 lg:gap-10 md:pb-20 lg:pb-0 relative">
      <div className=" h-[200px] lg:h-[400px] lg:pt-10 flex flex-col gap-4 items-center ">
        <h1 className="text-2xl lg:text-5xl leading-[24px] md:leading-[40px] lg:leading-[60px] text-[#fff] font-bold text-center">
          Welcome to <span className="text-primary">JIMEDIX</span>
        </h1>
        <p className="text-[10px] md:text-[16px] lg:text-[18px] lg:mt-2 text-[#fff] font-regular  md:w-[50%] text-center">
          JIMEDIX is an integrated medical diagnostic service managed by a
          dedicated team of medical professionals. The idea was developed and
          implemented to up the ante in the diagnostic service industry.
        </p>

        <div className="mt-4">
          <Button
            className="font-bold hover:bg-[#fff] hover:text-primary transition duration-500"
            text="text-[10px] lg:text-[16px] text-[#fff]"
            rounded="rounded-[6px]"
            bg="bg-primary "
            w="w-[100px] lg:w-[200px]"
            h="h-[30px] lg:h-[42px]"
          >
            OUR SERVICES
          </Button>
        </div>
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

          <Link to="/about-us">
            <span className="flex items-center gap-10 text-gray-200 cursor-pointer relative">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              <span className="hover:text-primary text-primary transition duration-500">
                About Us
              </span>
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
