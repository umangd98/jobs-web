import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";

const SideBarHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu2 = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full h-full z-[20] relative">
      <div className="flex lg:hidden items-center p-4 ps-[40px] border-b border-slate-900/10 dark:border-slate-50/[0.06]">
        <button
          onClick={toggleMenu2}
          type="button"
          className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        >
          <span className="sr-only">Navigation</span>
          <svg width="24" height="24">
            <path
              d="M5 6h14M5 12h14M5 18h14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
        <ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
          <li className="flex items-center">
            Getting Started
            <svg
              width="3"
              height="6"
              aria-hidden="true"
              className="mx-3 overflow-visible text-slate-400"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
          </li>
        </ol>
      </div>

      {/* responsive */}
      <div
        className={`fixed top-4 right-4 w-full max-w-sm bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5 ${
          isOpen ? "" : "hidden"
        }`}
        id="headlessui-dialog-panel-:ra:"
        data-headlessui-state="open"
        data-open=""
      >
        <button
          type="button"
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          onClick={toggleMenu}
        >
          <span className="sr-only">Close navigation</span>
          <svg
            viewBox="0 0 10 10"
            className="w-2.5 h-2.5 overflow-visible"
            aria-hidden="true"
          >
            <path
              d="M0 0L10 10M10 0L0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* second Navbar */}
      <div
        className={`fixed top-0 left-0 w-full h-full max-w-[180px] bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900  overflow-y-auto ${
          open ? "" : "hidden"
        } hide-scrollbar`}
        id="headlessui-dialog-panel-:ra:"
        data-headlessui-state="open"
        data-open=""
      >
        <button
          type="button"
          className="absolute top-5 right-3 left-3 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          onClick={toggleMenu2}
        >
          <span className="sr-only">Close navigation</span>
          <svg
            viewBox="0 0 10 10"
            className="w-2.5 h-2.5 overflow-visible"
            aria-hidden="true"
          >
            <path
              d="M0 0L10 10M10 0L0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <Sidebar />
      </div>
    </div>
  );
};

export default SideBarHeader;
