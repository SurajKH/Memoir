// // auth.js
// import { createContext, useContext, useState, useEffect } from 'react';
// import auth from './firebase'; // Import your auth instance from firebase.js
// import { onAuthStateChanged, signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase, GoogleAuthProvider, signInWithPopup, signOut as signOutFirebase } from 'firebase/auth';
// import { jwtDecode } from 'jwt-decode'; 
// const AuthContext = createContext();
// //mK4fdMehNRI#45T4du4gKUB$2423
// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const signInWithEmailAndPassword = async (email, password) => {
//     try {
//       await signInWithEmailAndPasswordFirebase(auth, email, password);
//     } catch (error) {
//       console.error('Error signing in with email and password', error.message);
//     }
//   };

//   const signInWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       await signInWithPopup(auth, provider);
//     } catch (error) {
//       console.error('Error signing in with Google', error.message);
//     }
//   };

//   const signOut = async () => {
//     try {
//       await signOutFirebase(auth);
//     } catch (error) {
//       console.error('Error signing out', error.message);
//     }
//   };

//   // useEffect(() => {
//   //   const unsubscribe = onAuthStateChanged(auth, (user) => {
//   //     setCurrentUser(user);
//   //     setLoading(false);
//   //   });

//   //   return unsubscribe;
//   // }, []);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       setCurrentUser(user);
//       setLoading(false);

//       // Redirect to /dashboard upon successful sign-in
//       if (user) {
//         // Store the token in local storage
//         try {
//           const userToken = await user.getIdToken();
//           localStorage.setItem('userToken', userToken);

//           // Redirect to /dashboard
//           window.location.href = '/dashboard';
//         } catch (error) {
//           console.error('Error getting user token:', error.message);
//         }
//       }
//     });

//     return unsubscribe;
//   }, [auth]);

//   useEffect(() => {
//     // Periodically check token validity and handle automatic sign-out
//     const checkTokenValidity = setInterval(async () => {
//       const userToken = localStorage.getItem('userToken');
//       if (userToken) {
//         try {
//           // Decode the token to get the expiration time
//           const decodedToken = jwtDecode(userToken);
//           const currentTime = Date.now() / 1000;

//           if (decodedToken.exp < currentTime) {
//             // Token is expired, clear local storage and sign out
//             localStorage.removeItem('userToken');
//             await signOut(); // Using await here
//             // Redirect to /signin
//             window.location.href = '/signin';
//           }
//         } catch (error) {
//           console.error('Error decoding or checking token:', error.message);
//         }
//       }
//     }, 60000); // Check every 60 seconds (adjust as needed)

//     // Clear the interval on component unmount
//     return () => clearInterval(checkTokenValidity);
//   }, [signOut]);


//   const value = {
//     currentUser,
//     signInWithEmailAndPassword,
//     signInWithGoogle,
//     signOut,
//   };

//   return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// ... (previous code)

import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase, GoogleAuthProvider, signInWithPopup, signOut as signOutFirebase, getAuth } from 'firebase/auth';
// import jwtDecode from 'jwt-decode';
import { createContext, useContext, useState, useEffect,useCallback } from 'react';
import auth from './firebase';
// import { onAuthStateChanged, signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase, GoogleAuthProvider, signInWithPopup, signOut as signOutFirebase } from 'firebase/auth';
import { jwtDecode } from 'jwt-decode'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPasswordFirebase(auth, email, password);
    } catch (error) {
      console.error('Error signing in with email and password', error.message);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google', error.message);
    }
  };

  const signOut = useCallback(async () => {
    try {
      await signOutFirebase(auth);
    } catch (error) {
      console.error('Error signing out', error.message);
    }
  }, [auth]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setLoading(false);

      // Redirect to /dashboard upon successful sign-in
      if (user) {
        // Store the token in local storage
        try {
          const userToken = await user.getIdToken();
          localStorage.setItem('userToken', userToken);

          // Redirect to /dashboard using React Router v6
         // navigate('/dashboard');
        } catch (error) {
          console.error('Error getting user token:', error.message);
        }
      }
    });

    return unsubscribe;
  }, [auth]);

  useEffect(() => {
    // Periodically check token validity and handle automatic sign-out
    const checkTokenValidity = setInterval(async () => {
      const userToken = localStorage.getItem('userToken');
      if (userToken) {
        try {
          // Decode the token to get the expiration time
          const decodedToken = jwtDecode(userToken);
          const currentTime = Date.now() / 1000;

          if (decodedToken.exp < currentTime) {
            // Token is expired, clear local storage and sign out
            localStorage.removeItem('userToken');
            await signOut(); // Using await here
            // Redirect to /signin
            // navigate('/signin');
          }
        } catch (error) {
          console.error('Error decoding or checking token:', error.message);
        }
      }
    }, 60000); // Check every 60 seconds (adjust as needed)

    // Clear the interval on component unmount
    return () => clearInterval(checkTokenValidity);
  }, [signOut]);

  const value = {
    currentUser,
    signInWithEmailAndPassword,
    signInWithGoogle,
    signOut,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
