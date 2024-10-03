// components/OptionsBox.js
import React from 'react'

const OptionsBox = ({ option, onClose }) => {
  const renderContent = () => {
    switch (option) {
      case 'Chat Generator':
        return (
          <>
            <input
              type="text"
              placeholder="Search Chat Group"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="space-y-4">
              {[
                'Audio Generate',
                'E-Commerce Website Code',
                'Design Thinking',
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded mr-2"></div>
                  <div>
                    <p className="font-bold">{item}</p>
                    <p className="text-sm text-gray-500">
                      Design thinking is a problem-solving approach...
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full bg-red-400 text-white py-2 rounded mt-4">
              Add New Group
            </button>
          </>
        )
      case 'Feedback':
        return (
          <div>
            <h3 className="text-lg font-bold mb-4">Provide Feedback</h3>
            <textarea
              className="w-full p-2 border rounded mb-4"
              rows="5"
              placeholder="Enter your feedback here..."
            ></textarea>
            <button className="w-full bg-blue-500 text-white py-2 rounded">
              Submit Feedback
            </button>
          </div>
        )
      case 'Prompt Library':
        return (
          <div>
            <h3 className="text-lg font-bold mb-4">Prompt Library</h3>
            <ul className="space-y-2">
              {[
                'Creative Writing',
                'Code Generation',
                'Data Analysis',
                'Language Translation',
              ].map((prompt, index) => (
                <li key={index} className="p-2 bg-gray-100 rounded">
                  {prompt}
                </li>
              ))}
            </ul>
          </div>
        )
      // Add more cases for other options...
      default:
        return <p>Content for {option} goes here.</p>
    }
  }

  return (
    <div className="w-1/3 bg-white p-4 border-r">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{option}</h2>
        <button onClick={onClose} className="text-gray-500">
          &times;
        </button>
      </div>
      {renderContent()}
    </div>
  )
}

export default OptionsBox
