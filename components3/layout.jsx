import React from 'react';

const PageLayout = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <div className="border-2 border-gray-300 p-4 mb-4 bg-white">
        <h2 className="text-xl font-bold mb-2">Section 1</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 pr-4">
            <div className="border-2 border-gray-300 p-2 mb-4 bg-blue-200">
              <p className="text-center">col-4</p>
            </div>
            <div className="border-2 border-gray-300 p-2 bg-blue-300">
              <p className="text-center">col-4</p>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="border-2 border-gray-300 p-2 h-full bg-green-200">
              <p className="text-center">col-8</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-2 border-gray-300 p-4 bg-white">
        <h2 className="text-xl font-bold mb-2">Section 2</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-4 mb-4 md:mb-0">
            <div className="border-2 border-gray-300 p-2 h-full bg-yellow-200">
              <p className="text-center">col-6</p>
            </div>
          </div>
          <div className="md:w-1/4 pr-4 mb-4 md:mb-0">
            <div className="border-2 border-gray-300 p-2 h-full bg-pink-200">
              <p className="text-center">col-3</p>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="border-2 border-gray-300 p-2 h-full bg-purple-200">
              <p className="text-center">col-3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;