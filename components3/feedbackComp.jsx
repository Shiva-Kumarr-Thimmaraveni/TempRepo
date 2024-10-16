import React, { useState } from "react";
import { ThumbsUp, Check } from "lucide-react";

const FeedbackComponent = ({ option1, option2, option3 }) => {
  //   const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [otherOption, setOtherOption] = useState("");

  // {"thumbsup":0,"thumbsdown":1,"helpful":0,"efficient":0,
  // "concise":0,"confusing":0,"incorrect":0,"misrepresentation":0,
  // "positive_others":"","negative_others":"I don't like your response"}

  const handleOptionToggle = (option) => {
    console.log("option from handleOptionToggle function -->", option);
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = async () => {
    const feedbackData = {
      selectedOptions,
      otherOption: selectedOptions.includes("Other") ? otherOption.trim() : "",
    };

    try {
      console.log("feedbackData -->", feedbackData);

      const response = await fetch("/api/submit-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      });
      if (response.ok) {
        alert("Feedback submitted successfully!");

        setShowOptions(false);
        setSelectedOptions([]);
        setOtherOption("");
      } else {
        alert("check in console for options..");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  const options = [`${option1}`, `${option2}`, `${option3}`, "Other"];

  return (
    <>
      <div className="mt-4 p-4 border-2 border-orange-500 rounded-lg relative bg-white">
        <div className="absolute -top-2 left-4 transform -translate-x-1/2 w-4 h-4 bg-white border-t-2 border-l-2 border-orange-500 rotate-45"></div>
        {options.map((option) => (
          <div key={option} className="mb-2">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleOptionToggle(option)}
            >
              <span className="text-black">{option}</span>
              {selectedOptions.includes(option) && (
                <Check size={20} className="text-green-500 ml-4" />
              )}
            </div>
            {option === "Other" && selectedOptions.includes("Other") && (
              <input
                type="text"
                value={otherOption}
                onChange={(e) => setOtherOption(e.target.value)}
                className="w-full mt-2 p-2 border rounded text-black"
                placeholder="Enter custom option..."
              />
            )}
            {console.log(selectedOptions)}
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </>
  );
};

export default FeedbackComponent;
