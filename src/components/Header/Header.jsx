import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full z-[999] relative  max-w-[1300px] mx-auto">
      <header className="w-full text-primary flex    justify-between items-center py-4">
        <NavLink to="/">
          <img
            className="w-[250px] sm:w-[270px] md:w-[280px] lg:w-[300px] h-[90px] object-cover"
            src={logo}
            alt="logo"
          />
        </NavLink>
        <nav className="hidden lg:flex items-center gap-x-[10px] lg:gap-[40px] justify-between">
          <NavLink
            to="#pricing"
            className=" text-[13px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium color-black text-center"
          >
            Pricing
          </NavLink>
          <NavLink
            to="#customers"
            className="lato text-[13px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium color-black text-center"
          >
            Customers
          </NavLink>
          <NavLink
            to="#our-story"
            className="lato text-[13px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium color-black text-center"
          >
            Our Story
          </NavLink>
          <NavLink
            to="#contact"
            className="lato text-[13px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium color-black text-center"
          >
            Contact
          </NavLink>
          <NavLink
            to="/signup_job_list"
            className="px-1 flex sm:px-4 md:px-5 lg:px-6 sm:py-2 lg:py-3 border rounded-[15px] bg-teal-600 text-white shadow-md"
          >
            Sign in
          </NavLink>
          <NavLink
            to="/welcome_to_pluto"
            className="px-1 flex sm:px-4 md:px-5 lg:px-6 sm:py-2 lg:py-3 border rounded-[20px] bg-teal-600 text-white shadow-md"
          >
            Schedule a demo
          </NavLink>
        </nav>
        <div className="space-x-4 flex items-center pr-[40px] sm:pr-[60px]">
          <GiHamburgerMenu
            onClick={toggleMenu}
            className="text-[23px] text-black cursor-pointer lg:hidden"
          />
        </div>
      </header>

      {/* Responsive Menu */}
      <div
        className={`fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <button
          type="button"
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          onClick={toggleMenu}
        >
          <span className="sr-only">Close navigation</span>
          <svg
            viewBox="0 0 10 10"
            className="w-2.5 h-2.5 overflow-visible"
            aria-hidden="true"
          >
            <path
              d="M0 0L10 10M10 0L0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <ul className="space-y-6">
          <li>
            <NavLink
              className="hover:text-sky-500 dark:hover:text-sky-400"
              to="#pricing"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-sky-500 dark:hover:text-sky-400"
              to="#customers"
            >
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-sky-500 dark:hover:text-sky-400"
              to="#our-story"
            >
              Our Story
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-sky-500 dark:hover:text-sky-400"
              to="#contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-sky-500 dark:hover:text-sky-400"
              to="/signup_job_list"
            >
              Sign in
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-sky-500 dark:hover:text-sky-400"
              to="/welcome_to_pluto"
            >
              Schedule a demo
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
