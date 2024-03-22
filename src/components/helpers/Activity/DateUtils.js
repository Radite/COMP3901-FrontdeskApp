export function formatDate(date) {
  return date.toLocaleDateString();
}

export function formatDay(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const localDate = new Date(date);
  localDate.setMinutes(localDate.getMinutes() + localDate.getTimezoneOffset());
  return days[localDate.getDay()];
}

export function getWeekDates(weekOffset = 0) {
  const now = new Date();
  const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() - (7 * weekOffset));
  if (now.getDay() === 0) {
    startOfWeek.setDate(startOfWeek.getDate() - 7);
  }
  const endOfWeek = new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() + 6);
  return { startOfWeek, endOfWeek };
}
