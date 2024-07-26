import React from "react";
import { NavLink } from "react-router-dom";
import NavbarTwo from "../../NavbarTwo";

const LetConfirm = () => {
  return (
    <div className="mt-[40px] max-w-[1300px] mx-auto ">
         <NavbarTwo />
      <h2 className=" w-[90%] px-[10px] sm:px-[20px] mx-auto text-[32px] font-bold lato color-green">Frist Let's Confirm it's You</h2>
    <div className="p-6 bg-white  rounded-lg  mx-auto mt-[20px] md:w-1/2">
      <div className=" p-6  mx-auto border border-[#0000001c] rounded-xl">
        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block color-black inter text-[24px] ms-[4px]">
                FirstName
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px] outline-none"
              />
            </div>
            <div className="w-1/2">
              <label className="block color-black inter text-[24px] ms-[4px]">
                LastName
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px] outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block color-black inter text-[24px] ms-[4px]">
              Phone Number
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px]"
            />
          </div>
          <div>
            <label className="block color-black inter text-[24px] ms-[4px]">Email</label>
            <p>please use the email you applied with</p>

            <input
              type="email"
              className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px]"
            />
          </div>
          <div>
            <label className="block color-black inter text-[24px] ms-[4px]">LinkdIn Url</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px]"
            />
          </div>
        
        </form>
      </div>
      <div className="flex flex-row-reverse my-[20px]">
            <NavLink
              to="/just_little_bite"
              type="submit"
              className=" px-6  py-2 bg-teal-600 text-white rounded-lg lato  w-fit"
            >
              Next
            </NavLink>
          </div>
    </div>
    </div>
  );
};

export default LetConfirm;
