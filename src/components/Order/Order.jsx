import { IoIosCalendar } from "react-icons/io";

export const Order = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center overflow-scroll lg:overflow-hidden max-w-[1400px] mx-auto">
        <div className=" lg:w-[80%] my-4 mx-auto  z-auto lg:rounded-[20px] flex justify-between items-center h-28 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <div className="flex-1 pr-9  lg:pr-4 text-left ml-10">
            <div className="flex flex-col gap-2">
              <p className="text-[12px] lg:text-[14px] ">Address</p>
              {/* <p className="text-[14px] lg:text-[16px]">Toronto</p> */}
              <input
                type="text"
                placeholder="Enter address"
                className="border-b outline-none text-[12px] lg:text-[14px]"
              />
            </div>
          </div>
          <Separator />
          <div className="flex-1 pr-9  lg:pr-4 text-left ml-10">
            <div className="flex gap-2 items-center">
              <IoIosCalendar size={20} color="gray" />
              <p className="text-[12px] lg:text-[14px]">20:10:2024</p>
            </div>
          </div>
          <Separator />
          <div className="flex-1 pr-9  lg:pr-4 text-left ml-10">
            <div className="flex flex-col gap-2">
              <p className="text-[12px] lg:text-[14px] ">Quantities</p>
              {/* <p className="text-[14px] lg:text-[16px]">3 pieces</p> */}
              <input
                type="text"
                placeholder="Enter number"
                className="border-b outline-none text-[12px] lg:text-[14px]"
              />
            </div>
          </div>
          <Separator />
          <div className="flex-1 pr-9  lg:pr-4 text-left ml-10">
            <div className="flex flex-col gap-2">
              <p className="text-[12px] lg:text-[14px] ">Mobile Number</p>
              {/* <p className="text-[14px] lg:text-[16px]">08126899573</p> */}
              <input
                type="text"
                placeholder="Enter phone number"
                className="border-b  outline-none text-[12px] lg:text-[14px]"
              />
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center bg-primary h-full lg:rounded-r-[20px] px-10 cursor-pointer hover:bg-secondary transition duration-500">
            <p className="text-[#fff] font-bold text-[14px] w-[100px] lg:w-[120px] lg:text-[18px] text-center">
              ORDER NOW
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Separator = () => {
  return <div className="border-r border-gray-400 h-[30%]"></div>;
};
