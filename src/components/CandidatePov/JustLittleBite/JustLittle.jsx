import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../../Logo";
import Button from "../../Button";

const JustLittle = () => {
  const [formData, setFormData] = useState({
    experience: "",
    education: "",
    englishProficiency: "",
    jobLocations: "",
    lowestSalary: "",
    highestSalary: "",
    availability: "",
    workAuthorization: "",
    disabilities: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="mt-[40px] max-w-[1300px] mx-auto ">
      <h2 className=" w-[90%] text-[32px] px-[10px] sm:px-5 mx-auto font-bold inter color-green">
        Just a little bit more !
      </h2>
      <div className="p-6 bg-white    mx-auto  ">
        <div className=" w-full sm:w-[70%]  w-md mx-auto">
          <form className="space-y-4 p-6 bg-white border rounded-xl">
            <div className="flex gap-2 justify-between items-center">
              <label className="mb-1  w-[150px] md:w-auto text-[20px] sm:text-[24px] inter font-medium color-black">
                How many years of professional experience do you have?
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="p-2 border rounded-md outline-none w-[162px] h-[40px] bg-[#90c4c7] rounded-"
              >
                <option value="">Select</option>
                <option value="1-2 years">1-2 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>
            <div className="flex justify-between gap-2 items-center">
              <label className="mb-1 w-[150px] md:w-auto text-[20px] sm:text-[24px] inter font-medium color-black">
                Highest level of education obtained?
              </label>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="p-2 border rounded-md outline-none w-[162px] h-[40px] bg-[#90c4c7] rounded-"
              >
                <option value="" className="w-[164px] h-[40px]">
                  Select
                </option>
                <option value="High School">High School</option>
                <option value="Bachelor's">Bachelors</option>
                <option value="Master's">Masters</option>
                <option value="Doctorate">Doctorate</option>
              </select>
            </div>
            <div className="flex justify-between gap-2 items-center">
              <label className="mb-1 w-[150px] md:w-auto text-[20px] sm:text-[24px] inter font-medium color-black">
                What is your level of English proficiency?
              </label>
              <select
                name="englishProficiency"
                value={formData.englishProficiency}
                onChange={handleChange}
                className="p-2 border rounded-md outline-none w-[162px] h-[40px] bg-[#90c4c7] rounded-"
              >
                <option value="" className="w-[164px] h-[40px]">
                  Select
                </option>
                <option value="Basic">Basic</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Fluent">Fluent</option>
              </select>
            </div>
            <div className="flex justify-between gap-2 items-center">
              <label className="mb-1 w-[150px] md:w-auto text-[20px] sm:text-[24px] inter font-medium color-black">
                Select your top 3 job locations.
              </label>
              <select
                name="jobLocations"
                value={formData.jobLocations}
                onChange={handleChange}
                className="p-2 border rounded-md outline-none w-[162px] h-[40px] bg-[#90c4c7] rounded-"
              >
                <option value="">Select</option>
                <option value="Location 1">Location 1</option>
                <option value="Location 2">Location 2</option>
                <option value="Location 3">Location 3</option>
              </select>
            </div>
            <div className="flex justify-between gap-2 items-center">
              <label className="mb-1 w-[150px] md:w-auto  text-[20px] sm:text-[24px] inter font-medium color-black">
                What is your lowest salary expectation?
              </label>
              <select
                name="lowestSalary"
                value={formData.lowestSalary}
                onChange={handleChange}
                className="p-2 border rounded-md outline-none w-[162px] h-[40px] bg-[#90c4c7] rounded-"
              >
                <option value="">Lowest</option>
                <option value="20,000">20,000</option>
                <option value="30,000">30,000</option>
                <option value="40,000">40,000</option>
              </select>
            </div>
            <div className="flex justify-between gap-2 items-center">
              <label className="mb-1 w-[150px] md:w-auto text-[20px] sm:text-[24px] inter font-medium color-black">
                What is your highest salary expectation?
              </label>
              <select
                name="highestSalary"
                value={formData.highestSalary}
                onChange={handleChange}
                className="p-2 border rounded-md outline-none w-[162px] h-[40px] bg-[#90c4c7] rounded-"
              >
                <option value="">Highest</option>
                <option value="50,000">50,000</option>
                <option value="60,000">60,000</option>
                <option value="70,000">70,000</option>
              </select>
            </div>
            <div className="flex justify-between gap-2 items-center">
              <label className="mb-1 w-[150px] md:w-auto text-[20px] sm:text-[24px] inter font-medium color-black">
                When are you available to start a new job?
              </label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                className="p-2 border rounded-md outline-none w-[162px] h-[40px] bg-[#90c4c7] rounded-"
              >
                <option value="">Select</option>
                <option value="Immediately">Immediately</option>
                <option value="Within a month">Within a month</option>
                <option value="In 2-3 months">In 2-3 months</option>
              </select>
            </div>
            <div className="flex justify-between gap-2 items-center">
              <label className="mb-1 w-[150px] md:w-auto text-[20px] sm:text-[24px] inter font-medium color-black">
                Do you have work authorization in the country of employment?
              </label>
              <select
                name="workAuthorization"
                value={formData.workAuthorization}
                onChange={handleChange}
                className="p-2 border rounded-md outline-none w-[162px] h-[40px] bg-[#90c4c7] rounded-"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="flex justify-between gap-2 items-center">
              <label className="mb-1 w-[150px] md:w-auto text-[20px] sm:text-[24px] inter font-medium color-black">
                Do you have any disabilities?
              </label>
              <select
                name="disabilities"
                value={formData.disabilities}
                onChange={handleChange}
                className="p-2 border rounded-md outline-none w-[162px] h-[40px] bg-[#90c4c7] rounded-"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </form>
          <div className="flex flex-row-reverse my-[20px]">
            <Button to="/one_last_thing" type="submit">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustLittle;
