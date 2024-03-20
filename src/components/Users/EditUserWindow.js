//EditWindow.js
import React, { useState } from 'react';
import '../../styles/EditUserWindow.css';


const EditUserWindow = ({ user, onSave, onClose, setShowEditWindow, updateUsers }) => {
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
    fetch(`http://localhost:3001/api/users/${user._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedFields),
    })
    .then(response => response.json())
    .then(data => {
      console.log('User updated successfully:', data);
      updateUsers(data); // Call the updateUsers function with the updated user
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
        <select
        name="role"
        value={editedUser.role}
        onChange={handleInputChange}
    >
        <option value="">Select a role...</option>
        <option value="admin">Admin</option>
        <option value="trainer">Trainer</option>
    </select>
      </div>
      <div className="button-group">
      <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EditUserWindow;
