import React from 'react';
import { useParams } from 'react-router-dom';

const Expertise = () => {
  const { expertise } = useParams();
  return (
    <div className="p-6">
      <h1 className="text-3xl text-red-500 font-bold mb-4">{expertise} Service</h1>
      <p className="text-white">Explore our {expertise} service offerings and expertise.</p>
    </div>
  );
};

export default Expertise;