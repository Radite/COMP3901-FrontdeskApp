import React, { useState } from 'react';
import '../styles/UserTable.css';
import NewUserForm from './NewUserForm'; 

const UserTable = () => {
    // Placeholder user data
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'User' },
        { id: 4, name: 'Bob Brown', email: 'bob@example.com', role: 'User' },
        { id: 5, name: 'David Lee', email: 'david@example.com', role: 'User' },
        { id: 6, name: 'Emma Thompson', email: 'emma@example.com', role: 'User' },
        { id: 7, name: 'Michael Smith', email: 'michael@example.com', role: 'User' },
        { id: 8, name: 'Olivia Wilson', email: 'olivia@example.com', role: 'User' },
        { id: 9, name: 'Sophia Davis', email: 'sophia@example.com', role: 'User' },
        { id: 10, name: 'William Harris', email: 'william@example.com', role: 'User' },
        { id: 11, name: 'Emily Clark', email: 'emily@example.com', role: 'User' },
        { id: 12, name: 'James Turner', email: 'james@example.com', role: 'User' },
        { id: 13, name: 'Isabella White', email: 'isabella@example.com', role: 'User' },
        { id: 14, name: 'Benjamin King', email: 'benjamin@example.com', role: 'User' },
        { id: 15, name: 'Ella Martinez', email: 'ella@example.com', role: 'User' },
        { id: 16, name: 'Alexander Scott', email: 'alexander@example.com', role: 'User' },
    ]);

    // Search query state
    const [searchQuery, setSearchQuery] = useState('');
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    // New user form state
    const [newUserWindow, setNewUserWindow] = useState(null);

    // Handle search query change
    const handleSearchChange = event => {
        setCurrentPage(1); // Reset page to 1 when search query changes
        setSearchQuery(event.target.value);
    };

    // Filter users based on search query
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Get current users for pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    // Function to handle edit click
    const handleEditClick = userId => {
        // Logic to handle edit button click, such as redirecting to edit page
        console.log(`Edit clicked for user ID: ${userId}`);
    };

    // Pagination - Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

  // Function to open/close new user form in a new window
// Function to open/close new user form in a new window
const toggleForm = () => {
    const windowFeatures = 'width=400,height=400,resizable,scrollbars=yes';

    if (newUserWindow && !newUserWindow.closed) {
        newUserWindow.close();
        setNewUserWindow(null);
    } else {
        const newWindow = window.open('', 'New User', windowFeatures);

        if (newWindow) {
            newWindow.document.title = 'New User';
            // Render the new user form in the new window
            const formContainer = newWindow.document.createElement('div');
            formContainer.setAttribute('id', 'newUserForm');
            newWindow.document.body.appendChild(formContainer);

            const newUserForm = document.getElementById('newUserFormContainer').cloneNode(true);
            newUserForm.style.display = 'block';
            formContainer.appendChild(newUserForm);

            setNewUserWindow(newWindow);
        } else {
            console.error('Failed to open new window. Popup blocker may be enabled.');
        }
    }
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


            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th></th> {/* New column for Edit button */}
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{                                user.role}
                            </td>
                            <td>
                                <button onClick={() => handleEditClick(user.id)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Pagination */}
            <div className="pagination">
                {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }).map((_, index) => (
                    <button key={index + 1} onClick={() => paginate(index + 1)}>{index + 1}</button>
                ))}
            </div>
            <div className="new-user-button-container">
                <button onClick={toggleForm}>New User</button>
            </div>
                        {/* New User Form Container */}
                        <div id="newUserFormContainer" style={{ display: 'none' }}>
                {newUserWindow && <NewUserForm onClose={toggleForm} />}
            </div>

        </div>
    );
};

export default UserTable;

