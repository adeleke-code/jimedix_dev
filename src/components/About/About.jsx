import React from "react";
import Doc from "../../assets/Doc.png";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section id="about-us" className="px-7 lg:px-36 mb-10">
      <h2 className="text-2xl lg:text-3xl text-center mt-8 lg:mt-16 font-bold">
        About <span className="text-primary">Us</span>
      </h2>

      <div className="flex flex-col lg:flex-row mt-10 gap-8">
        <div
          className="lg:w-[50%] h-[340px]"
          style={{
            backgroundImage: `url("${Doc}")`,
            // backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="lg:w-[50%] flex flex-col gap-10">
          <p className="text-center lg:text-left text-[14px] lg:text-[16px] text-gray-500">
            To pioneer accessible and innovative healthcare solutions, striving
            towards a healthier and more resilient community. Our vision is to
            lead the way in shaping a future where everyone has equitable access
            to quality medical care, fostering a world where well-being is
            paramount.
          </p>

          <p className="text-center lg:text-left text-[14px] lg:text-[16px] text-gray-500">
            At JIMEDIX, our mission is to deliver exceptional and compassionate
            healthcare services to individuals and communities, ensuring
            personalized and evidence-based care. We are committed to advancing
            medical knowledge, embracing cutting-edge technologies, and
            fostering partnerships to create a positive impact on health
            outcomes.
          </p>

          <Link to="/about-us">
            <div className="flex items-center w-full ">
              <div className="flex items-center justify-center lg:justify-start w-full">
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
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
