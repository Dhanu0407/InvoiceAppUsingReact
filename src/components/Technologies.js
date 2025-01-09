// Technologies.js

import React from 'react';
import { useParams } from 'react-router-dom';

const Technologies = () => {
  const { tech } = useParams();
  

  // Define descriptions for each technology
  const descriptions = {
    react: 'React is a JavaScript library for building user interfaces.',
    node: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    tailwind: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.'
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl bg-gray-700 rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl text-red-400 font-extrabold mb-6">
          {tech.charAt(0).toUpperCase() + tech.slice(1)} Technology
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          {descriptions[tech] ? (
            descriptions[tech]
          ) : (
            <span className="text-red-300 font-semibold">No description available</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Technologies;
