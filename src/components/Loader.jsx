import React from 'react';

function Loader({ message = 'Loading delicious recipes...' }) {
  return (
    <div className="loader-container" role="status">

      {/* Animated loading spinner */}
      <div className="loader-spinner"></div>

      {/* Loading message */}
      <p>{message}</p>

    </div>
  );
}

export default Loader;