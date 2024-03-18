import React, { useState } from 'react';
import '../styles/NewUserForm.css'; 


const NewUserForm = ({ addUser, onClose }) => {
    const [formData, setFormData] = useState({
        username: '',
        role: '',
        email: '',
        firstName: '',
        lastName: ''
    });

    // Handle form input change
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submit
    const handleSubmit = event => {
        event.preventDefault();
        addUser(formData);
        setFormData({
            username: '',
            role: '',
            email: '',
            firstName: '',
            lastName: ''
        });
    };

    return (
        <div className="new-user-form">
            <h2>Create New User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="role">Role:</label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Create User</button>
            </form>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default NewUserForm;
