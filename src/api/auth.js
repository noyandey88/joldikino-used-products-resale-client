export const saveUserWithRegister = (user, role) => {
  const currentUser = {
    name: user?.displayName,
    email: user?.email,
    role: role,
  };
  // save user to database
  fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(currentUser)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      // save auth token in local storage
      localStorage.setItem('joldikino-token', data.token);
    })
    .catch(error => {
      console.error(error);
    })
}

// save user with login
export const saveUserWithLogin = (user) => {
  const currentUser = {
    name: user?.displayName,
    email: user?.email,
  };
  // save user to database
  fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(currentUser)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      // save auth token in local storage
      localStorage.setItem('joldikino-token', data.token);
    })
    .catch(error => {
      console.error(error);
    })
}