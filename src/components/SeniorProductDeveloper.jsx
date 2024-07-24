import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoToggle } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";





const candidates = [
  { name: "Katherine Feng", date: "July 28, 2024", status: "Pending" },
  { name: "John Doe", date: "July 28, 2024", status: "Pending" },
  { name: "Mary Jane", date: "July 28, 2024", status: "Pending" },
  { name: "Sahil Seth", date: "July 28, 2024", status: "Pending" },
  { name: "Xavier Dun", date: "July 28, 2024", status: "Pending" },
  { name: "Sage Rogers", date: "July 27, 2024", status: "Pending" },
  { name: "Jackson Liu", date: "July 27, 2024", status: "Pending" },
  { name: "Emily Clark", date: "July 27, 2024", status: "Pending" },
  { name: "Zachary Aldenburg", date: "July 27, 2024", status: "Pending" },
  { name: "Lorita Schuster", date: "July 26, 2024", status: "Pending" },
  { name: "Lorita Schuster", date: "July 26, 2024", status: "Pending" },
  { name: "Lorita Schuster", date: "July 26, 2024", status: "Pending" }
];

function SeniorProductDeveloper() {
  return (
    <div className=" mx-auto p-4">
      <header className="flex justify-between items-center  py-4">
        <div className="flex gap-x-[20px] items-center">
          <NavLink to="/job_listing">
        <IoMdArrowBack className="text-4xl"/>
        </NavLink>
        <h1 className="text-[36px] inter font-bold color-black">Senior Product Developer</h1>
        </div>
        <a href="#" className="text-blue-500">Edit job details</a>
      </header>
      <div className="flex max-md:flex-col gap-x-[30px]">
        <div className="w-full md:w-3/4">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4  border-gray-200">Candidate</th>
                <th className="py-2 px-4 border-b border-gray-200">Interview Date</th>
                <th className="py-2 px-4 border-b border-gray-200">Status</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate, index) => (
                <tr key={index} className="text-center bg-[#d9ebec] hover:bg-[#85bfc1] ">
                  <td className="py-2 px-4 border-b border-white">{candidate.name}</td>
                  <td className="py-2 px-4 border-b border-white">{candidate.date}</td>
                  <td className="py-2 px-4 border-b border-white">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-[#90c4c7] rounded-full">
                      {candidate.status}
                      <FaCaretDown  className="inline-block"/>

                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="mt-4 px-4 py-2 bg-color-green rounded-[20px] text-white ">Export to ATS</button>
          <div className="flex justify-center mt-4">
            <nav>
              <ul className="flex space-x-2">
                <li><a href="#" className="px-3 py-1 bg-gray-200 rounded">1</a></li>
                <li><a href="#" className="px-3 py-1 bg-gray-200 rounded">2</a></li>
                <li><a href="#" className="px-3 py-1 bg-gray-200 rounded">3</a></li>
                <li><a href="#" className="px-3 py-1 bg-gray-200 rounded">4</a></li>
                <li><span>...</span></li>
                <li><a href="#" className="px-3 py-1 bg-gray-200 rounded">24</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="w-full md:w-[330px]">
          <aside >
            <div className="bg-white p-6 rounded shadow">
            <button className="lato font-bold text-[14px] mt-[-20px] color-black flex items-center gap-x-[5px]">
            View Pluto candidate pool
            <span>
              <IoToggle className="text-[40px]" />
            </span>
          </button>
          <div className=" p-4 rounded-lg  w-full ">
            <h3 className="text-[16px] font-bold inter mb-2 color-black">Candidate Match</h3>
            <p className="text-[10px] font-medium inter mb-2">Select the percentage group to filter for matching candidates.</p>
            {/* cndiate match */}
            <select className="w-[60%] rounded-[20px] bg-[#d9ebec] p-2 mb-4 border border-gray-300 text-[14px] ">
              <option value="">Select</option>
            </select>
            <hr />
            <h4 className="text-[16px] inter color-black font-medium mb-[5px] text-md ">Optional Filters</h4>
            <div className="grid gap-x-[10px] grid-cols-2">
              {/* Experience */}
              <div>
              <h4 className="text-[16px] inter color-black font-medium mb-[5px]">Experience</h4>
                <select className="w-full  rounded-[20px] bg-[#d9ebec] p-2 mb-2 px-4 border border-gray-300 text-[14px] ">
                <option value="">select</option>
                  <option value="">select 1</option>
                  <option value="">select 2</option>                </select>
              </div>
              {/*Education*/}
              <div>
              <h4 className="text-[16px] inter color-black font-medium mb-[5px]">Education</h4>
                <select className="w-full  rounded-[20px] bg-[#d9ebec] p-2 mb-2 px-4 border border-gray-300 text-[14px] ">
                <option value="">select</option>
                  <option value="">select 1</option>
                  <option value="">select 2</option>                </select>
              </div>
              {/* Preferred Location */}
              <div>
              <h4 className="text-[16px] inter color-black font-medium mb-[5px]">Preferred Location</h4>
                <select className="w-full  rounded-[20px] bg-[#d9ebec] p-2 mb-2 px-4 border border-gray-300 text-[14px] ">
                <option value="">select</option>
                  <option value="">select 1</option>
                  <option value="">select 2</option>
                </select>
              </div>
              {/* Work authorization */}
              <div>
              <h4 className="text-[16px] inter color-black font-medium mb-[5px]">Work authorization</h4>
                <select className="w-full  rounded-[20px] bg-[#d9ebec] p-2 mb-4 border border-gray-300 text-[14px] ">
                  <option value="">select</option>
                  <option value="">select 1</option>
                  <option value="">select 2</option>
                </select>
              </div>
            </div>
            <hr />
            {/* Required Skill */}
            <h4 className="text-[16px] inter color-black font-medium mb-[5px]">Required skills</h4>
            <div className="grid gap-x-[10px] grid-cols-3">
            <select className="w-full  rounded-[20px] bg-[#d9ebec] p-2 mb-2 px-4 border border-gray-300 text-[14px] ">
              <option value="">Select</option>
            </select>
            <select className="w-full  rounded-[20px] bg-[#d9ebec] p-2 mb-2 px-4 border border-gray-300 text-[14px] ">
              <option value="">Select</option>
            </select>
            <select className="w-full  rounded-[20px] bg-[#d9ebec] p-2 mb-2 px-4 border border-gray-300 text-[14px] ">
              <option value="">Select</option>
            </select>
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="hideRejected" className="mr-2" />
              <label htmlFor="hideRejected" className="text-[12px] color-black font-medium inter">Hide rejected candidates</label>
            </div>

            <div className="flex justify-between items-center">
              <button className="text-[12px] color-green font-medium inter">Clear Filters</button>
              <button className="p-2 bg-color-green rounded-[20px] px-[30px] text-[16px] inter text-white">
                Submit
              </button>
            </div>
            </div>
          </div>
          </aside>
        </div>
        
      </div>
    </div>
  );
}

export default SeniorProductDeveloper;

