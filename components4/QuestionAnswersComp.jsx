import React from 'react';
import { ThumbUp, ThumbDown, Favorite } from '@mui/icons-material'; // Import icons from Material UI

const QuestionAnswerComponent = () => {
  return (
    <div className="flex flex-col items-start p-6 space-y-6 w-full">
      {/* Question Section */}
      <div className="flex justify-end w-full items-start">
        <div className="max-w-3/5 text-right">
          {/* Question Box */}
          <div className="bg-pink-100 p-4 rounded-lg shadow-md">
            <p className="text-gray-800 text-base font-medium">What are the key principles of design?</p>
          </div>
          {/* Icons below the question box */}
          <div className="flex justify-end items-center space-x-4 mt-2">
            <ThumbUp className="cursor-pointer text-gray-600" />
            <ThumbDown className="cursor-pointer text-gray-600" />
          </div>
        </div>
        {/* Profile Circle */}
        <div className="ml-4 bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
          TS
        </div>
      </div>

      {/* Answer Section */}
      <div className="flex justify-start w-full">
        <div className="max-w-[70%] text-left">
          {/* Answer Box */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="text-gray-700 text-base">
              Design thinking is a problem-solving approach that emphasizes empathy, creativity, and collaboration.
              It involves understanding the needs and perspectives of users, generating innovative ideas, and rapidly
              prototyping and testing solutions.
            </p>
          </div>
          {/* Icons below the answer box */}
          <div className="flex justify-start items-center space-x-4 mt-2">
            <Favorite className="cursor-pointer text-gray-600" />
            <ThumbUp className="cursor-pointer text-gray-600" />
            <ThumbDown className="cursor-pointer text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswerComponent;
