import { useState, useEffect } from 'react';

const useUserState = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showEditWindow, setShowEditWindow] = useState(false);
    const [newUserWindow, setNewUserWindow] = useState(false);

    useEffect(() => {
        // Fetch user data from the backend
        fetch('http://localhost:3001/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return {
        users,
        setUsers,
        selectedUser,
        setSelectedUser,
        showEditWindow,
        setShowEditWindow,
        newUserWindow,
        setNewUserWindow
    };
};

export default useUserState;
