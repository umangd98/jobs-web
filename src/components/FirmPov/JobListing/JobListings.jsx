import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Button";

const JobListings = () => {
  return (
    <div className="flex w-full max-w-[1300px] mx-auto">
      <div className=""> {/* Adjust width if necessary */}</div>
      <div className="flex flex-col w-full  p-6 bg-white  rounded-lg mx-auto">
        <h2 className="font-lato font-[700] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] color-green">
          Job Listings
        </h2>
        <p className="lato text-[8px] sm:text-[14px] md:text-[18px] font-medium color-black">
          You can use this page to add, modify, or view jobs.
        </p>
        <div className="flex justify-between  mt-[40px] w-full  border-b border-gray-200 py-[20px]">
          <h5 className="text-[20px] sm:text-[20px] lato font-medium color-black">
            Job Title
          </h5>
          <h5 className="text-[20px] sm:text-[20px] lato font-medium  color-black">
            Number of Candidates
          </h5>
        </div>
        {/* add job */}
        <div className="  h-[50vh]   flex flex-col gap-y-[20px] items-center justify-center ">
          <p className="text-[20px] sm:text-[20px] lato font-bold ">
            You have no jobs yet
          </p>
          <Button to="/add_detail">Add a job</Button>
        </div>
      </div>
    </div>
  );
};

export default JobListings;
