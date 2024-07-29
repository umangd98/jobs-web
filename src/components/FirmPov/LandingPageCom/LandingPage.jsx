import  { useState } from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="bg-white max-w-[1300px] mx-auto px-[30px] sm:px-[20px] flex flex-col items-center justify-center h-[80vh] lg:h-[85vh]">
      <main className="flex flex-col w-full max-w-[900px] items-center text-center mt-[50px] lg:mt-[100px]">
        <h1 className="text-[36px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[65px] text-center lato font-medium">
          Shortlist <span className="italic">thousands</span> of candidates in{" "}
          <span className="text-teal-600 font-extrabold">minutes</span>
        </h1>
        <div className="mt-16 lg:mt-24 flex flex-col lg:flex-row gap-y-[20px] gap-x-[20px] w-full max-w-lg lg:max-w-none">
          <input
            type="email"
            placeholder="What's your email?"
            value={email}
            onChange={handleChange}
            className="flex-grow lg:px-6 md:px-4 px-3 lg:py-3 py-2 border rounded-[30px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <NavLink
            to="/signup_one"
            className="lg:px-6 px-3 lg:py-3 py-2 bg-teal-600 text-white rounded-[15px] lato hover:bg-teal-700 shadow-md"
          >
            Get Started
          </NavLink>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
