import React from "react";
import { BsCart2 } from "react-icons/bs";

export const Product = () => {
  return (
    <section id="product" className="sm:px-7 lg:px-32 mb-10">
      <h2 className="text-2xl lg:text-3xl text-center mt-8 lg:mt-16 font-bold">
        Our <span className="text-primary">Products</span>
      </h2>
      <p className="text-center w-[80%] lg:w-[50%] mx-auto mt-4 text-[14px] lg:text-[16px] text-gray-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, neque?
        Unde est, sint commodi vero voluptate vitae repellat similique dolor.
      </p>

      <div className="mt-10 lg:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 lg:gap-4">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="relative flex flex-col items-center gap-4 custom-hover hover:border-y-2 custom-hover hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] duration-500 cursor-pointer rounded-[20px] group w-[80%] mx-auto lg:w-full"
          >
            <img
              src="https://images.pexels.com/photos/3873209/pexels-photo-3873209.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="rounded-t-[20px]"
            />
            <div className=" pb-10">
              <h5 className="text-[14px] lg:text-lg font-bold text-center">
                Spray Bottles
              </h5>
              <p className="text-center text-[14px] lg:text-[16px] text-gray-500 px-8 pb-4 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                aut quisquam consequatur laborum cupiditate delectus.
              </p>
              {/* Cart icon and price (visible only on hover) */}
              <div className="flex items-center justify-center -space-x-4 mt-4 opacity-0 absolute bottom-0  p-4 w-full invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 rounded-b-[20px] -mb-9">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-20">
                  <BsCart2 size={20} color="#fff" />
                </div>
                <div className="text-primary h-8 w-20 rounded-[30px] bg-[#fff] flex items-center justify-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pl-3 font-bold">
                  {" "}
                  $10.99
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
