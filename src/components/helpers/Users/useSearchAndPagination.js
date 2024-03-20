// useSearchAndPagination.js
import { useState } from 'react';

const useSearchAndPagination = (users, usersPerPage) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Handle search query change
    const handleSearchChange = event => {
        setCurrentPage(1); // Reset page to 1 when search query changes
        setSearchQuery(event.target.value);
    };

    // Filter users based on search query
    const filteredUsers = users.filter(user =>
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Get current users for pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    // Modularized pagination function
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return {
        searchQuery,
        setSearchQuery,
        currentPage,
        setCurrentPage,
        handleSearchChange,
        filteredUsers,
        currentUsers,
        paginate
    };
};

export default useSearchAndPagination;
