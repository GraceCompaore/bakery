import React, { useState } from 'react';
import AuthApi from '../api/auth.api';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState('');

  const login = ({ login, password }) => {
    return AuthApi.login({ login, password }).then(() => {
      setIsLogged(!!localStorage.getItem('Token'));
      setUsername(login);
      return true;
    });
  };

  const logout = () => {
    localStorage.removeItem('Token');
    setIsLogged(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        username,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
