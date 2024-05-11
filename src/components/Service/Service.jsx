import { TbClock24 } from "react-icons/tb";
import { FaRegThumbsUp, FaUserDoctor } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiFillCheckCircle } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import PropTypes from 'prop-types';
// import { Button } from "../Button/Button";
// import { Link } from "react-router-dom";

export const Service = () => {
  const ServiceCard = ({ icon, title, description }) => (
    <div className="flex flex-col items-center px-10 gap-4 custom-hover hover:border-y-2 hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-[20px] duration-500 ">
      <div className="flex flex-col items-center gap-4 py-8 lg:py-16 custom-hover hover:border-y-2 border-primary ">
        {icon}
        <h5 className="text-[14px] lg:text-lg font-bold">{title}</h5>
        <p className="text-center text-[14px] lg:text-[16px] text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
  
  ServiceCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  const services = [
    {
      icon: <TbClock24 className="icon" size={40} />,
      title: "24/7 Support",
      description:
        "Experience uninterrupted care with our lab's 24/7 support. Whenever you need us, we're here to ensure your health needs are met.",
    },
    {
      icon: <HiOutlineLightBulb className="icon" size={40} />,
      title: "Creative Solutions",
      description:
        "At our lab, we tink outside the box for your health. Trust us for Creative Solutions that make a difference.",
    },
    {
      icon: <FaUserDoctor className="icon" size={40} />,
      title: "Professional Team",
      description:
        "Where Expertise meets Excellence. Our Professional Team delivers Superior Care and Precise Results, Ensuring your peace of mind.",
    },
    {
      icon: <AiFillCheckCircle className="icon" size={40} />,
      title: "Accurate Results",
      description:
        "Count on Accuracy. Our Lab delivers Dependable and Precise Results for Informed Healthcare Choices.",
    },
    {
      icon: <FaRegThumbsUp className="icon" size={40} />,
      title: "Convenience",
      description:
        "Experience Effortless Health Solutions with Our Lab. Fast, Reliable, and Fit for your schedule.",
    },
    {
      icon: <GrTechnology className="icon" size={40} />,
      title: "Cutting-Edge Technology",
      description:
        "Our Lab embraces Cutting-Edge Innovations to ensure Unrivaled Precision and Efficiency in Testing.",
    },
  ];

  return (
    <section
      id="services"
      className="px-7 lg:px-36 mb-10 max-w-[1400px] mx-auto"
    >
      <h2 className="text-2xl lg:text-3xl text-center mt-8 lg:mt-16 font-bold">
        Why <span className="text-primary">Choose</span> Us?
      </h2>
      <p className="text-center w-[80%] lg:w-[50%] mx-auto mt-4 text-[14px] lg:text-[16px] text-gray-500">
        Accurate Diagnostics and Personalized Service.
        <br />
        <b>Your Health Deserves the Best!</b>
      </p>

      <div className="mt-4 lg:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 ">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* <Link to="/services">
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
      </Link> */}
    </section>
  );
};

