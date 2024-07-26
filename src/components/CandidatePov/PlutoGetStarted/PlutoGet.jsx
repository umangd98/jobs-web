import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarTwo from '../../NavbarTwo';

const PlutoGet = () => {
  return (
    <div className="bg-black w-full  ">
        <div className='max-w-[1300px] mx-auto flex items-center gap-x-[50%] px-[10px] sm:px-[20px]  sm:gap-x-[20%] py-[30px]'>
    <NavbarTwo />
      <div className="text-center bg-white rounded-full p-[10px] w-[50px] h-[50px]">
        <div className="bg-teal-600 text-white w-[30px] flex items-center justify-center h-[30px] rounded-full p-2">
          <span className="font-bold text-xl">S</span>
        </div>
      </div>
      </div>
      <div className=" text-white p-8 rounded-lg w-full mt-[20px] max-w-[708px] mx-auto ">
        <NavLink  to="/candidate_upload_file" className="text-[24px] font-bold flex inter bg-color-green rounded-t-xl w-full text-center p-[20px]">Pluto — Get Started</NavLink>
        <div className="text-left space-y-2 bg-[#001213] p-[20px]">
          <p className='text-[16px] font-extrabold inter '>Hey, we need to collect some info. It'll take 1 minute. If you make a mistake, type redo. You'll also have a chance to review.</p>
          <p className='text-[16px] font-extrabold inter '>Ready (Yes/No)? <span className="color-green">yes</span></p>
          <p className='text-[16px] font-extrabold inter '>What is your full name? <span className="color-green">Seth Sahil</span></p>
          <p className='text-[16px] font-extrabold inter '>What is your email address? <span className="color-green">Redo</span></p>
          <p className='text-[16px] font-extrabold inter '>What is your full name? <span className="color-green">Sahil Sethi</span></p>
          <p className='text-[16px] font-extrabold inter '>What is your email address? <span className="color-green">sahilseth2023@u.northwestern.edu</span></p>
          <p className='text-[16px] font-extrabold inter '>What is your phone number? <span className="color-green">5165256246</span></p>
          <p className='text-[16px] font-extrabold inter '>How many years of relevant experience do you have? (ex. 5) <span className="color-green">2</span></p>
          <p className='text-[16px] font-extrabold inter '>What is the highest educational degree you have obtained? (Associate's, Bachelor's, Master's, PhD or higher, Other) <span className="color-green">Bachelor's</span></p>
          <p className='text-[16px] font-extrabold inter '>What is your first preferred job location (ex. NYC)? <span className="color-green">NYC</span></p>
          <p className='text-[16px] font-extrabold inter '>What is your second preferred job location (ex. Miami)? <span className="color-green">NYC</span></p>
          <p className='text-[16px] font-extrabold inter '>What is your third preferred job location (ex. Chicago)? <span className="color-green">NYC</span></p>
          <p className='text-[16px] font-extrabold inter '>What is your work authorization in the country of employment? (Yes, No) <span className="color-green">Yes</span></p>
          <p className='text-[16px] font-extrabold inter '>When are you available to start a new job? (ASAP, 1 Week, 1 Month, 3+ Months) <span className="color-green">ASAP</span></p>
          <p className='text-[16px] font-extrabold inter '>You're finished!</p>
        </div>
      </div>
    </div>
  );
};

export default PlutoGet;
