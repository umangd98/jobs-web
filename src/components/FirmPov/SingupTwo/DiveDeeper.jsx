import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarTwo from '../../NavbarTwo';

const DiveDeeper = () => {
  return (
    <div className='max-w-[1200px] mx-auto mt-[40px]'>
      <NavbarTwo />
    <div className="flex flex-col  p-6  mt-[20px] ">
      <h2 className="lato font-extrabold text-[45px] md:text-[50px] lg:text-[55px] color-green">Let's dive deeper</h2>
      <p className="lato text-[20px] font-medium color-black ">
        Providing us with additional information will enable us to formulate a smarter interview.
      </p>
      <div className='mt-[50px] border p-[40px] rounded-[30px]'>
      <form className="w-full space-y-4 ">
        <div>
          <label className="block color-black text-[24px] font-medium inter ">About Company</label>
          <input className="mt-1 p-2 w-full h-24 border rounded-md outline-none bg-[#D9EBEC] "></input>
        </div>
        <div>
          <label className="block color-black text-[24px] font-medium inter ">Company Values</label>
          <input className="mt-1 p-2 w-full h-24 border rounded-md outline-none bg-[#D9EBEC] "></input>
        </div>
        <div className="flex justify-between">
          <NavLink to="/signup_two" className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md">Back</NavLink>
          <NavLink to="/add_job" className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md">Get started</NavLink>
        </div>
      </form>
      </div>
    </div>
    </div>
  );
};

export default DiveDeeper;
