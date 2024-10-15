import React, { useState } from 'react';
import { Star, Check } from 'lucide-react';

const FeedbackComponent = () => {
  const [rating, setRating] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [otherOption, setOtherOption] = useState('');

  const handleStarClick = (value) => {
    setRating(value);
    setShowOptions(true);
  };

  const handleOptionToggle = (option) => {
    setSelectedOptions(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = async () => {
    const feedbackData = {
      rating,
      selectedOptions,
      otherOption: otherOption.trim() ? otherOption : undefined
    };

    try {
      const response = await fetch('/api/submit-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedbackData)
      });
      if (response.ok) {
        alert('Feedback submitted successfully!');
        // Reset the form
        setRating(0);
        setShowOptions(false);
        setSelectedOptions([]);
        setOtherOption('');
      } else {
        alert('Failed to submit feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="relative max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <div className="flex justify-start space-x-2 mb-4">
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            size={24}
            onClick={() => handleStarClick(value)}
            fill={value <= rating ? "gold" : "none"}
            stroke={value <= rating ? "gold" : "currentColor"}
            className="cursor-pointer"
          />
        ))}
      </div>
      
      {showOptions && (
        <div className="mt-4 p-4 border rounded-lg relative">
          <div className="absolute -top-2 left-4 transform -translate-x-1/2 w-4 h-4 bg-white border-t border-l rotate-45"></div>
          {['Option 1', 'Option 2', 'Option 3'].map((option) => (
            <div key={option} className="flex items-center justify-between mb-2 cursor-pointer" onClick={() => handleOptionToggle(option)}>
              <span>{option}</span>
              {selectedOptions.includes(option) && (
                <Check size={20} className="text-green-500" />
              )}
            </div>
          ))}
          <div className="mt-4">
            <label htmlFor="other" className="block mb-2">Other:</label>
            <input
              type="text"
              id="other"
              value={otherOption}
              onChange={(e) => setOtherOption(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter custom option..."
            />
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedbackComponent;