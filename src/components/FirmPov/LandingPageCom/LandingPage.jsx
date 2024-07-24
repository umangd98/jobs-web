import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "/public/logo.png"


const LandingPage = () => {
  return (
    <div className="bg-white flex flex-col  items-center justify-center px-4 mb-8">
      <header className="w-full max-w-[1200px] text-primary flex justify-between items-center py-4">
        <img className=" max-sm:w-[250px] sm:w-[270px] md:w-[280px] lg:w-[300px] h-[90px] object-cover" src={logo} alt='logo'/>
        <nav className="space-x-4">
          <NavLink to="#pricing" className="lato max-sm:text-[15px]  sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium  color-black  text-center">Pricing</NavLink>
          <NavLink to="#customers" className="lato max-sm:text-[15px]  sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium color-black  text-center">Customers</NavLink>
          <NavLink to="#our-story" className="lato max-sm:text-[15px]  sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium  color-black text-center">Our Story</NavLink>
          <NavLink to="#contact" className="lato max-sm:text-[15px]  sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium  color-black text-center">Contact</NavLink>
        </nav>
        <div className="space-x-4">
          <NavLink to="/signup_job_list" className="max-sm:px-3 sm:px-4 md:px-5 lg:px-6 sm:py-2 max-md:hidden lg:py-3  border  rounded-[15px] bg-teal-600 text-white">Sign in</NavLink>
          <NavLink to="/pluto_getstarted" className="max-sm:px-3 sm:px-4 md:px-5 lg:px-6 sm:py-2 max-md:hidden lg:py-3  border  rounded-[20px] bg-teal-600 text-white">Schedule a demo</NavLink>
        </div>
      </header>
      <main className="flex flex-col max-sm:w-full max-w-[713px] items-center text-center mt-[160px]">
        <h1 className=" text-[36px] sm:text-[40px] md:text-[45px] lg:text-[55px] text-center lato font-medium ">
          Shortlist <span className="italic">thousands</span> of candidate in <span className="text-teal-600 font-extrabold">minutes</span>
        </h1>
        <div className="mt-16 flex max-sm:flex-col gap-y-[20px]  gap-x-[20px]  w-full max-w-md">
          <input
            type="email"
            placeholder="What's your email?"
            className="flex-grow lg:px-6 md:px-4 px-3 lg:py-3 py-2 border rounded-[30px] border-gray-300  focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <NavLink to="/signup_one" className="lg:px-4 px-3 lg:py-3 py-2 bg-teal-600 text-white rounded-[15px] lato hover:bg-teal-700">Get Started</NavLink>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
