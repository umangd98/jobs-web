import React from "react";
import { NavLink } from "react-router-dom";
import { IoCopyOutline } from "react-icons/io5";


const JobListings = () => {
  return (
    <div className="flex w-full">
      <div className="w-64"> {/* Adjust width if necessary */}</div>
      <div className="flex flex-col w-full  p-6 bg-white  rounded-lg mx-auto">
        <h2 className="font-extrabold color-green text-[55px] lato">
          Job Listings
        </h2>
        <p className="text-[24px] lato font-medium color-black ">
          You can use this page to add, modify, or view jobs.
        </p>
        <div className="flex justify-between  mt-[40px] border-b border-gray-200 py-[20px]">
          <h5 className="text-[24px] lato font-medium color-black">
            Job Title
          </h5>
          <h5 className="text-[24px] lato font-medium  color-black">
            Number of Candidates
          </h5>
          <h5 className="text-[24px] lato font-medium  color-black">
            Interview Link
          </h5>
        </div>
        {/* add job */}
        <div className="flex justify-between items-center mt-[15px] p-[20px] text-[24px] lato font-bold bg-[#dbeced] transition-all hover:bg-[#85bfc1]">
          <h5>Senior Product Developer</h5>
          <h5>0</h5>
          <h5 className="flex items-center gap-x-[10px]"><span><IoCopyOutline className=""/>
          </span>Copy to clipboard</h5>

          {/* <p className="text-[24px] lato font-medium color-black mb-[30px] text-center" colSpan="2">
                You have no jobs yet.
              </p> */}
        </div>
        <NavLink
          to="/job_details"
          className="flex items-center mt-[150px] self-center px-4 py-2 bg-teal-600 text-white rounded-md"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          Add a job
        </NavLink>
      </div>
    </div>
  );
};

export default JobListings;
