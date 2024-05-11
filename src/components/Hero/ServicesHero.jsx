import { useState } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import BookAppointment from "../BookAppointment/BookAppointment";

export const ServicesHero = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <section className="w-full mt-4 lg:mt-6 lg:gap-10 md:pb-20 lg:pb-0 relative">
      <div className=" h-[200px] lg:h-[400px] lg:pt-10 flex flex-col gap-4 items-center ">
        <h1 className="text-2xl lg:text-5xl leading-[24px] md:leading-[40px] lg:leading-[60px] text-[#fff] font-bold text-center">
          Laboratory Services
        </h1>
        <p className="text-[10px] md:text-[16px] lg:text-[18px] lg:mt-2 text-[#fff] font-regular  md:w-[50%] text-center">
          JIMEDIX&apos;s range of laboratory services covers a wide field of
          clinical laboratory investigations.
        </p>

        <div className="mt-4">
          <Button
            className="font-bold hover:bg-[#fff] hover:text-primary transition duration-500"
            text="text-[10px] lg:text-[16px] text-[#fff]"
            rounded="rounded-[6px]"
            bg="bg-primary "
            w="w-[150px] lg:w-[200px]"
            h="h-[30px] lg:h-[42px]"
            onClick={showModal}
          >
            Book An Appointment
          </Button>
        </div>
      </div>

      {/* MODAL */}
      <Modal
        open={open}
        title={<p className="font-bold mb-4 text-lg lg:text-xl">Book an Appointment</p>}
        onOk={handleOk}
        centered
        onCancel={handleCancel}
        footer={() => <Button className="rounded-md">Submit</Button>}
      >
        <BookAppointment />
      </Modal>

      {/* MENU ITEMS */}
      <div className="absolute top-[30%] transform -translate-y-1/2 -left-12  hidden lg:flex">
        <ul className="uppercase flex flex-col gap-4 text-[14px]">
          <Link to="/">
            <li className="flex items-center gap-10 text-gray-200 cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              Home
            </li>
          </Link>

          <Link to="/about-us">
            <li className="flex items-center gap-10 text-gray-200 cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200 "></span>
              About Us
            </li>
          </Link>

          <Link to="/services">
            <li className="flex items-center gap-10 text-primary cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200 "></span>
              Services
            </li>
          </Link>

          <Link to="/our-team">
            <li className="flex items-center gap-10 text-gray-200 cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              Team
            </li>
          </Link>

          <Link to="/contact-us">
            <li className="flex items-center gap-10 text-gray-200 cursor-pointer">
              <span className="h-[2px] w-10 bg-gray-200"></span>
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </section>
  );
};
