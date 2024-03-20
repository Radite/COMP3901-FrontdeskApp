import React, { useState, useEffect } from 'react';
import '../styles/UserTable.css';
import NewUserWindow from './NewUserWindow';
import Pagination from './Pagination';
import EditUserWindow from './EditUserWindow';
import Modal from './Modal';



const UserTable = () => {
    const [users, setUsers] = useState([]);

    // Search query state
    const [searchQuery, setSearchQuery] = useState('');
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    // New user form state
    const [newUserWindow, setNewUserWindow] = useState(false); // Changed to false to initially hide the new user window

    // Handle search query change
    const handleSearchChange = event => {
        setCurrentPage(1); // Reset page to 1 when search query changes
        setSearchQuery(event.target.value);
    };

    

        // Function to handle click on the "New User" button
        const handleNewUserClick = () => {
            setNewUserWindow(true); // Show the new user window when the button is clicked
        };
        
    const [selectedUser, setSelectedUser] = useState(null);
    const [showEditWindow, setShowEditWindow] = useState(false);
  

  

    useEffect(() => {
        // Fetch user data from the backend
        fetch('http://localhost:3001/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    // Filter users based on search query
    const filteredUsers = users.filter(user =>
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Get current users for pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    // Function to handle edit click
    const handleEditClick = (user) => {
        setSelectedUser(user);
        setShowEditWindow(true);
        console.log('Selected User:', user); // Log selectedUser object
      };
      
      const handleSaveUser = (newUser) => {
        fetch(`http://localhost:3001/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
        .then(response => response.json())
        .then(data => {
            console.log('User saved successfully:', data);
            // Add the new user to the existing list of users
            setUsers([...users, data]);
        })
        .catch(error => console.error('Error saving user:', error));
    
        // Close the new user window after saving
        setNewUserWindow(null);
    };
    
      const handleCloseEditWindow = () => {
        setShowEditWindow(false);
      };

      const handleSaveNewUser = (newUser) => {
        fetch('http://localhost:3001/', { // replace with your server URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          // You can close the modal and refresh the user list here
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      };
      

    // Modularized pagination function
    const paginate = pageNumber => setCurrentPage(pageNumber);

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
                {currentUsers.map((user, index) => (
                        <tr key={user.id}>
                            <td>{indexOfFirstUser + index + 1}</td>
                        <td>{`${user.firstName} ${user.lastName}`}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                                <button onClick={() => handleEditClick(user)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredUsers.length / usersPerPage)}
                paginate={paginate}
            />{showEditWindow && 
                <Modal isOpen={showEditWindow} onClose={handleCloseEditWindow}>
                  <EditUserWindow 
                    user={selectedUser} 
                    onSave={handleSaveUser} 
                    onClose={handleCloseEditWindow} 
                  />
                </Modal>
              }
                {newUserWindow && 
                <Modal isOpen={newUserWindow} onClose={() => setNewUserWindow(false)}>
                    <NewUserWindow 
                    onSave={handleSaveNewUser} 
                    onClose={() => setNewUserWindow(false)}
                    />
                </Modal>
                }
                            {/* Button to open the new user window */}
            <button onClick={handleNewUserClick}>New User</button>
        </div>
    );
};

export default UserTable;

