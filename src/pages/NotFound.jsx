import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 animate-fadeIn">
      <div className="text-center space-y-6">
        {/* 404 Header */}
        <h1 className="text-6xl font-bold text-blue-600 animate-pulse">404</h1>
        <p className="text-xl text-blue-800">Oops! Page Not Found</p>
       
        
        {/* Back to Home Button */}
        <a
          href="/"
          className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;