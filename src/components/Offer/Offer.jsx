import React from "react";
import { TbClock24 } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaUserDoctor } from "react-icons/fa6";


export const Offer = () => {
  const FeatureCard = ({ icon, title, description }) => (
    <div className="flex flex-col items-center px-10 gap-4 custom-hover hover:border-y-2 hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-[20px] ">
      <div className="flex flex-col items-center gap-4 py-8 lg:py-16 custom-hover hover:border-y-2 border-primary">
        {icon}
        <h5 className="text-[14px] lg:text-lg font-bold">{title}</h5>
        <p className="text-center text-[14px] lg:text-[16px] text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );

  const features = [
    {
      icon: <TbClock24 className="icon" size={40} />,
      title: "Instant Delivery",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <HiOutlineLightBulb className="icon" size={40} />,
      title: "Easy Order",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <FaUserDoctor className="icon" size={40} />,
      title: "Secure Payment",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <FaUserDoctor className="icon" size={40} />,
      title: "Cashback Offer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="px-7 lg:px-36 mb-10 flex flex-col lg:flex-row gap-4 lg:gap-20 items-center">
      <div className="lg:w-[40%]">
        <h2 className="text-2xl text-center lg:text-left lg:text-3xl mt-8 lg:mt-16 font-bold">
          What makes us <span className="text-primary">Different ?</span>
        </h2>
        <p className="text-center lg:text-left mt-4 text-[14px] lg:text-[16px] text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, neque?
          Unde est, sint commodi vero voluptate vitae repellat similique dolor.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <p className="text-center lg:text-left mt-4 text-[14px] lg:text-[16px] text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, neque?
          Unde est, sint commodi vero voluptate vitae repellat similique dolor.
        </p>
      </div>

      <div className="lg:w-[60%] mt-10 lg:mt-0">
        <div className="mt-4 lg:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-4 ">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};
