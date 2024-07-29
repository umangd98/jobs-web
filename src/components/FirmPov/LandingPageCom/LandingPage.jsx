import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "/logo.png"


const LandingPage = () => {
  return (
    <div className="bg-white max-w-[1300px] px-[10px] sm:px-[20px] flex flex-col  items-center justify-center  mb-8 mx-auto">
      <header className="w-full text-primary flex flex-wrap justify-center sm:justify-between items-center py-4">
        <img className="w-[250px] sm:w-[270px] md:w-[280px] lg:w-[300px] h-[90px] object-cover" src={logo} alt='logo'/>
        <nav className="flex items-center gap-x-[25px]  justify-between ">
          <NavLink to="#pricing" className="lato text-[13px]  sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium  color-black  text-center">Pricing</NavLink>
          <NavLink to="#customers" className="lato text-[13px]  sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium color-black  text-center">Customers</NavLink>
          <NavLink to="#our-story" className="lato text-[13px]  sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium  color-black text-center">Our Story</NavLink>
          <NavLink to="#contact" className="lato text-[13px]  sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium  color-black text-center">Contact</NavLink>
          <NavLink to="/signup_job_list" className="px-1 flex sm:px-4 md:px-5 lg:px-6 sm:py-2  lg:py-3  border  rounded-[15px] bg-teal-600 text-white">Sign in</NavLink>
          <NavLink to="/pluto_getstarted" className="px-1 flex sm:px-4 md:px-5 lg:px-6 sm:py-2  lg:py-3  border  rounded-[20px] bg-teal-600 text-white">Schedule a demo</NavLink>
        
        </nav>
        <div className="space-x-4">
    </div>
      </header>
      <main className="flex flex-col w-full max-w-[713px] items-center text-center mt-[160px]">
        <h1 className=" text-[36px] sm:text-[40px] md:text-[45px] lg:text-[55px] text-center lato font-medium ">
          Shortlist <span className="italic">thousands</span> of candidate in <span className="text-teal-600 font-extrabold">minutes</span>
        </h1>
        <div className="mt-16 flex flex-col gap-y-[20px]  gap-x-[20px]  w-full max-w-md">
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
