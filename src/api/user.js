// get user role
export const getUserRole = async (email) => {
  const url = `${process.env.REACT_APP_API_URL}/user/${email}`;
  const response = await fetch(url, {
    headers: {
      authorization: `bearer ${localStorage.getItem('joldikino-token')}`
    }
  });
  const user = await response.json();
  return user?.role;
}