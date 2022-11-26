import React from 'react';
import spinner from '../assets/others/loading-1.gif';

const Spinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Spinner;