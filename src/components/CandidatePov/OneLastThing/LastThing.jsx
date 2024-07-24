import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import NavbarTwo from '../../NavbarTwo';



const LastThing = () => {
  return (
    <div className=" w-full h-screen px-[20px] ">
        <div className='mt-2'>
      <NavbarTwo />
      <h2 className="w-[90%] px-[20px] mx-auto text-[32px] mb-[20px] font-bold lato color-green">One last thing...</h2>
      </div>
      <div className='w-[90%] sm:w-[70%] mx-auto'>
      <div className="text-white  rounded-xl border  w-full p-[40px] sm:p-[100px]">
        <p className='text-black mb-[20px] inter font-medium'>Please upload your most recent resume.</p>
      {/* Upload icon */}
      <div className=' border border-teal-800 border-dashed w-full rounded-lg bg-[#dbeced]  p-4'>
      <div className="flex justify-center items-center mx-auto">
        <label htmlFor="file-upload" className=" rounded-full w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
          <IoCloudUploadOutline className="text-4xl color-green" />
        </label>
        <input id="file-upload" type="file" className="hidden" />
      </div>
      <h6 className='text-[18px] sm:text-[20px] inter font-medium text-white text-center p-2 color-green'>Click to Upload Click the button or drop your resume here.</h6>
      <p className='text-[14px] sm:text-[16px] font-medium inter text-center color-green'>Only PDFs are accepted. Max 2MB file size.</p>
      </div>
      </div>
      <div className=' mt-[40px] flex justify-end items-center w-full'>
      <NavLink to="/look_right" className="text-white bg-color-green px-[20px] py-[5px] rounded-[10px] mb-[20px]" >Next</NavLink>
     </div>
     </div>
    </div>
  );
};

export default LastThing;
