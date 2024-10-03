// components/Sidebar.js
import React from 'react'

const Sidebar = ({ onOptionClick, activeOption }) => {
  const options = [
    'Chat Generator',
    'Feedback',
    'Prompt Library',
    'My Saves',
    'Favorite',
    'History',
    'Statistics',
    'Settings',
  ]

  return (
    <div className="w-64 bg-blue-900 text-white p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-6">CHaT BoT</h1>
      <nav className="flex-1">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onOptionClick(option)}
            className={`w-full text-left py-2 px-4 rounded mb-2 ${
              activeOption === option ? 'bg-blue-700' : 'hover:bg-blue-800'
            }`}
          >
            {option}
          </button>
        ))}
      </nav>
      <div className="mt-auto">
        <div className="flex items-center mt-4">
          <div className="w-10 h-10 rounded-full bg-gray-300 mr-2"></div>
          <div>
            <p className="font-bold">Adam Williams</p>
            <p className="text-sm">info@gmail.com</p>
          </div>
        </div>
        <button className="w-full bg-white text-blue-900 py-2 rounded mt-4">
          Upgrade To pro
        </button>
      </div>
    </div>
  )
}

export default Sidebar
