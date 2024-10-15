import React, { useState } from 'react'
import { ThumbsUp, Check } from 'lucide-react'

const FeedbackComponent = () => {
  const [showOptions, setShowOptions] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [otherOption, setOtherOption] = useState('')

  const toggleOptions = () => {
    setShowOptions(!showOptions)
  }

  const handleOptionToggle = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    )
  }

  const handleSubmit = async () => {
    const feedbackData = {
      selectedOptions,
      otherOption: selectedOptions.includes('Other')
        ? otherOption.trim()
        : "",
    }

    try {
        console.log('feedbackData -->', feedbackData)
      const response = await fetch('/api/submit-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedbackData),
      })
      if (response.ok) {
        alert('Feedback submitted successfully!')
        // Reset the form
        setShowOptions(false)
        setSelectedOptions([])
        setOtherOption('')
      } else {
        alert('Failed to submit feedback. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting feedback:', error)
      alert('An error occurred. Please try again later.')
    }
  }

  const options = ['Option 1', 'Option 2', 'Option 3', 'Other']

  return (
    <div className="relative max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <div className="flex justify-start mb-4">
        <ThumbsUp
          size={24}
          onClick={toggleOptions}
          className={`cursor-pointer ${
            showOptions ? 'text-blue-500' : 'text-gray-500'
          }`}
        />
      </div>

      {showOptions && (
        <div className="mt-4 p-4 border-2 border-orange-500 rounded-lg relative bg-white">
          <div className="absolute -top-2 left-4 transform -translate-x-1/2 w-4 h-4 bg-white border-t-2 border-l-2 border-orange-500 rotate-45"></div>
          {options.map((option) => (
            <div key={option} className="mb-2">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleOptionToggle(option)}
              >
                <span>{option}</span>
                {selectedOptions.includes(option) && (
                  <Check size={20} className="text-green-500" />
                )}
              </div>
              {option === 'Other' && selectedOptions.includes('Other') && (
                <input
                  type="text"
                  value={otherOption}
                  onChange={(e) => setOtherOption(e.target.value)}
                  className="w-full mt-2 p-2 border rounded"
                  placeholder="Enter custom option..."
                />
              )}
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      )}
    </div>
  )
}

export default FeedbackComponent
