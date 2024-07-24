import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineStarRate } from "react-icons/md";
import NavbarTwo from '../../NavbarTwo';

const End = () => {
  return (
    <div className="w-full  h-screen mt-[20px] ">
      <NavbarTwo />
      {/* Image with animation */}
      <div className='flex items-center justify-center w-full mt-4'>
        <img src="/public/moveimage.png" alt="MoveImage" className="move-image w-[300px] h-[300px] object-contain" />
      </div>
    </div>
  );
};

export default End;
