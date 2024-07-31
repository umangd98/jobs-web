import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCopyOutline } from 'react-icons/io5';

const SignInJobList = () => {
  const [jobs] = useState([
    {
      title: "Senior Product Developer",
      slug: "senior-product-developer",
      candidates: 0,
    },
    {
      title: "Success Manager Developer",
      slug: "success-manager-developer",
      candidates: 178,
    },
    {
      title: "Community Programme Manager",
      slug: "community-programme-manager",
      candidates: 142,
    },
  ]);

  const navigate = useNavigate();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  const handleJobClick = (slug) => {
    navigate(`/candidate-list/${slug}`);
  };

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full p-6 bg-white rounded-lg mx-auto">
        <h2 className="font-extrabold text-green-600 text-[30px] md:text-[55px] lato">
          Job Listings
        </h2>
        <p className="text-[24px] lato font-medium text-black">
          You can use this page to add, modify, or view jobs.
        </p>
        <div className="flex justify-between mt-[40px] border-b border-gray-200 py-[20px]">
          <h5 className="text-[16px] sm:text-[20px] md:text-[24px] lato font-medium text-black">Job Title</h5>
          <h5 className="text-[16px] sm:text-[20px] md:text-[24px] lato font-medium text-black">Number of Candidates</h5>
          <h5 className="text-[16px] sm:text-[20px] md:text-[24px] lato font-medium text-black">Interview Link</h5>
        </div>
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex gap-x-[30px] justify-between items-center mt-[15px] p-[20px] text-[14px] sm:text-[20px] md:text-[24px] lato font-bold bg-[#dbeced] transition-all hover:bg-[#85bfc1] cursor-pointer"
            onClick={() => handleJobClick(job.slug)}
          >
            <h5 className="w-[350px]">{job.title}</h5>
            <h5>{job.candidates}</h5>
            <h5 className="flex items-center gap-x-[10px] cursor-pointer" onClick={(e) => { e.stopPropagation(); handleCopy(`${job.title}, ${job.candidates}`); }}>
              <IoCopyOutline className="text-2xl" />
              Copy to clipboard
            </h5>
          </div>
        ))}
        <button
          onClick={() => navigate('/signin_job_detail')}
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
        </button>
      </div>
    </div>
  );
};

export default SignInJobList;
