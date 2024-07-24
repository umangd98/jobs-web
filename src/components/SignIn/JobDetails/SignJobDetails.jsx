import React from "react";
import { NavLink } from "react-router-dom";

const SignJobDetails = () => {
  return (
    <div className=" gap-x-[20px]">
      <div className="inset-0 flex items-center justify-center mt-[50px] ">
        <div className="rounded-lg p-6 w-full relative">
          <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <h2 className="text-[38px] font-bold text-teal-700 inter mb-4">
            Job Details
          </h2>
          <div className="mb-4">
            <h3 className="text-[24px] inter font-medium">Job Title</h3>
            <input
              type="text"
              className="bg-[#D9EBEC] outline-none p-4 rounded-md mt-2 w-[100%] max-w-[1100px]  h-[50px] text-[20px] inter font-medium color-black"
            />
          </div>
          <div>
            <h3 className="text-[24px] inter font-medium">Job Description</h3>
            <textarea className="bg-[#D9EBEC] outline-none p-4 rounded-md mt-2 w-full h-[300px] text-[20px] inter font-medium color-black" />
          </div>
          <div className="mt-[20px] w-full flex justify-end items-end">
            <NavLink
              to="/customize_interview"
              className="mt-8 px-6 py-2 bg-teal-600 text-white rounded-[16px] bg-color-green"
            >
              Next
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignJobDetails;
