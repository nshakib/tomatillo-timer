import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegUser, FaTasks } from "react-icons/fa";
import { IoReloadOutline, IoSettingsOutline } from "react-icons/io5";
import { MdAutoGraph, MdOutlineSkipNext } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";
import PomodoroTabs from "../components/PomodoroTabs";

const Home = () => {
  return (
    <div className="h-screen max-w-xl mx-auto pt-10">
      {/* header part */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold ">Tomatillo Timer</h1>
        </div>
        <div className="flex space-x-8 text-2xl ">
          <span>
            <MdAutoGraph />
          </span>
          <span>
            <CiEdit />
          </span>
          <span>
            <TbCalendarTime />
          </span>
          <a>
            <FaTasks />
          </a>
          <a>
            <IoSettingsOutline />
          </a>
          <a>
            <FaRegUser />
          </a>
        </div>
      </div>

      {/* main part */}
      <div
        className="flex flex-col items-center space-y-4 mt-10 border
         border-gray-400 rounded-2xl p-4 border-2"
      >
        <div className="text-7xl font-bold space-x-4">
          <span>25</span>
          <span>:</span>
          <span>00</span>
        </div>
        <div className="flex space-x-4 items-center text-xl p-6">
          <span>
            <IoReloadOutline />
          </span>
          <button
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
                    focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            START
          </button>
          <MdOutlineSkipNext />
        </div>
        <div className="flex space-x-4 items-center text-xl">
          <input
            className="appearance-none h-4 w-4 rounded-full border-2 border-gray-400 checked:bg-blue-500 
                checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="checkbox"
            name=""
            id=""
          />
          <input
            className="appearance-none h-4 w-4 rounded-full border-2 border-gray-400 checked:bg-blue-500 
                checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="checkbox"
            name=""
            id=""
          />
          <input
            className="appearance-none h-4 w-4 rounded-full border-2 border-gray-400 checked:bg-blue-500 
                checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="checkbox"
            name=""
            id=""
          />
        </div>
        <PomodoroTabs />
      </div>

      {/* media part */}
      {/* -- Tab content -- */}
</div>
  );
};

export default Home;
