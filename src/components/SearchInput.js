import React from 'react';

const SearchInput = ({ value, onChange }) => {
    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                placeholder="Search by name..."
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default SearchInput;
