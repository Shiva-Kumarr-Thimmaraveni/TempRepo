'use client'

import React, { useState } from 'react';

export default function Component() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const getButtonStyle = (buttonName) => {
    return {
      padding: '10px 20px',
      margin: '0 10px',
      border: '1px solid #3b82f6',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: activeButton === buttonName ? '#3b82f6' : 'white',
      color: activeButton === buttonName ? 'white' : '#3b82f6',
    };
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <button
        style={getButtonStyle('cancel')}
        onClick={() => handleClick('cancel')}
      >
        Cancel
      </button>
      <button
        style={getButtonStyle('edit')}
        onClick={() => handleClick('edit')}
      >
        Edit
      </button>
      <button
        style={getButtonStyle('continue')}
        onClick={() => handleClick('continue')}
      >
        Continue
      </button>
    </div>
  );
}