import React from 'react';
import './Scrolling.css'; // Import your CSS file

const ScrollingText = () => {
    return (
      <div className="header bg-gray-900 text-white p-4">
        <h1 
        className="scrolling-text overflow-hidden 
        whitespace-nowrap font-heading uppercase text-3xl animate-scroll text-center">
            Open For Hiring
        </h1>
      </div>
    );
  };
export default ScrollingText;