import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo";

const DiveDeeper = () => {
  const [formData, setFormData] = useState({
    aboutCompany: "",
    companyValues: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="max-w-[1500px] px-[20px] sm:px-[40px] lg:px-[60px] mx-auto mt-[40px] h-[80vh] lg:h-[85vh] flex items-center justify-center">
      {/* <Logo /> */}
      <div className="flex flex-col md:p-6 mt-[20px] w-full">
        <h2 className="lato font-extrabold text-[36px] sm:text-[40px] md:text-[45px] lg:text-[55px] color-green">
          Let's dive deeper
        </h2>
        <p className="lato text-[18px] sm:text-[20px] md:text-[24px] font-medium color-black mt-4">
          Providing us with additional information will enable us to formulate a
          smarter interview.
        </p>
        <div className="mt-[30px] sm:mt-[40px] lg:mt-[50px] border p-[20px] sm:p-[30px] lg:p-[40px] rounded-[30px]">
          <form className="w-full space-y-4">
            <div>
              <label className="block color-black text-[20px] sm:text-[22px] md:text-[24px] font-medium inter">
                About Company
              </label>
              <textarea
                name="aboutCompany"
                value={formData.aboutCompany}
                onChange={handleChange}
                className="mt-1 p-2 w-full h-24 border rounded-md outline-none bg-[#D9EBEC]"
              ></textarea>
            </div>
            <div>
              <label className="block color-black text-[20px] sm:text-[22px] md:text-[24px] font-medium inter">
                Company Values
              </label>
              <textarea
                name="companyValues"
                value={formData.companyValues}
                onChange={handleChange}
                className="mt-1 p-2 w-full h-24 border rounded-md outline-none bg-[#D9EBEC]"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <NavLink
                to="/signup_two"
                className="mt-4 px-4 py-2 sm:px-6 sm:py-3 bg-teal-600 text-white rounded-md text-[16px] sm:text-[18px] md:text-[20px]"
              >
                Back
              </NavLink>
              <NavLink
                to="/add_job"
                className="mt-4 px-4 py-2 sm:px-6 sm:py-3 bg-teal-600 text-white rounded-md text-[16px] sm:text-[18px] md:text-[20px]"
              >
                Get started
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiveDeeper;
