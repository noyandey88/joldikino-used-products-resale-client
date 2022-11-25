import axios from "axios";

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

// Vefify user
export const verifyUser = async (user) => {
  // delete user id
  delete user._id;

  const url = `${process.env.REACT_APP_API_URL}/user/${user?.email}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      authorization: `bearer ${localStorage.getItem('joldikino-token')}`
    },
    body: JSON.stringify({...user, isVerified: true})
  })
  const users = await response.json();
  return users;
}
// is seller verified
export const sellerVerification = async (email) => {
  const url = `${process.env.REACT_APP_API_URL}/user/seller/${email}`;
  const response = await axios.get(url);
  return response.data?.isVerified;
};

// delete a user (only for admin)
export const deleteSavedUser = async (id) => {
  const url = `${process.env.REACT_APP_API_URL}/users/${id}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      authorization: `bearer ${localStorage.getItem('joldikino-token')}`
    }
  });
  const data = await response.json();
  return data;
}