import React, { useState } from 'react';
import '../styles/EditUserWindow.css';


const EditUserWindow = ({ user, onSave, onClose }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    // Filter out unchanged fields
    const editedFields = {};
    for (const key in editedUser) {
      if (editedUser[key] !== user[key]) {
        editedFields[key] = editedUser[key];
      }
    }
    
    // Send PATCH request with only the edited fields
    fetch(`http://localhost:3001/api/users/${user._id}`, { // Use user._id instead of user.id
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedFields),
    })
    .then(response => response.json())
    .then(data => {
      console.log('User updated successfully:', data);
      // Update the user list with the updated user
      // You may need to implement this logic based on your application
    })
    .catch(error => console.error('Error updating user:', error));
    
    // Close the edit user window
    onClose();
  };
  
  
  return (
    <div className="edit-user-window">
      <h2>Edit User</h2>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={editedUser.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={editedUser.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={editedUser.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Role:</label>
        <input
          type="text"
          name="role"
          value={editedUser.role}
          onChange={handleInputChange}
        />
      </div>
      <div className="button-group">
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditUserWindow;
