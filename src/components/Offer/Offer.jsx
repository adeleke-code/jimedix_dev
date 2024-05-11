
import { TbClock24 } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaUserDoctor } from "react-icons/fa6";
import PropTypes from 'prop-types';

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

  FeatureCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  const features = [
    {
      icon: <TbClock24 className="icon" size={40} />,
      title: "Instant Delivery",
      description: "Get your results faster with our swift service.",
    },
    {
      icon: <HiOutlineLightBulb className="icon" size={40} />,
      title: "Easy Order",
      description: "Simplicity of placing your order with just a few clicks.",
    },
    {
      icon: <FaUserDoctor className="icon" size={40} />,
      title: "Secure Payment",
      description: "Your transactions, protected every step of the way.",
    },
    {
      icon: <FaUserDoctor className="icon" size={40} />,
      title: "Cashback Offer",
      description: "Order now and enjoy money back on your purchases.",
    },
  ];

  return (
    <div className="px-7 lg:px-36 mb-10 flex flex-col lg:flex-row gap-4 lg:gap-20 items-center max-w-[1400px] mx-auto">
      <div className="lg:w-[40%]">
        <h2 className="text-2xl text-center lg:text-left lg:text-3xl mt-8 lg:mt-16 font-bold">
          What makes us <span className="text-primary">Different ?</span>
        </h2>
        <p className="text-center lg:text-left mt-4 text-[14px] lg:text-[16px] text-gray-500">
          We maintain the highest standards of quality and accuracy in
          everything we do, so you can trust in the reliability of our results.
        </p>
        <p className="text-center lg:text-left mt-4 text-[14px] lg:text-[16px] text-gray-500">
          We take the time to understand your needs and tailor our services
          accordingly, because we believe that every individual deserves
          personalized attention.
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
