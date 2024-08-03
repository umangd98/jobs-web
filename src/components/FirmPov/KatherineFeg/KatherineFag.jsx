import { FaCaretDown } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "../../Button";

function KatherineFag() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap lg:flex-nowrap space-x-4 mb-4">
        <div className="w-full lg:w-3/4 flex flex-col space-y-4">
          <header className="flex gap-4 items-center py-4">
            <h1 className="text-[36px] font-bold inter color-black">
              Katherine Feng
            </h1>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-[#90c4c7] rounded-full">
              Pending
              <FaCaretDown className="ms-[20px] inline-block" />
            </span>
          </header>
          <div className="flex max-md:flex-wrap gap-y-[30px] space-x-4 mb-4">
            <button className="px-4 py-2 border  text-color-green rounded-[27px] flex items-center gap-x-[10px]">
              <span>
                <MdOutlineMail />
              </span>{" "}
              Send Email
            </button>
            <Button>
              <span>
                <IoMdDownload />
              </span>{" "}
              Download Resume
            </Button>
            <Button>
              <span>
                <FaExternalLinkAlt />
              </span>
              Preview LinkedIn
            </Button>
          </div>
          <div className="flex items-center space-x-4 border p-2 shadow-lg w-fit rounded-[30px]">
            <audio controls>
              <source
                src="https://www.soundjay.com/button/beep-01a.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
            <span className="text-sm">0:02</span>
          </div>
          <div className="bg-[#90c4c7] text-gray-700 py-2 px-4 rounded-full mb-4 flex items-center justify-between">
            View Transcript{" "}
            <span>
              <FaCaretDown />
            </span>
          </div>
          <div className="bg-[#F9FFFF] border border-[#D9D9D9] p-4 rounded shadow mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">Custom Questions</h3>
                <p>1) Describe your greatest weakness?</p>
                <p className="text-gray-500">Explanation: &ldquo;XXX&ldquo;</p>
                <p>
                  2) What is the most creative thing you&apos;ve done in a work
                  setting?
                </p>
                <p className="text-gray-500">Explanation: &ldquo;XXX&ldquo;</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Candidate Strengths</h3>
                <p className="text-gray-500">Explanation: &ldquo;XXX&ldquo;</p>
                <h3 className="font-bold mb-2">Candidate Weakness</h3>
                <p className="text-gray-500">Explanation: &ldquo;XXX&ldquo;</p>
                <h3 className="font-bold mb-2">Cultural Fit</h3>
                <p className="text-gray-500">High</p>
                <p className="text-gray-500">Explanation: &ldquo;XXX&ldquo;</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Candidate Sentiment</h3>
                <p className="text-gray-500">Charismatic</p>
                <p className="text-gray-500">Explanation: &ldquo;XXX&ldquo;</p>
                <h3 className="font-bold mb-2">Delivery of Speech</h3>
                <p className="text-gray-500">Not concise; professional</p>
                <p className="text-gray-500">Explanation: &ldquo;XXX&ldquo;</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <div className="bg-[#F9FFFF] border border-[#D9D9D9] p-4 pb-12 rounded shadow mb-4">
            <h3 className="font-bold mb-2">Notes</h3>
            <div className="bg-[#fff] p-4 rounded border border-[#D9D9D9]">
              <li className="list-type-disc">Best Candidate ever</li>
            </div>
          </div>
          <div className="bg-[#F9FFFF] border border-[#D9D9D9] p-4 rounded shadow mb-4">
            <h3 className="text-[18] font-semibold inter text-blak">
              Top Skills
            </h3>
            <p>1) Soft Skills</p>
            <p className="text-gray-500">Explanation: &ldquo;XX&ldquo;</p>
            <p>2) Analytics</p>
            <p className="text-gray-500">Explanation: &ldquo;XX&ldquo;</p>
            <p>3) Python</p>
            <p className="text-gray-500">Explanation: &ldquo;XX&ldquo;</p>
            <p>4) Problem Solving</p>
            <p className="text-gray-500">Explanation: &ldquo;XX&ldquo;</p>
            <p>5) Delivery of Speech</p>
            <p className="text-gray-500">Explanation: &ldquo;XX&ldquo; </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KatherineFag;
