import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarTwo from '../../NavbarTwo';

const EnterprisePlan = () => {
  return (
    <div className='max-w-[1300px] px-[10px] sm:px-[20px] mx-auto mt-[40px]'>
       <NavbarTwo />
    <div className="flex flex-col md:flex-row p-6 bg-white  rounded-lg  mt-[20px]">
      <div className="md:w-1/2 p-6">
        <h2 className="text-[55px] color-green lato font-extralight">Enterprise Plan</h2>
        <ul className="list-inside space-y-2 lato text-[16px] list-none mt-[40px]">
          <li className='sm:mb-[20px] md:mb-[40px]'>
            <strong>Discounted Pricing:</strong> On-demand pricing for all business sizes, ensuring cost efficiency with scale.
          </li>
          <li className='sm:mb-[20px] md:mb-[40px]'>
            <strong>Premium Support:</strong> 24/7 direct support via a private Slack channel with our dedicated teams.
          </li>
          <li className='sm:mb-[20px] md:mb-[40px]'>
            <strong>Data Security:</strong> Ensure your data's integrity with our commitment to HIPPA compliance.
          </li>
          <li className='sm:mb-[20px] md:mb-[40px]'>
            <strong>Custom LLM:</strong> Enhance your AI capabilities with our tailored support, including prompt optimization, ATS integration, and automated messaging.
          </li>
        </ul>
      </div>
      <div className="md:w-1/2 p-6  border border-[#0000001c] rounded-xl">
        <form className="space-y-4">
          <div>
            <label className="block color-black lato text-[16px]">Full name</label>
            <input type="text" className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px]" />
          </div>
          <div>
            <label className="block color-black lato text-[16px]">Work email</label>
            <input type="email" className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px]" />
          </div>
          <div>
            <label className="block color-black lato text-[16px]">Company name</label>
            <input type="text" className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px]" />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block color-black lato text-[16px]">Location</label>
              <input type="text" className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px] outline-none" />
            </div>
            <div className="w-1/2">
              <label className="block color-black lato text-[16px]">Industry</label>
              <input type="text" className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px] outline-none" />
            </div>
          </div>
          <div className='flex flex-row-reverse'>
          <NavLink to="/signup_two" type="submit" className=" px-6  py-2 bg-teal-600 text-white rounded-lg lato  w-fit">Next</NavLink>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default EnterprisePlan;
