import React from "react";
import { HeroSection } from "../../components/Hero/Hero";
import { NavBar } from "../../components/NavBar/NavBar";
import { AboutHero } from "../../components/Hero/AboutHero";
import { Footer } from "../../components/Footer/Footer";
import { PiHandshakeDuotone } from "react-icons/pi";
import { FaRegThumbsUp } from "react-icons/fa6";
import { IoRocketOutline } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";
import { ServicesHero } from "../../components/Hero/ServicesHero";
import { Button } from "../../components/Button/Button";
import { TeamHero } from "../../components/Hero/TeamHero";
import { IoMdMail } from "react-icons/io";

export const Team = () => {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/11288665/pexels-photo-11288665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url("${backgroundImageUrl}")`,
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
          <TeamHero />
        </div>
      </div>

      <div className="lg:px-24 lg:pt-20 lg:pb-28 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-0 mt-8 lg:mt-0">
        <div className="lg:w-[250px] flex flex-col shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] pb-10 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg  m-4 lg:m-0">
        <div className="w-full h-52">
            <img
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="" className="w-full h-full"
            />
          </div>
          <h5 className="lg:text-xl text-center font-bold mt-8">
            Dr. Adewale Johnson
          </h5>
          <p className="text-center text-[14px] lg:text-[16px] text-secondary">Managing Dir. / CEO</p>

          <a
            className="flex items-center justify-center mt-4 lg:mt-10"
            href="mailto:your-email@example.com"
          >
            <IoMdMail color="gray" />
          </a>
        </div>
        <div className="lg:w-[250px] flex flex-col shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] pb-10 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg  m-4 lg:m-0">
        <div className="w-full h-52">
            <img
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="" className="w-full h-full"
            />
          </div>
          <h5 className="lg:text-xl text-center font-bold mt-8">
            Dr. Adewale Johnson
          </h5>
          <p className="text-center text-[14px] lg:text-[16px] text-secondary">Managing Dir. / CEO</p>

          <a
            className="flex items-center justify-center mt-4 lg:mt-10"
            href="mailto:your-email@example.com"
          >
            <IoMdMail color="gray" />
          </a>
        </div>
        <div className="lg:w-[250px] flex flex-col shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] pb-10 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg  m-4 lg:m-0">
        <div className="w-full h-52">
            <img
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="" className="w-full h-full"
            />
          </div>
          <h5 className="lg:text-xl text-center font-bold mt-8">
            Dr. Adewale Johnson
          </h5>
          <p className="text-center text-[14px] lg:text-[16px] text-secondary">Managing Dir. / CEO</p>

          <a
            className="flex items-center justify-center mt-4 lg:mt-10"
            href="mailto:your-email@example.com"
          >
            <IoMdMail color="gray" />
          </a>
        </div>
        <div className="lg:w-[250px] flex flex-col shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] pb-10 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg  m-4 lg:m-0">
        <div className="w-full h-52">
            <img
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="" className="w-full h-full"
            />
          </div>
          <h5 className="lg:text-xl text-center font-bold mt-8">
            Dr. Adewale Johnson
          </h5>
          <p className="text-center text-[14px] lg:text-[16px] text-secondary">Managing Dir. / CEO</p>

          <a
            className="flex items-center justify-center mt-4 lg:mt-10"
            href="mailto:your-email@example.com"
          >
            <IoMdMail color="gray" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};
