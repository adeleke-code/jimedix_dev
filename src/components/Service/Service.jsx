import React from "react";
import { TbClock24 } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const Service = () => {
  const ServiceCard = ({ icon, title, description }) => (
    <div className="flex flex-col items-center px-10 gap-4 custom-hover hover:border-y-2 hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-[20px] duration-500 cursor-pointer">
      <div className="flex flex-col items-center gap-4 py-8 lg:py-16 custom-hover hover:border-y-2 border-primary ">
        {icon}
        <h5 className="text-[14px] lg:text-lg font-bold">{title}</h5>
        <p className="text-center text-[14px] lg:text-[16px] text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );

  const services = [
    {
      icon: <TbClock24 className="icon" size={40} />,
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aut quisquam consequatur laborum cupiditate delectus.",
    },
    {
      icon: <HiOutlineLightBulb className="icon" size={40} />,
      title: "Creative Solutions",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aut quisquam consequatur laborum cupiditate delectus.",
    },
    {
      icon: <FaUserDoctor className="icon" size={40} />,
      title: "Professional Team",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aut quisquam consequatur laborum cupiditate delectus.",
    },
  ];

  return (
    <section id="services" className="px-7 lg:px-36 mb-10">
      <h2 className="text-2xl lg:text-3xl text-center mt-8 lg:mt-16 font-bold">
        Our <span className="text-primary">Services</span>
      </h2>
      <p className="text-center w-[80%] lg:w-[50%] mx-auto mt-4 text-[14px] lg:text-[16px] text-gray-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, neque?
        Unde est, sint commodi vero voluptate vitae repellat similique dolor.
      </p>

      <div className="mt-4 lg:mt-8 flex flex-col lg:flex-row gap-6 lg:gap-4 ">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <Link to="/services">
      <div className="flex items-center justify-center w-full mt-16">
        <Button
          className="font-bold hover:bg-secondary transition duration-500 hover:text-[#fff]"
          text="text-[10px] lg:text-[16px] text-[#fff]"
          rounded="rounded-[6px]"
          bg="bg-primary "
          w="w-[100px] lg:w-[200px]"
          h="h-[30px] lg:h-[42px]"
        >
          VIEW MORE
        </Button>
      </div>
      </Link>
    </section>
  );
};
