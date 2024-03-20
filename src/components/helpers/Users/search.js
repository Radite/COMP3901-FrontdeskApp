import React from 'react';

const Search = ({ searchQuery, handleSearchChange }) => {
    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default Search;
