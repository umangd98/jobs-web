import { NavLink } from "react-router-dom";
import Logo from "../../Logo";

const LookRight = () => {
  return (
    <div className=" w-full h-screen max-w-[1300px] mx-auto px-[10px] sm:px-[20px] ">
      <div className="mt-2">
        <h2 className="md:w-[90%] mx-auto max-sm:px-[25px] text-[32px] font-bold lato color-green mb-[20px]">
          Does this look right?
        </h2>
      </div>
      <div className="w-full sm:w-[70%] mx-auto">
        <div className="  rounded-xl border  w-full ">
          <div className="text-[20px] inter font-medium  p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[20px] sm:text-[24px] font-medium inter">
              <div>
                <p>
                  First Name:<strong>John</strong>
                </p>
              </div>
              <div>
                <p>
                  Last Name:<strong>Doe</strong>
                </p>
              </div>
              <div>
                <p>
                  Phone Number:<strong> +1(999)-999-999</strong>
                </p>
              </div>
              <div>
                <p>
                  Email:<strong>johndoe@gmail.com</strong>
                </p>
              </div>
              <div className="sm:col-span-2">
                <p>
                  How many years of professional experience do you have?
                  <strong> 8</strong>
                </p>
              </div>
              <div className="sm:col-span-2">
                <p>
                  Highest level of education obtained?<strong>Masters</strong>{" "}
                </p>
              </div>
              <div className="sm:col-span-2">
                <p>
                  What is your level of English proficiency?
                  <strong>Fluent</strong>{" "}
                </p>
              </div>
              <div className="sm:col-span-2">
                <p>Select your top 3 job locations:</p>
                <ol className=" list-alphbet list-inside">
                  <li>
                    <strong>New York</strong>
                  </li>
                  <li>
                    <strong>Chicago</strong>
                  </li>
                  <li>
                    <strong>San Francisco</strong>
                  </li>
                </ol>
              </div>
              <div className="sm:col-span-2">
                <p>
                  When are you available to start a new job?
                  <strong>ASAP</strong>{" "}
                </p>
              </div>
              <div className="sm:col-span-2">
                <p>
                  What are your salary expectations?
                  <strong>$100,000 - $250,000</strong>{" "}
                </p>
              </div>
              <div className="sm:col-span-2">
                <p>
                  Do you have work authorization in the country of employment?
                  <strong>Yes</strong>{" "}
                </p>
              </div>
              <div className="sm:col-span-2">
                <p>
                  Do you have any disabilities?<strong>No</strong>{" "}
                </p>
              </div>
              <div className="sm:col-span-2">
                <p>
                  Resume File
                  <strong>
                    {" "}
                    <a href="#" className="hover:underline">
                      SSResume.pdf
                    </a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-[40px] flex justify-end items-center w-full">
          <NavLink
            to="/ready"
            className="text-white bg-color-green px-[20px] py-[5px] rounded-[10px] mb-[20px]"
          >
            Yes
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LookRight;
