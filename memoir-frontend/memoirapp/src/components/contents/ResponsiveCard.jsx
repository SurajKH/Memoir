import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResponsiveCard = () => {

  const navigate = useNavigate("http://localhost:3000");

  const navigateToContactUs = () => {
    // Replace '/new-page' with the path you want to navigate to
    navigate('/contact');
  };

  const navigateToCodeEditor = () => {
    // Replace '/new-page' with the path you want to navigate to
    navigate('/code-arena');
  };

  const navigateToGamingSection = () => {
    // Replace '/new-page' with the path you want to navigate to
    navigate('/gaming-section');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center w-3/4 mx-auto">
      <div className="p-6 rounded-md shadow-md bg-gray-800 text-white">
        <h5 className="text-2xl font-bold mb-4">Have any Queries regarding the application?</h5>
        <p className="text-white mb-4 text-2xl"> Feel free to contact us...</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-2xl" 
        onClick={(event)=>{
          event.preventDefault();
          navigateToContactUs();
        }}>
          Click Here
        </button>
      </div>

      <div className="p-6 rounded-md shadow-md bg-gray-800 text-white">
        <h5 className="font-bold mb-4 text-2xl">Feel like writing Code?</h5>
        <p className="text-white mb-4 text-2xl">We have your back (We have a custom Code Editor)...</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-2xl" 
        onClick={(event)=>{
          event.preventDefault();
          navigateToCodeEditor();
        }}>
          Click Here
        </button>
      </div>

      <div className="p-6 rounded-md shadow-md bg-gray-800 text-white">
        <h5 className="text-2xl font-bold mb-4">Feel like playing a game ?</h5>
        <p className="text-white mb-4 text-2xl">Its Fun time lets play some game. </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-2xl" onClick={(event)=>{
          event.preventDefault();
          navigateToGamingSection();
        }}>
          Click Here
        </button>
      </div>
    </div>
  );
};

export default ResponsiveCard;
