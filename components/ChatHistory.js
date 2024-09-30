// components/ChatHistory.js
import React from 'react'
import { useTheme } from '../ThemeContext'

const ChatHistory = () => {
  const { isDarkMode } = useTheme()

  return (
    <div
      style={{
        width: '44%',
        backgroundColor: isDarkMode ? '#4a5568' : '#e2e8f0',
        padding: '1rem',
        borderRadius: '1.5rem',
        margin: '0.75rem',
        color: isDarkMode ? 'white' : 'black',
      }}
    >
      <h2
        style={{
          fontSize: '1.25rem',
          fontWeight: 'semibold',
          marginBottom: '1rem',
        }}
      >
        Chat History
      </h2>
      <input
        type="text"
        placeholder="Search Chat Group"
        style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '0.25rem',
          backgroundColor: isDarkMode ? '#2d3748' : 'white',
          color: isDarkMode ? 'white' : 'black',
          marginBottom: '1rem',
        }}
      />
      {/* Add chat history items here */}
    </div>
  )
}

export default ChatHistory
