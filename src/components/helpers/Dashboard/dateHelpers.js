// dateHelpers.js
export const formatDate = dateString => {
  const date = new Date(dateString);
  return `${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
};

export const calculateTimeLeft = (expirationTime, currentTime) => {
  const expirationDate = new Date(expirationTime);
  const timeLeftMs = expirationDate - currentTime;
  const timeLeftMinutes = Math.floor(timeLeftMs / (1000 * 60));
  return `${timeLeftMinutes} minutes`;
};
