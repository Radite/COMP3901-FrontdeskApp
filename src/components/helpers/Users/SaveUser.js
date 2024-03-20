// SaveUser.js

const saveUser = (newUser) => {
  return fetch('http://localhost:3001/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  })
  .then(response => response.json())
  .then(data => {
    console.log('User created successfully:', data);
    return data;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};

export default saveUser;
