// AnimatedCircle.js
import React from 'react';

const AnimatedCircle = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        className="animate-spin h-20 w-20 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l-2.12 2.121A8 8 0 014 12H0c0 5.022 2.909 9.355 7.065 11.001L8 19.29z"
        ></path>
      </svg>
    </div>
  );
};

export default AnimatedCircle;
