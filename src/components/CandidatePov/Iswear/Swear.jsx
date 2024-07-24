import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineStarRate } from "react-icons/md";
import NavbarTwo from '../../NavbarTwo';


const Swear = () => {
  return (
    <div className=" w-full h-screen px-[20px] ">
      <div className='mt-2'>
      <NavbarTwo />
        <h2 className="w-[80%] mx-auto text-[40px] font-bold lato color-green">Ready?</h2>
      </div>
      <div className='max-w-[708px] mx-auto'>
        <div className="w-full ">
          <div className="text-[25px] sm:text-[28px] md:text-[32px] inter font-medium  p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <p><strong>Wasn’t that cool? If it wasn’t what should we change? Drop some feedback below</strong></p>
              </div>
              </div>
              {/* Stars */}
              <div className='flex gap-x-[20px]  justify-center items-center mt-[30px]'>
              <MdOutlineStarRate className='text-[70px] color-green'/>
              <MdOutlineStarRate className='text-[70px] color-green'/>
              <MdOutlineStarRate className='text-[70px] color-green'/>
              <MdOutlineStarRate className='text-[70px] color-green'/>
              <MdOutlineStarRate className='text-[70px] color-green'/>
              </div>
              {/* textarea */}

              <textarea name="text-area" id="TextArea" className='border w-full mt-[40px] h-[200px] p-4 outline-none text-[16px] color-black inter' defaultValue="this was done">

              </textarea>
            
          </div>
        </div>
        <div className=' mt-[40px] flex justify-end items-center w-full'>
          <NavLink to="/end" className="text-white bg-color-green px-[20px] py-[5px] rounded-[10px] mb-[20px]">Goodbye</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Swear;
