import React from "react";
import { NavLink } from "react-router-dom";
import { IoCopyOutline } from "react-icons/io5";


const JobListings = () => {
  return (
    <div className="flex w-full">
      <div className=""> {/* Adjust width if necessary */}</div>
      <div className="flex flex-col w-full  p-6 bg-white  rounded-lg mx-auto">
        <h2 className="font-extrabold color-green text-[40px] sm:text-[45px] md:text-[50px] lg:text-[55px] lato">
          Job Listings
        </h2>
        <p className="text-[20px] sm:text-[24px] lato font-medium color-black ">
          You can use this page to add, modify, or view jobs.
        </p>
        <div className="flex justify-between  mt-[40px] w-full md:w-[60%] border-b border-gray-200 py-[20px]">
          <h5 className="text-[20px] sm:text-[24px] lato font-medium color-black">
            Job Title
          </h5>
          <h5 className="text-[20px] sm:text-[24px] lato font-medium  color-black">
            Number of Candidates
          </h5>
        </div>
        {/* add job */}
        <div className=" h-screen flex flex-col gap-y-[20px] items-center justify-center "> 
        <p className="text-[20px] sm:text-[24px] lato font-bold ">You have no jobs yet</p>
        <NavLink
          to="/add_detail"
          className="flex items-center w-fit self-center px-4 py-2 bg-teal-600 text-white rounded-md"
        >
         
          Add a job
        </NavLink>
        </div>
      </div>
    </div>
  );
};

export default JobListings;
