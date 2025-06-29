import {React, useState, useEffect} from "react";

import { CiEdit } from "react-icons/ci";
import { FaRegUser, FaTasks } from "react-icons/fa";
import { IoReloadOutline, IoSettingsOutline } from "react-icons/io5";
import { MdAutoGraph, MdOutlineSkipNext } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";
import PomodoroTabs from "../components/PomodoroTabs";
import formatTime from "../utils/format.js";
import YouTubePlayer from "../components/YouTubePlayer.jsx";
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
    const [activeTab, setActiveTab] = useState(0);
     // Update timer based on tab
     const getTimeByTab = (index) =>{
        switch(index){
            case 0: return 25;
            case 1: return 5;
            case 2: return 15;
            default: return 25;
        }
     };

     const getVideoByTab = (index) => {
  switch (index) {
    case 0: return 'jfKfPfyJRdk'; // Study
    case 1: return '5yx6BWlEVcY'; // Short break
    case 2: return '2OEL4P1Rz04'; // Long break
    default: return 'jfKfPfyJRdk';
  }
};

const borderByTab = [
    "border-blue-500",   // Study
  "border-green-500",  // Short Break
  "border-pink-500"    // Long Break
  ];

    //  const [studyTime, setStudyTime] = useState(getTimeByTab(activeTab));
     const [timeLeft, setTimeLeft] = useState(25 * 60);
     const [isRunning, setIsRunning] = useState(false);

    // Sync when active tab changes
    useEffect(() => {
        setIsRunning(false); // stop timer
        const newTime = getTimeByTab(activeTab)*60;
        setTimeLeft(newTime);
    },[activeTab]);

    useEffect(() => {
        let timer;
        if(isRunning && timeLeft > 0){
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            },1000);
        }
        return () => clearTimeout(timer);
    }, [isRunning, timeLeft]);


  return (
    <div 
          className={`bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto mt-10`}
>
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
            <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col items-center space-y-4 mt-10 rounded-2xl p-4 border-4 ${borderByTab[activeTab]}`}>
                <motion.div
                    key={timeLeft} // Re-animate on time change
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="text-7xl font-bold"
                    >
                    {formatTime(timeLeft)}
                </motion.div>
                <div className="flex space-x-4 items-center text-xl p-6">
                <span>
                    <IoReloadOutline />
                </span>
                <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md"
                        onClick={() => setIsRunning(!isRunning)}
                        >
                        {isRunning ? "Pause" : "Start"}
                    </motion.button>
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
                <PomodoroTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </motion.div>

            {/* media part */}
            {/* -- Tab content -- */}
            <div className={`mt-10 border-4 rounded-lg ${borderByTab[activeTab]}`}>
                <YouTubePlayer videoId={getVideoByTab(activeTab)} isPlaying={isRunning} />
            </div>
    </div>
  );
};

export default Home;
