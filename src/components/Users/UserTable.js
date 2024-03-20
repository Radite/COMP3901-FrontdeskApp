// UserTable.js
import React, { useState } from 'react';
import '../../styles/UserTable.css';
import Pagination from '../helpers/Users/Pagination';
import UserTableComponent from './UserTableComponent'; 
import useUserState from '../helpers/Users/UserState'; 
import { handleNewUserClick, handleEditClick } from '../helpers/Users/userHandlers'; 
import useSearchAndPagination from '../helpers//Users/useSearchAndPagination'; 
import ModalManagement from '../helpers/Users/ModalManagement';

const UserTable = () => {
    const { users, setUsers, selectedUser, setSelectedUser, showEditWindow, setShowEditWindow, newUserWindow, setNewUserWindow } = useUserState();
    const usersPerPage = 10;

    // Use the new hook for search and pagination
    const { searchQuery, currentPage, handleSearchChange, filteredUsers, currentUsers, paginate } = useSearchAndPagination(users, usersPerPage);

    // Calculate the index of the first user on the current page
    const indexOfFirstUser = currentPage * usersPerPage - usersPerPage;

    const updateUsers = (updatedUser) => {
        setUsers(users.map(user => user._id === updatedUser._id ? updatedUser : user));
      };

    return (
        <div>
            <div className="header-container">
            <h2>User List</h2>
            {/* Search input */}
            <div className="search-container">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            </div>
          {/* Use the new UserTableComponent */}
          <div className="table-container">
          <UserTableComponent
                currentUsers={currentUsers}
                handleEditClick={handleEditClick}
                indexOfFirstUser={indexOfFirstUser}
                setSelectedUser={setSelectedUser}
                setShowEditWindow={setShowEditWindow}
                handleNewUserClick={handleNewUserClick} // pass this prop
                setNewUserWindow={setNewUserWindow} // pass this prop
            />
            </div>
            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredUsers.length / usersPerPage)}
                paginate={paginate}
            />
            {/* Use the new ModalManagement component */}
            <ModalManagement 
                showEditWindow={showEditWindow} 
                setShowEditWindow={setShowEditWindow} 
                newUserWindow={newUserWindow} 
                setNewUserWindow={setNewUserWindow} 
                selectedUser={selectedUser} 
                users={users} 
                setUsers={setUsers} 
                updateUsers={updateUsers} // Pass updateUsers as a prop

            />
                            
</div>
            );
            };

            export default UserTable;

