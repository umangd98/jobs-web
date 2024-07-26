import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarTwo from '../../NavbarTwo';

const WelcomePluto = () => {
  return (
    <div className="bg-white w-full px-[60px] ">
        <div className='max-w-[1300px] mx-auto flex items-center gap-x-[50%] px-[10px] sm:px-[20px] sm:gap-x-[20%] py-[30px]'>
     <NavbarTwo />
   
      </div>
      <div className='max-w-3xl mx-auto'>
      <div className="bg-white rounded-lg border  p-6 ">
        <p className="text-lg color-black mb-4">
          Hey there! Welcome to <span className="text-teal-600 font-semibold">Pluto</span>.
        </p>
        <p className="text-[16px] lato color-black font-medium ">
          You’re about to start a live, AI-powered screening, which will take approximately 5 minutes.
        </p>
        <p className="text-[16px] lato color-black font-medium ">
          Before we start, we’ll ask a few questions to tailor your interview experience.
        </p>
        <p className="text-[16px] lato color-black font-bold ">
          Please click ‘Next’ only when you’re ready to proceed.
        </p>
        <p className="text-[16px] lato color-black font-bold ">
          Remember, you can exit and return to complete the interview at any time when you feel prepared.
        </p>
      </div>
      <div className='flex justify-end'>
      <NavLink to="/let_confirm_it" className="mt-6 px-6 py-2 bg-teal-600 text-white rounded-lg  shadow-md hover:bg-teal-700">
        Next
      </NavLink>
      </div>
      </div>
    </div>
  );
};

export default WelcomePluto;
