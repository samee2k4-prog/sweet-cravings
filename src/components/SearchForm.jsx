import React, { useState } from 'react';

function SearchForm({
  onSearch,
  initialValue = '',
  placeholder = 'Search for brownies, cakes, cookies...'
}) {
  // Store the search input value
  const [searchTerm, setSearchTerm] = useState(initialValue);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Remove unnecessary spaces
    const trimmedSearch = searchTerm.trim();

    // Send search value to the parent component
    if (onSearch) {
      onSearch(trimmedSearch);
    }
  };

  // Clear the search input
  const handleClear = () => {
    setSearchTerm('');

    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <form
      className="search-form"
      onSubmit={handleSubmit}
    >

      {/* Search input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder={placeholder}
        aria-label="Search dessert recipes"
      />

      {/* Search button */}
      <button type="submit" className="search-button">
        Search
      </button>

      {/* Clear button appears when text is entered */}
      {searchTerm && (
        <button
          type="button"
          className="clear-search-button"
          onClick={handleClear}
        >
          Clear
        </button>
      )}

    </form>
  );
}

export default SearchForm;