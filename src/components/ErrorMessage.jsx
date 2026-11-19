import React from 'react';

function ErrorMessage({ message = 'Something went wrong. Please try again.' }) {
  return (
    <div className="error-message" role="alert">
      {/* Error heading */}
      <h3>Unable to load recipes</h3>

      {/* Display the actual error message */}
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;