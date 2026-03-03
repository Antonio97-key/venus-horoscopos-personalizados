export function getStoredUser() {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem('venus_user_data');
  return stored ? JSON.parse(stored) : null;
}

export function storeUser(data: any) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('venus_user_data', JSON.stringify(data));
}

export function clearStoredUser() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('venus_user_data');
  localStorage.removeItem('horoscopo_history');
}
