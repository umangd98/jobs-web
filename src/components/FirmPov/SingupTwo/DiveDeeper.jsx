import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo";
import Button from "../../Button";

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
    <div className="max-w-[1200px] px-[10px] sm:px-[20px] lg:px-[30px] mx-auto h-[80vh] lg:h-[80vh] max-md:h-[75vh] flex items-center justify-center">
      {/* <Logo /> */}
      <div className="flex flex-col md:p-4 w-full">
        <div className="px-4">
          <h2 className="font-lato font-[700] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] color-green">
            Let&apos;s dive deeper
          </h2>
          <p className="lato text-[8px] sm:text-[14px] md:text-[18px] font-medium color-black">
            Providing us with additional information will enable us to formulate a smarter interview.
          </p>
        </div>
        <div className="mt-2 border p-[15px] sm:p-[20px] lg:p-[25px] rounded-[20px]">
          <form className="w-full space-y-3">
            <div>
              <label className="block color-black text-[10px] sm:text-[14px] md:text-[16px] font-medium inter">
                About Company
              </label>
              <textarea
                name="aboutCompany"
                value={formData.aboutCompany}
                onChange={handleChange}
                className="mt-1 p-1.5 w-full h-20 border rounded-md outline-none bg-[#D9EBEC]"
              ></textarea>
            </div>
            <div>
              <label className="block color-black text-[10px] sm:text-[14px] md:text-[16px] font-medium inter">
                Company Values
              </label>
              <textarea
                name="companyValues"
                value={formData.companyValues}
                onChange={handleChange}
                className="mt-1 p-1.5 w-full h-20 border rounded-md outline-none bg-[#D9EBEC]"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <Button to="/signup_two">Back</Button>
              <Button to="/add_job">Get started</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiveDeeper;
