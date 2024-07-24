import React from "react";
import { NavLink } from "react-router-dom";

const JobDetails = () => {
  return (
    <div className="flex gap-x-[20px]">
      <div className="inset-0 flex items-center justify-center mt-[50px] ">
        <div className=" rounded-lg  p-6 w-full  relative">
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
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Job Details</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Job Title</h3>
            <p className="bg-gray-100 p-2 rounded-md mt-2">
              Senior Product Developer
            </p>
          </div>
          <div>
            <h3 className="font-semibold ">Job Description</h3>
            <div className="bg-gray-100 p-4 rounded-md mt-2">
              <p className="font-bold mb-2">About The Role</p>
              <p className="text-gray-700 mb-2">
                POSH has an extensive product, covering b2b and consumer social
                use cases, spanning a web and mobile application. You’ll be
                leading an engineering team that matches this diversity,
                consisting of highly motivated, high-achieving, full-stack SWEs
                at the junior, senior, and staff levels. You’ll be finding
                opportunities to drive technical excellence across all of POSH
                and aligning these initiatives with the career growth of our
                amazing team.
              </p>
              <p className="text-gray-700 mb-2">
                At a high level, you’ll be in charge of:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-2">
                <li>
                  Building a complex social and payments network with
                  appropriate quality, security, and efficiency.
                </li>
                <li>
                  Optimizing our team, culture, processes, technology, and tools
                  for high velocity at scale.
                </li>
                <li>
                  Directly leading our engineering team and driving their
                  growth. Fostering a vibrant, performance and growth-oriented
                  environment for our high-achiever team.
                </li>
                <li>
                  Collaborating with partner teams, and C-suite to drive key
                  POSH initiatives, influencing the experiences of our
                  organizers and attendees.
                </li>
              </ul>
              <p className="text-gray-700 mb-2">Our ideal candidate:</p>
              <ul className="list-disc list-inside text-gray-700 mb-2">
                <li>
                  Has 4+ years of engineering management experience, with 7+
                  years of relevant software development industry experience in
                  a fast-paced tech environment.
                </li>
                <li>
                  Has a diverse range of experience across a few companies,
                  teams, and/or projects/domains.
                </li>
                <li>
                  Has experience with a high-traffic mobile application. Ideally
                  has experience with consumer social or marketplace products.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-[20px]  w-full flex justify-end items-end ">
          <NavLink to="/job_two" className="mt-8 px-6 py-2 bg-teal-600 text-white rounded-[16px] bg-color-green">
            Next
          </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
