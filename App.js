import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import ChatHistory from './components/ChatHistory'
import ChatWindow from './components/ChatWindow'
import { ThemeProvider, useTheme } from './ThemeContext'

const AppContent = () => {
  const { isDarkMode } = useTheme()
  const [isHistoryVisible, setIsHistoryVisible] = useState(true)

  const toggleHistory = () => {
    setIsHistoryVisible(!isHistoryVisible)
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        backgroundColor: isDarkMode ? 'rgb(26, 32, 44)' : '#f7fafc',
        color: isDarkMode ? 'white' : '#2d3748',
      }}
    >
      <Sidebar />
      <div className="flex flex-grow overflow-hidden">
        {isHistoryVisible && <ChatHistory />}
        <ChatWindow
          isHistoryVisible={isHistoryVisible}
          toggleHistory={toggleHistory}
        />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
