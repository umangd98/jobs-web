import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo";

const LetConfirm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    linkedInUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="mt-[40px] max-w-[1300px] mx-auto">
      <h2 className="w-[90%] px-[10px] sm:px-[20px] mx-auto text-[32px] font-bold lato text-[#007A7E]">
        First, Let's Confirm it's You
      </h2>
      <div className="p-6 bg-white rounded-lg mx-auto mt-[20px] md:w-1/2">
        <div className="p-6 mx-auto border border-[#0000001c] rounded-xl">
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-black inter text-[24px] ml-[4px]">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px] outline-none"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-black inter text-[24px] ml-[4px]">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px] outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-black inter text-[24px] ml-[4px]">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px] outline-none"
              />
            </div>
            <div>
              <label className="block text-black inter text-[24px] ml-[4px]">
                Email
              </label>
              <p className="text-sm text-gray-500">
                Please use the email you applied with
              </p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px] outline-none"
              />
            </div>
            <div>
              <label className="block text-black inter text-[24px] ml-[4px]">
                LinkedIn URL
              </label>
              <input
                type="text"
                name="linkedInUrl"
                value={formData.linkedInUrl}
                onChange={handleChange}
                className="mt-1 p-2 w-full border bg-[#D9EBEC] rounded-[24px] outline-none"
              />
            </div>
          </form>
        </div>
        <div className="flex flex-row-reverse my-[20px]">
          <NavLink
            to="/just_little_bite"
            type="submit"
            className="px-6 py-2 bg-teal-600 text-white rounded-lg lato w-fit"
          >
            Next
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LetConfirm;
