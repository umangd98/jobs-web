import { NavLink } from "react-router-dom";


const WelcomePluto = () => {
  return (
    <div className="bg-white flex lg:items-center md:h-screen w-full px-4 lg:px-20 xl:px-60 ">
      <div className="max-w-3xl mx-auto my-auto">
        <div className="bg-white rounded-lg border p-6">
          <p className="text-lg text-black mb-4">
            Hey there! Welcome to
            <span className="text-teal-600 font-semibold"> Pluto</span>.
          </p>
          <p className="text-md text-black font-medium mb-2">
            You’re about to start a live, AI-powered screening, which will take
            approximately 5 minutes.
          </p>
          <p className="text-md text-black font-medium mb-2">
            Before we start, we’ll ask a few questions to tailor your interview
            experience.
          </p>
          <p className="text-md text-black font-bold mb-2">
            Please click ‘Next’ only when you’re ready to proceed.
          </p>
          <p className="text-md text-black font-bold">
            Remember, you can exit and return to complete the interview at any
            time when you feel prepared.
          </p>
        </div>
        <div className="flex justify-end">
          <NavLink
            to="/let_confirm_it"
            className="mt-6 px-6 py-2 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700"
          >
            Next
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WelcomePluto;
