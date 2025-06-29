import { useState } from 'react';

const PomodoroTabs = ({ activeTab, setActiveTab }) => {
 
  const tabs = [
    {
      id: 'study',
      label: 'Study Time',
      videoId: 'jfKfPfyJRdk', // LoFi girl
      content: (
        <div className="p-4">
          <h3 className="text-2xl font-bold">Study Time</h3>
          <p>Focus on your work for 25 minutes.</p>
          {/* Add your timer component here */}
        </div>
      )
    },
    {
      id: 'short-break',
      label: 'Short Break',
       videoId: '5yx6BWlEVcY', // Chillhop Radio
      content: (
        <div className="p-4">
          <h3 className="text-2xl font-bold">Short Break</h3>
          <p>Take a 5 minute break.</p>
          {/* Add your timer component here */}
        </div>
      )
    },
    {
      id: 'long-break',
      label: 'Long Break',
      videoId: '2OEL4P1Rz04', // Ambient relaxing
      content: (
        <div className="p-4">
          <h3 className="text-2xl font-bold">Long Break</h3>
          <p>Take a 15-30 minute break.</p>
          {/* Add your timer component here */}
        </div>
      )
    }
  ];

  return (
    <div className="max-w-md mx-auto">
      {/* Tab Headers */}
      <div className="flex space-x-6 text-xl font-semibold p-4 border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`pb-2 focus:outline-none ${
              activeTab === index
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">{tabs[activeTab].content}</div>
      {/* <div className="mt-4">
        <iframe
          key={tabs[activeTab].videoId}// force reload when tab changes
          width="100%"
          height="200"
          src={`https://www.youtube.com/embed/${tabs[activeTab].videoId}?autoplay=1&controls=0`}
          title="LoFi Player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div> */}
    </div>
  );
};

export default PomodoroTabs;