import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ to, children , ...props }) => {
  return (
    <NavLink
      to={to}
      className="px-5 py-2 whitespace-nowrap   border rounded-[15px] shadow-md text-[14px]  font-medium text-center flex items-center justify-center  text-white bg-[#007A7E] "
      aria-current="page"
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default Button;
