export const fetchUserDetails = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3001/api/users/${userId}`);
    const data = await response.json();
    return {
      name: `${data.firstName} ${data.lastName}`,
      idNumber: data.ID_number
    };
  } catch (error) {
    console.error(`Error fetching user details for user ID ${userId}:`, error);
  }
};
