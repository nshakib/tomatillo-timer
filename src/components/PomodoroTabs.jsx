import { useState } from 'react';

const PomodoroTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'study',
      label: 'Study Time',
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
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default PomodoroTabs;