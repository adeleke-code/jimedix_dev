import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-[#1a2423]">
      <footer className="px-7 lg:px-32 flex flex-col-reverse lg:flex-row justify-between items-center py-10 lg:py-0 lg:h-24 gap-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-white text-[12px] lg:text-[14px]">
            &copy; All Rights Reserved
          </p>
          <p className="text-white text-[12px] lg:text-[14px] mt-2">
            1, Johnson Sam-Iye, Canal Estate Okota, Lagos
          </p>
          <p className="text-white text-[12px] lg:text-[14px] mt-2">
            4, Alhaji Prince Bello, Fasheun. Bucknor Lagos
          </p>
        </div>
        <div>
          <Link to="/">
            <h3 className="font-bold text-xl lg:text-3xl cursor-pointer text-primary flex items-center -ml-4 lg:ml-8">
              <img src="./jimedix.png" alt="logo" width={50} />
              JIMEDIX
            </h3>
          </Link>
        </div>
        <div className="flex flex-row-reverse lg:flex-row gap-6 items-center justify-center">
          <RiFacebookFill color="white" className="cursor-pointer" />
          <FaTwitter color="white" className="cursor-pointer" />
          <FaInstagram color="white" className="cursor-pointer" />
          <FaTiktok color="white" className="cursor-pointer" />
        </div>
      </footer>
    </div>
  );
};
