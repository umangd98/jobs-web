import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ to, children , ...props }) => {
  return (
    <NavLink
      to={to}
      className="sm:px-4 md:px-5 whitespace-nowrap lg:px-6 sm:py-2 lg:py-4 border rounded-[15px] shadow-md text-[13px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium text-center block py-2 px-3 text-white bg-[#007A7E]  md:p-0"
      aria-current="page"
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default Button;
