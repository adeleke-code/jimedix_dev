import React from "react";

import { NavBar } from "../../components/NavBar/NavBar";

import { Footer } from "../../components/Footer/Footer";

import { BlogHero } from "../../components/Hero/BlogHero";

export const Blog = () => {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/12257633/pexels-photo-12257633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url("${backgroundImageUrl}")`,
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
          <BlogHero />
        </div>
      </div>

      <div className="lg:px-24 lg:pt-20 pb-8 lg:pb-28 grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 lg:mt-0 lg:gap-20 lg:mx-32">
        <div className=" flex flex-col shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] pb-10 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg  m-4 lg:m-0">
          <div className="w-full h-72 ">
            <img
              src="https://images.pexels.com/photos/5938561/pexels-photo-5938561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="px-8">
            <h5 className="lg:text-xl mt-8 text-primary font-bold">
              Maintaining the Hand Hygiene Culture
            </h5>
            <p className="text-[14px] lg:text-[16px] text-gray-600 mt-4">
              Regular Hand Washing has always been one of the best ways to
              protect yourself and your family from getting sick. So, Post
              COVID-19 regular hand...
            </p>
            <p className="text-[14px] text-primary my-4">
              READ MORE   {" >>> "}
            </p>
            <hr />

            <p className="text-[14px] text-gray-600 my-4 font-semibold">
              Feb. 6, 2024 
            </p>
          </div>
        </div>
        <div className=" flex flex-col shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] pb-10 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg  m-4 lg:m-0">
          <div className="w-full h-72 ">
            <img
              src="https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="px-8">
            <h5 className="lg:text-xl mt-8 text-primary font-bold">
            Why Do You Need A Medical Check-up, At Least Annually?
            </h5>
            <p className="text-[14px] lg:text-[16px] text-gray-600 mt-4">
            The general belief about routine medical checks is that it is for the sick or any aged person battling with a certain health condition. But...
            </p>
            <p className="text-[14px] text-primary my-4">
              READ MORE   {" >>> "}
            </p>
            <hr />

            <p className="text-[14px] text-gray-600 my-4 font-semibold">
              Feb. 6, 2024 
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
