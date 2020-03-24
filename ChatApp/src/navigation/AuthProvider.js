import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';

/**
 * This provider is created
 * to access user in whole app
 * also, to check user logged in state
 */

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            switch (e.code) {
              case 'auth/operation-not-allowed':
                console.log('Enable anonymous in your firebase console.');
                break;
              default:
                console.error(e);
                break;
            }
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            switch (e.code) {
              case 'auth/operation-not-allowed':
                console.log('Enable anonymous in your firebase console.');
                break;
              default:
                console.error(e);
                break;
            }
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
