// UserTableComponent.js

import React from 'react';

const UserTableComponent = ({ currentUsers, handleEditClick, indexOfFirstUser, setSelectedUser, setShowEditWindow, handleNewUserClick, setNewUserWindow }) => {  
           return (
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
                        <div className="button-container">
                <button onClick={() => handleEditClick(user, setSelectedUser, setShowEditWindow)}>Edit</button>
              </div>                                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="4"></td>
                    <td>
                        <button className="button-container" onClick={() => handleNewUserClick(setNewUserWindow)}>New User</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};

export default UserTableComponent;
