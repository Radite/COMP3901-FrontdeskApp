import React, { useState } from 'react';

const UserSearch = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search users..."
        />
    );
};

export default UserSearch;
