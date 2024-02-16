import React from "react";
import { Button } from "../Button/Button";

export const Contact = () => {
  return (
    <section id="contact-us" className="px-7 lg:px-32 mt-10 lg:mt-20 flex flex-col lg:flex-row justify-between items-center bg-primary py-10 lg:py-0 lg:h-36 gap-6">
      <div className="text-[#fff] flex flex-col gap-2">
        <h2 className="lg:text-2xl font-semibold text-center lg:text-left">
          Get <span className="text-3xl">10%</span> Cashback
        </h2>
        <p className="text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, at.
        </p>
      </div>
      <div>
        <Button
          className="font-bold hover:bg-[#fff] hover:text-primary transition duration-500 border-2"
          text="text-[10px] lg:text-[16px] text-[#fff]"
          rounded="rounded-[6px]"
          bg="bg-primary "
          w="w-[200px] lg:w-[170px]"
          h="h-[30px] lg:h-[42px]"
        >
          CALL NOW
        </Button>
      </div>
    </section>
  );
};
