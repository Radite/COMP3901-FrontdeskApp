// filterUsers.js

const filterUsers = (users, searchQuery) => {
    return users.filter(user =>
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
    );
};

export default filterUsers;
