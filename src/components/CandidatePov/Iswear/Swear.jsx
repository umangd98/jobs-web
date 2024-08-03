import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineStarRate } from "react-icons/md";
import Logo from "../../Logo";
import Button from "../../Button";

const Swear = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <div className="w-full h-screen max-w-[1300px] mx-auto px-[10px] sm:px-[20px]">
      <div className="mt-2">
        <h2 className="w-[80%] mx-auto text-[40px] font-bold lato text-color-green">
          Done, I swear.
        </h2>
      </div>
      <div className="max-w-[708px] mx-auto">
        <div className="w-full">
          <div className="text-[25px] sm:text-[28px] md:text-[32px] inter font-medium p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <p>
                  <strong>
                    Wasn’t that cool? If it wasn’t what should we change? Drop
                    some feedback below
                  </strong>
                </p>
              </div>
            </div>
            {/* Stars */}
            <div className="flex gap-x-[20px] justify-center items-center mt-[30px]">
              {[...Array(5)].map((_, index) => (
                <MdOutlineStarRate
                  key={index}
                  className={`text-[70px] cursor-pointer ${
                    rating > index ? "text-color-green" : "text-gray-300"
                  }`}
                  onClick={() => handleRating(index + 1)}
                />
              ))}
            </div>
            {/* Textarea */}
            <textarea
              name="text-area"
              id="TextArea"
              className="border w-full mt-[40px] h-[200px] p-4 outline-none text-[16px] text-black inter"
              value={feedback}
              onChange={handleFeedbackChange}
            ></textarea>
          </div>
        </div>
        <div className="lg:mt-[150px] mt-[40px] flex justify-end items-center w-full">
          <Button to="/end">Goodbye</Button>
        </div>
      </div>
    </div>
  );
};

export default Swear;
