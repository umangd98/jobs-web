import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white border-gray-200 z-50">
      <div
        className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        ref={navbarRef}
      >
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={logo}
            className="w-[200px] h-[90px] object-cover"
            alt="Logo"
          />
        </NavLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute z-50 top-[70px] left-0 md:top-[none] md:relative w-full md:block md:w-auto transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#007A7E] md:bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <NavLink
                to="#pricing"
                className="sm:px-4 md:px-5 lg:px-6 sm:py-2 lg:py-3 text-[13px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium color-black text-center block py-2 px-3 text-white rounded md:p-0 "
                aria-current="page"
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#customers"
                className="sm:px-4 md:px-5 lg:px-6 sm:py-2 lg:py-3 text-[13px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium color-black text-center block py-2 px-3 text-white rounded"
                aria-current="page"
              >
                Customers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#our-story"
                className="sm:px-4 md:px-5 lg:px-6 sm:py-2 lg:py-3 text-[13px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium color-black text-center block py-2 px-3 text-white rounded md:p-0"
                aria-current="page"
              >
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#contact"
                className="sm:px-4 md:px-5 lg:px-6 sm:py-2 lg:py-3 text-[13px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium color-black text-center block py-2 px-3 text-white rounded md:p-0"
                aria-current="page"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup_job_list"
                className="sm:px-4 md:px-5 lg:px-6 sm:py-2 lg:py-3 border rounded-[15px] shadow-md text-[13px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium text-center block py-2 px-3 text-white bg-[#007A7E] md:p-0"
                aria-current="page"
              >
                Sign in
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/welcome_to_pluto"
                className="sm:px-4 md:px-5 lg:px-6 sm:py-2 lg:py-3 border rounded-[15px] shadow-md text-[13px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-medium text-center block py-2 px-3 text-white bg-[#007A7E] md:p-0"
                aria-current="page"
              >
                Schedule a demo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
