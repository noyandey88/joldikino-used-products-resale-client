import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { getUserRole } from '../api/user';

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [isBuyer, setIsBuyer] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true);
    // localStorage.removeItem('joldikino-token');
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => unsubscribe();
  }, []);

  // get user role
  useEffect(() => {
    getUserRole(user?.email)
      .then(data => {
        console.log(data);
        setUserRole(data);
        data === 'admin' ? setIsAdmin(true) : setIsAdmin(false);
        data === 'seller' ? setIsSeller(true) : setIsSeller(false);
        data === 'buyer' ? setIsBuyer(true) : setIsBuyer(false);
      })
      .catch((err) => {
        console.error(err);
      })
  }, [user?.email]);

  const authInfo = {
    createUser,
    loginUser,
    googleLogin,
    updateUserProfile,
    logoutUser,
    user,
    loading,
    setLoading,
    userRole,
    isAdmin,
    isSeller,
    isBuyer
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;