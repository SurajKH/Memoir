import React from 'react';

const ResponsiveCard = () => {
  return (
    <div className="container mx-auto p-4 w-3/4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h5 className="text-2xl font-bold mb-4">Have any Queries?</h5>
          <p className="text-gray-700 mb-4"> Feel free to contact us...</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Click Here
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h5 className="text-2xl font-bold mb-4">Feel like Coding?</h5>
          <p className="text-gray-700 mb-4">We have your back (We have a custom Code Editor)...</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Click Here
          </button>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h5 className="text-2xl font-bold mb-4">Next Section.</h5>
          <p className="text-gray-700 mb-4">Coming Soon...</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Click Here
          </button>
        </div>
        {/* Card 3 */}
        {/* <div className="bg-white p-6 rounded-md shadow-md">
          <h5 className="text-2xl font-bold mb-4">Card 3</h5>
          <p className="text-gray-700 mb-4">Content for card 3.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Click Here
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ResponsiveCard;
