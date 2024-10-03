// App.js
import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import OptionsBox from './components/OptionsBox'
import ChatWindow from './components/ChatWindow'

const App = () => {
  const [activeOption, setActiveOption] = useState(null)

  const toggleOptionsBox = (option) => {
    setActiveOption(activeOption === option ? null : option)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onOptionClick={toggleOptionsBox} activeOption={activeOption} />
      <div className="flex-1 flex">
        {activeOption && (
          <OptionsBox
            option={activeOption}
            onClose={() => setActiveOption(null)}
          />
        )}
        <ChatWindow />
      </div>
    </div>
  )
}

export default App
