// components/Sidebar.js
import React from 'react'
import { useTheme } from '../ThemeContext'

const Sidebar = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  const menuItems = [
    { name: 'Chat Generator', icon: '💬' },
    { name: 'History', icon: '🕒', count: 15 },
    { name: 'Settings', icon: '⚙️' },
    {name: 'Saved Prompts', icon: '👁'},
  ]

  const themeStyles = {
    backgroundColor: isDarkMode ? 'rgb(26, 32, 44)' : '#f7fafc',
    color: isDarkMode ? 'white' : '#2d3748',
  }

  return (
    <div
      style={{
        width: '400px',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        ...themeStyles,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          <span style={{ color: '#48bb78' }}>•</span> ChatBot
        </h1>
      </div>

      <nav style={{ flex: 1 }}>
        <div
          key="1"
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem',
            marginBottom: '0.5rem',
            cursor: 'pointer',
            backgroundColor: '#ed8936',
            borderRadius: '0.25rem',
            // color: index === 0 ? 'black' : themeStyles.color,
          }}
          
        >
          <span style={{ marginRight: '0.5rem' }}>💬</span>
          Chat Generator
          <span
            style={{
              marginLeft: 'auto',
              backgroundColor: isDarkMode ? '#4a5568' : '#e2e8f0',
              borderRadius: '9999px',
              padding: '0.1rem 0.5rem',
              fontSize: '0.75rem',
            }}
          >
            25
          </span>
        </div>

        <div
          key="2"
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem',
            marginBottom: '0.5rem',
            cursor: 'pointer',
            // backgroundColor: '#ed8936',
            borderRadius: '0.25rem',
            // color: index === 0 ? 'black' : themeStyles.color,
          }}
        >
          <span style={{ marginRight: '0.5rem' }}>🕒</span>
          History
          <span
            style={{
              marginLeft: 'auto',
              backgroundColor: isDarkMode ? '#4a5568' : '#e2e8f0',
              borderRadius: '9999px',
              padding: '0.1rem 0.5rem',
              fontSize: '0.75rem',
            }}
          >
            14
          </span>
        </div>

        <div
          key="3"
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem',
            marginBottom: '0.5rem',
            cursor: 'pointer',
            // backgroundColor: '#ed8936',
            borderRadius: '0.25rem',
            // color: index === 0 ? 'black' : themeStyles.color,
          }}
        >
          <span style={{ marginRight: '0.5rem' }}>⚙️</span>
          Setting
        </div>
      </nav>

      <ThemeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <div
        style={{
          borderTop: `1px solid ${isDarkMode ? '#4a5568' : '#e2e8f0'}`,
          paddingTop: '1rem',
          marginTop: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#48bb78',
              marginRight: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            AW
          </div>
          <div>
            <p style={{ fontWeight: 'bold' }}>Adam Williams</p>
            <p
              style={{
                color: isDarkMode ? '#a0aec0' : '#718096',
                fontSize: '0.8rem',
              }}
            >
              info@gmail.com
            </p>
          </div>
        </div>
        <button
          style={{
            width: '100%',
            backgroundColor: isDarkMode ? 'white' : '#2d3748',
            color: isDarkMode ? '#2d3748' : 'white',
            padding: '0.5rem',
            borderRadius: '0.25rem',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </div>
    </div>
  )
}

const ThemeSwitch = ({ isDarkMode, toggleTheme }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '0.5rem' }}>☀️</span>
      <div
        onClick={toggleTheme}
        style={{
          width: '40px',
          height: '20px',
          backgroundColor: isDarkMode ? '#48bb78' : '#cbd5e0',
          borderRadius: '9999px',
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            width: '18px',
            height: '18px',
            backgroundColor: 'white',
            borderRadius: '50%',
            position: 'absolute',
            top: '1px',
            left: isDarkMode ? '21px' : '1px',
            transition: 'left 0.3s',
          }}
        />
      </div>
      <span style={{ marginLeft: '0.5rem' }}>🌙</span>
    </div>
  )
}

export default Sidebar
