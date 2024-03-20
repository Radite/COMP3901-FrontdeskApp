// eventHandlers/userHandlers.js

export const handleNewUserClick = (setNewUserWindow) => {
    setNewUserWindow(true); // Show the new user window when the button is clicked
};


export const handleEditClick = (user, setSelectedUser, setShowEditWindow) => {
    setSelectedUser(user);
    setShowEditWindow(true);
};

export const handleCloseEditWindow = (setShowEditWindow) => {
    setShowEditWindow(false);
};


export const handleSaveOrUpdateUser = (user, isEdit, users, setUsers, setNewUserWindow, setShowEditWindow) => {
    const url = isEdit ? `http://localhost:3001/api/users/${user.id}` : 'http://localhost:3001/api/users';
    const method = isEdit ? 'PUT' : 'POST';

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => {
        console.log('User saved or updated successfully:', data);
        // If this is a new user, add them to the existing list of users
        if (!isEdit) {
            setUsers([...users, data]);
        } else {
            // If this is an existing user, update their data in the list of users
            setUsers(users.map(u => u.id === data.id ? data : u));
        }
    })
    .catch(error => console.error('Error saving or updating user:', error));

    // Close the new user or edit user window after saving or updating
    setNewUserWindow(false);
    setShowEditWindow(false);
};
