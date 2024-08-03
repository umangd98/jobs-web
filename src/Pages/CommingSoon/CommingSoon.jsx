import React from "react";

const CommingSoon = () => {
  return (
    <div className="bg-white text-gray-800 flex items-center justify-center min-h-[80vh]">
      <div className="text-center px-4 py-10">
        <h1 className="text-5xl font-bold text-[#007A7E] mb-6">Coming Soon</h1>
        <p className="lato text-lg mb-8">
          We're working hard to finish the development of this site. Stay tuned!
        </p>
        <div className="mt-6">
          <button className="bg-[#007A7E] hover:bg-teal-700 text-white font-bold py-2 px-12 rounded-lg">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
