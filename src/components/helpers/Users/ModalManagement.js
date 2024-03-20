// ModalManagement.js
import React from 'react';
import Modal from './Modal';
import EditUserWindow from '../../Users/EditUserWindow';
import NewUserWindow from '../../Users/NewUserWindow';
import { handleSaveOrUpdateUser, handleCloseEditWindow } from './userHandlers'; 
const ModalManagement = ({ showEditWindow, setShowEditWindow, newUserWindow, setNewUserWindow, selectedUser, users, setUsers, updateUsers }) => {
    return (
        <>
            {showEditWindow && 
                <Modal isOpen={showEditWindow} onClose={() => handleCloseEditWindow(setShowEditWindow)}>
                    <EditUserWindow 
                        user={selectedUser} 
                        onSave={(user) => handleSaveOrUpdateUser(user, true, users, setUsers, setNewUserWindow, setShowEditWindow)} 
                        onClose={() => handleCloseEditWindow(setShowEditWindow)}
                        updateUsers={updateUsers} // Pass updateUsers as a prop

                    />
                </Modal>
            }
            {newUserWindow && 
                <Modal isOpen={newUserWindow} onClose={() => setNewUserWindow(false)}>
                    <NewUserWindow 
                        onSave={(user) => handleSaveOrUpdateUser(user, false, users, setUsers, setNewUserWindow, setShowEditWindow)} 
                        onClose={() => setNewUserWindow(false)}
                    />
                </Modal>
            }
        </>
    );
};

export default ModalManagement;
