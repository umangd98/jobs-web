import React from 'react';

const Sidebar = () => {
  return (
    <div className="color-black h-screen flex flex-col items-center py-8">
      <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center mx-auto bg-teal-800 ">
        <h2 src="/path/to/logo.png" alt="Logo" className="text-[40px] text-white lato">P</h2>
      </div>
      <div className="flex flex-col items-center space-y-8 ">
        <div className="flex items-center space-x-4 flex-col">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          <span>Job Listings</span>
        </div>
        <div className="flex items-center space-x-4 flex-col">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10l5-5m0 0l5 5m-5-5v12" />
          </svg>
          <span>Notifications</span>
        </div>
        <div className="flex items-center space-x-4 flex-col">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12.9a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Payment</span>
        </div>
        <div className="flex items-center space-x-4 flex-col">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>Settings</span>
        </div>
        <div className="flex items-center space-x-4 flex-col">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 18.364a2 2 0 010-2.828l7.779-7.778a2 2 0 012.828 0l7.779 7.778a2 2 0 010 2.828l-7.779 7.778a2 2 0 01-2.828 0l-7.779-7.778z" />
          </svg>
          <span>Account</span>
        </div>
        <div className="flex items-center space-x-4 flex-col">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 4V8m0 8l-6 6m6-6L9 8" />
          </svg>
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
