import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import NavbarTwo from '../../NavbarTwo';

const Ready = () => {
  return (
    <div className=" w-full h-screen max-sm:px-[20px] ">
      <div className='mt-2'>
       <NavbarTwo />
        <h2 className=" w-[80%] mx-auto text-[40px] font-bold lato color-green">Ready?</h2>
      </div>
      <div className='w-full sm:w-[70%] mx-auto'>
        <div className="w-full ">
          <div className="text-[20px] inter font-medium  p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[25px] sm:text-[28px] md:text-[32px] font-medium inter" >
              <div className="sm:col-span-2">
                <p><strong> Now that we have what we need, our AI is going to call you. Remember its an AI, not a person!</strong></p>
              </div>
              <div className="sm:col-span-2">
                <p> A few tips: </p>
                <ol className=" list-alphabet list-inside">
                  <li><strong>XX</strong></li>
                  <li><strong>XX</strong></li>
                  <li><strong>XX</strong></li>
                </ol>
              </div>
              <div className="sm:col-span-2">
                <p><strong>If you’re curious, here’s a demo recording of how your call may go:</strong></p>
              </div>
              {/* Audio */}
              <div className="sm:col-span-2 mt-[20px] border w-fit p-3 rounded-full">
                <audio controls>
                  <source src="/call-demo.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </div>
        <div className=' mt-[40px] flex justify-end items-center w-full'>
          <NavLink to="/do_i_swear" className="text-white bg-color-green px-[20px] py-[5px] rounded-[10px] mb-[20px]">Call Me</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Ready;
